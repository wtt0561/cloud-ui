import { getStyle, getScrollSize } from '../base/utils/style';
import { ellipsisTitle } from 'proto-ui.vusion/src/base/directives';
import { deepCopy } from '../base/utils/index';
import { debug } from 'util';

export default {
    name: 'u-table-view',
    props: {
        title: String,
        data: Array,
        allChecked: { type: Boolean, default: false },
        defaultSort: {
            type: Object,
            default() {
                return {
                    title: undefined,
                    order: undefined,
                };
            },
        },
        defaultFilter: {
            type: Object,
            default() {
                return {
                    title: undefined,
                    value: undefined,
                    column: undefined,
                };
            },
        },
        noDataText: { type: String, default: '暂无数据' },
        loading: { type: Boolean, default: false },
        height: [String, Number],
        layout: {
            type: String,
            default: 'fixed',
        },
        border: { type: Boolean, default: false },
        xScroll: { type: Boolean, default: false }, // 用来处理当表格出现水平滚动条时，默认scroll事件走表格的水平滚动
        width: [String, Number],
        visible: { type: Boolean, default: true },
        pattern: { type: String, default: 'normal' }, // 特殊显示内容情形
        limit: { type: Number, default: 5 }, // 用来默认显示limit条数据
        limitText: { type: String, default: '查看更多' },
        allText: { type: String, default: '收起' },
        defaultText: { type: String, default: '-' },
        // mode: { type: String, default: 'self' }, // fixed布局的时候计算方式是走原生表格的还是走自定义计算规则配置项
        showHeader: { type: Boolean, default: true }, // 展示表格头部
        loadText: { type: String, default: '' }, // 加载状态显示的文字
        rowClassName: { type: Function, default() { return ''; } }, // 自定义表格单行的样式
    },
    data() {
        return {
            columns: [],
            tdata: [],
            allSel: this.allChecked,
            columnsWidth: [],
            fixedRightWidth: [],
            copyTdata: [], // tdata的复制版本主要用来过滤
            tableWidth: undefined, // display值为none的时候需要特殊处理这个值
            bodyHeight: undefined,
            fixedTableHeight: undefined, // 当固定列和表格的高度一起使用的时候
            bodyWidth: undefined, // 当出现垂直滚动条的时候，需要减去滚动条的宽度，确保不会出现水平滚动条
            scrollWidth: undefined,
            over: false, // 当mouseover在表格时，此值为true
            fixedHeight: [], // 当fixed时表格行的高度值
            fixedLeftWidth: null, // fixed 时表格左部分宽度和的值
            rightColumns: [], // fixed值是right时需要重构columns顺序
            rightColumnsWidth: [], // fixed值是right时需要重构columnsWidth顺序
            isXScroll: false, // 判断是否会出现水平滚动条的情况
            isYScroll: false, // 判断添加height属性后，垂直方向是否应该添加滚动条
            fixedHover: false, // 用来实现党左右列固定的时候，hover到左右列的时候，阴影效果能够同步实现
            // filterValue: undefined, // 用来记录当前filter选项的值，方便在过滤的时候点击更多显示正确的数据
            // filterColumn: undefined, // 用来记录当前filter列，方便在过滤的时候点击更多显示正确的数据
            filterTdata: undefined, // 用来记录当前filter列过滤后符合条件的所有数据
            currentSortColumn: undefined, // 表示当前排序列
        };
    },
    directives: { ellipsisTitle },
    created() {
        this.$on('add-item-vm', (itemVM) => {
            itemVM.parentVM = this;
            this.columns.push(itemVM);
        });
    },
    mounted() {
        if (this.pattern === 'limit')
            this.tdata = this.initTableData(this.limit);
        else
            this.tdata = this.initTableData();
        this.copyTdata = this.initTableData();
        this.handleResize();
        window.addEventListener('resize', this.onResize, false);
        if (this.xScroll)
            document.addEventListener('mousewheel', this.onMouseWheel, false);
    },
    computed: {
        fixedLeftColumns() {
            return this.columns.filter((column) => column.fixed === 'left');
        },
        fixedRightColumns() {
            const rightCols = [];
            const other = [];
            this.columns.forEach((col) => {
                if (col.fixed && col.fixed === 'right') {
                    rightCols.push(col);
                } else {
                    other.push(col);
                }
            });
            this.rightColumns = rightCols.concat(other);
            return rightCols;
        },
        expandedColumn() {
            return this.columns.filter((column) => column.type === 'expand')[0];
        },
        allDisabled() {
            return this.tdata.every((item) => item.disabled);
        },
    },
    watch: {
        data: {
            deep: true,
            handler(newValue) {
                if (this.pattern === 'limit')
                    this.tdata = this.initTableData(this.limit);
                else
                    this.tdata = this.initTableData();

                this.copyTdata = this.initTableData();
                const flag = this.columns.some((column) => column.filter);
                if (flag) {
                    // 在有filter列的情况下  数据如果发生变化是需要对数据进行过滤显示的
                    let columnIndex;
                    if (this.defaultFilter.title === undefined) {
                        this.columns.some((item, index) => {
                            if (item.filter) {
                                this.defaultFilter.title = item.title;
                                this.defaultFilter.value = item.value;
                                this.defaultFilter.column = item;
                                columnIndex = index;
                                return true;
                            }
                            return false;
                        });
                    } else {
                        this.columns.some((column, index) => {
                            if (column.title === this.defaultFilter.title) {
                                this.defaultFilter.column = column;
                                columnIndex = index;
                                return true;
                            }
                            return false;
                        });
                    }
                    const column = this.defaultFilter.column;
                    const value = this.defaultFilter.value;
                    this.filterTdata = this.tdata = this.copyTdata.filter((item) => {
                        if (column.filterMethod)
                            return column.filterMethod(value, item[column.label], item, column);
                        else
                            return item[column.label] === value;
                    });
                    if (this.pattern === 'limit')
                        this.tdata = this.tdata.slice(0, this.limit);

                    this.$emit('filter-change', {
                        column,
                        value,
                        index: columnIndex,
                    });
                }
                if (this.currentSortColumn) {
                    const order = this.defaultSort.order === 'asc' ? -1 : 1;
                    this.sortData(this.currentSortColumn, order);
                }
                this.handleResize();
            },
        },
        allChecked(newValue) {
            this.allSel = newValue;
        },
        columnsWidth(newValue) {
            const leftIndexs = [];
            const rightIndexs = [];
            this.rightColumnsWidth = [];
            this.fixedLeftColumns && this.fixedLeftColumns.forEach((item) => {
                const index = this.columns.indexOf(item);
                leftIndexs.push(index);
            });
            this.fixedRightColumns && this.fixedRightColumns.forEach((item) => {
                const index = this.columns.indexOf(item);
                rightIndexs.push(index);
                newValue[index] && this.rightColumnsWidth.push(newValue[index]);
            });
            this.columns.forEach((item, index) => {
                if (rightIndexs.indexOf(index) === -1 && newValue[index]) {
                    this.rightColumnsWidth.push(newValue[index]);
                }
            });
            this.fixedLeftWidth = null;
            this.fixedRightWidth = null;
            leftIndexs.forEach((item) => {
                if (newValue[item])
                    this.fixedLeftWidth += parseFloat(newValue[item]);
            });
            rightIndexs.forEach((item) => {
                if (newValue[item])
                    this.fixedRightWidth += parseFloat(newValue[item]);
            });

            if (this.isYScroll) {
                this.fixedRightWidth -= this.scrollWidth;
            }
        },
        visible(newValue) {
            this.handleResize();
        },
    },
    methods: {
        rowClsName(index) {
            return this.rowClassName(index, this.tdata[index]);
        },
        showExpandIcon(column, value) {
            if (column.expandStrict) {
                if (!value)
                    return false;
                if (Array.isArray(value))
                    return value.length;
                if (typeof value === 'object')
                    return Object.keys(value).length;
                return value;
            }
            return true;
        },
        // 展示表格单元格具体内容函数 现在规则是row[column.label]是对象，数组全部不展示内容，只展示基本类型
        showContent(column, value) {
            if (!value && column.defaultText === '')
                return '';
            else {
                if (Array.isArray(value) || typeof value === 'object' && column.defaultText === '')
                    return column.defaultText;
                if (Array.isArray(value) || typeof value === 'object')
                    return column.defaultText || this.defaultText;
                return value || column.defaultText || this.defaultText;
            }
        },
        remove(item) {
            const index = this.columns.indexOf(item);
            ~index && this.columns.splice(index, 1);
        },
        setCellWidth(column, index) {
            let width = '';
            if (column.currentWidth)
                width = column.currentWidth;
            else if (this.columnsWidth[index])
                width = this.columnsWidth[index].width;

            // when browser has scrollBar,set a width to resolve scroll position bug
            if (width === '0')
                width = '';
            return width;
        },
        handleSort(column) {
            if (column.sortable) {
                if (column.title === this.defaultSort.title)
                    this.defaultSort.order = this.defaultSort.order === 'asc' ? 'desc' : 'asc';
                else {
                    this.defaultSort.title = column.title;
                    this.defaultSort.order = 'desc';
                }
                this.currentSortColumn = column;
                const order = this.defaultSort.order === 'asc' ? -1 : 1;
                this.sortData(column, order);
            }
        },
        sortData(column, order) {
            const label = column.label;
            if (column.sortRemoteMethod) {
                // 异步执行排序方法
                column.sortRemoteMethod(label, this.defaultSort.order, column);
            } else {
                if (column.sortMethod)
                    this.copyTdata.sort((value1, value2) => column.sortMethod(value1[label], value2[label]) ? order : -order);
                else {
                    this.copyTdata.sort((value1, value2) => {
                        if (value1[label] === value2[label])
                            return 0;
                        return value1[label] < value2[label] ? order : -order;
                    });
                }
                if (this.pattern === 'limit')
                    this.tdata = this.copyTdata.slice(0, this.limit);
                else
                    this.tdata = this.copyTdata;
            }
            this.$emit('sort-change', {
                column,
                label,
                order: this.defaultSort.order,
            });
        },
        getSelection() {
            const selectionIndexes = [];
            let noDisabledCount = 0;
            this.tdata.forEach((row, index) => {
                if (row.selected)
                    selectionIndexes.push(index);
                if (!row.disabled)
                    noDisabledCount++;
            });
            // 这里有坑 行数据的checkbox有disabled状态 点击全选 可以是全选的
            if (selectionIndexes.length === noDisabledCount && selectionIndexes.length !== 0)
                this.allSel = true;
            else
                this.allSel = false;
            this.$emit('update:allChecked', this.allSel);
            return this.data.filter((data, index) => selectionIndexes.indexOf(index) > -1);
        },
        allSelected() {
            this.$nextTick(() => {
                const flag = this.allSel;
                const copydata = this.tdata.concat();
                copydata.forEach((item) => {
                    if (!item.disabled)
                        item.selected = flag;
                });
                this.tdata = copydata;
                const selection = this.getSelection();
                if (flag)
                    this.$emit('select-all', selection);

                this.$emit('selection-change', selection);
            });
        },
        initTableData(value) {
            let tdata = [];
            const copyData = deepCopy([], this.data);
            copyData.forEach((item, index) => {
                /* eslint-disable */
                item.original_data = this.data[index];
                item.original_index = index;
            });
            const selection = this.columns && this.columns.some((item) => item.type && item.type === 'selection');
            const expand = this.columns && this.columns.some((item) => item.type && item.type === 'expand');
            if (selection && expand) {
                copyData.forEach((item) => {
                    if (item.selected === undefined)
                        item.selected = false;
                    if (item.expanded === undefined)
                        item.expanded = false;
                    if (item.iconName === undefined)
                        item.iconName = 'right';
                    if (item.disabled === undefined)
                        item.disabled = false;
                    tdata.push(item);
                });
            } else if (selection) {
                copyData.forEach((item) => {
                    if (item.selected === undefined)
                        item.selected = false;
                    if (item.disabled === undefined)
                        item.disabled = false;
                    tdata.push(item);
                });
            } else if (expand) {
                copyData.forEach((item) => {
                    if (item.expanded === undefined)
                        item.expanded = false;
                    if (item.iconName === undefined)
                        item.iconName = 'right';
                    tdata.push(item);
                });
            } else {
                copyData.forEach((item) => {
                    tdata.push(item);
                });
            }
            if (!copyData.length)
                this.allSel = false;
            // 固定左右列同步阴影实现方案
            if (this.fixedLeftColumns.length > 0 || this.fixedRightColumns.length > 0)
                tdata.forEach((item) => item.hover = false);

            if (value)
                tdata = tdata.slice(0, value);

            const selectionArr = this.getSelection();
            if (selectionArr.length !== 0)
                this.$emit('selection-change', selectionArr);

            return tdata;
        },
        handleResize() {
            if (this.layout !== 'auto') {
                this.$nextTick(() => {
                    // 判断是否会出现水平滚动条
                    let parentWidth;
                    parentWidth = this.$el.offsetWidth;
                    let tableWidth = this.$refs.body.offsetWidth;
                    if (parentWidth === 0) {
                        // 初始表格是隐藏的需要特殊处理的，此时上面两个值默认是0
                        parentWidth = tableWidth = this.$refs.root.parentNode.offsetWidth;
                    }

                    // 分别获取有百分比 具体数值 和无width的column集合
                    // 获取具体数值和非数值的列集合
                    const percentColumns = [];
                    const valueColumns = [];
                    const noWidthColumns = [];
                    this.columns.forEach((item) => {
                        const width = item.copyWidth ? item.copyWidth + '' : undefined;
                        if (width && width.indexOf('%') !== -1)
                            percentColumns.push(item);
                        else if (width)
                            valueColumns.push(item);
                        else if (!width)
                            noWidthColumns.push(item);
                    });

                    let leaveWidth = 0;

                    if (percentColumns.length === this.columns.length) {
                        let sumWidth = 0;
                        this.columns.forEach((item) => {
                            sumWidth += parseFloat(item.copyWidth);
                        });
                        if (sumWidth !== 100) {
                            percentColumns.forEach((item) => {
                                item.currentWidth = item.copyWidth = parseFloat(item.copyWidth) / sumWidth * 100 + '%';
                            });
                        }
                    }

                    let percentWidthSum = 0;
                    percentColumns.forEach((item) => {
                        const width = parseFloat(item.copyWidth) * parentWidth / 100;
                        item.currentWidth = width;
                        percentWidthSum += width;
                    });
                    let valueWidthSum = 0;
                    valueColumns.forEach((item) => valueWidthSum += parseFloat(item.copyWidth));

                    leaveWidth = parentWidth - percentWidthSum - valueWidthSum;

                    if (leaveWidth > 0 && noWidthColumns.length > 0) {
                        const width = leaveWidth / noWidthColumns.length;
                        noWidthColumns.forEach((item) => item.currentWidth = width);
                    }

                    const allWidth = !this.columns.some((cell) => !cell.copyWidth); // each column set a width

                    if (allWidth) {
                        this.tableWidth = this.columns.map((cell) => {
                            if ((cell.copyWidth + '').indexOf('%') !== -1)
                                return parseFloat(cell.copyWidth) * parentWidth / 100;
                            else
                                return parseFloat(cell.currentWidth);
                        }).reduce((a, b) => a + b, 0);
                    } else if (getStyle(this.$el, 'width') === 'auto') {
                        let parentNode = this.$el.parentNode;
                        while (getStyle(parentNode, 'width') === 'auto')
                            parentNode = parentNode.parentNode;
                        this.tableWidth = parseFloat(getStyle(parentNode, 'width')) + 'px';
                    } else
                        this.tableWidth = parseFloat(getStyle(this.$el, 'width')) + 'px';
                    // 由于百分数可能带来小数点问题，引起浮点数精度问题 典型的0.2+0.1不等于0.3问题，需要特殊处理这里的比较

                    if (parseFloat(this.tableWidth) - parentWidth <= 0) {
                        this.tableWidth = parentWidth;
                        this.isXScroll = false;
                    } else
                        this.isXScroll = Math.abs(parseFloat(this.tableWidth) - parentWidth) > 0.001;

                    this.scrollWidth = getScrollSize();
                    const titleHeight = parseFloat(getStyle(this.$refs.title, 'height')) || 0;
                    const headHeight = parseFloat(getStyle(this.$refs.head, 'height')) || 0;
                    if (this.height && !this.loading && this.data.length) {
                        this.bodyWidth = parseFloat(this.tableWidth) - this.scrollWidth;
                        this.bodyHeight = this.height - titleHeight - headHeight;
                        const tableHeight = this.$refs.body.offsetHeight;
                        this.isYScroll = tableHeight > this.bodyHeight;
                    } else {
                        this.bodyWidth = this.tableWidth;
                        // this.bodyHeight = parseFloat(getStyle(this.$refs.body, 'height')) || 0;
                    }
                    if (this.loading && tableWidth > parentWidth) {
                        this.fixedTableHeight = parseFloat(getStyle(this.$refs.body, 'height')) || 0;
                        // this.$refs.body.parentNode.scrollLeft = (tableWidth - parentWidth) / 2;
                    } else if (tableWidth > parentWidth) {
                        this.fixedTableHeight = this.bodyHeight - this.scrollWidth;
                        // this.$refs.body.parentNode.scrollLeft = (tableWidth - parentWidth) / 2;
                    } else
                        this.fixedTableHeight = this.bodyHeight;

                    this.columnsWidth = [];

                    this.columns.forEach((item, index) => {
                        this.columnsWidth.push(item.currentWidth);
                        if (this.height && index === (this.columns.length - 1)) {
                            item.currentWidth = item.currentWidth - this.scrollWidth;
                            item.fixedWidth = item.currentWidth;
                        }
                    });
                });
            }
        },
        select(option, column, index) {
            this.$refs.popper && this.$refs.popper[0] && this.$refs.popper[0].toggle(false);
            column.selectValue = option.value;
            this.defaultFilter.title = column.title;
            this.defaultFilter.value = option.value;
            this.defaultFilter.column = column;
            this.filterTdata = this.tdata = this.copyTdata.filter((item) => {
                if (column.filterMethod)
                    return column.filterMethod(option.value, item[column.label], item, column);
                else
                    return item[column.label] === option.value;
            });
            if (this.pattern === 'limit')
                this.tdata = this.tdata.slice(0, this.limit);

            this.$emit('filter-change', {
                column,
                value: option.value,
                index,
            });
        },
        /**
         * 选中或者取消事件
         * @param {row} 当前选中行数据
         */
        changeSelect(row) {
            const selection = this.getSelection();
            if (row.selected)
                this.$emit('select', selection);
            else
                this.$emit('select-cancel', selection);

            this.$emit('selection-change', selection);
        },
        rowClick(row, index) {
            this.$emit('row-click', {
                data: row,
                index,
            });
        },
        onResize() {
            this.handleResize();
        },
        translateTime(value, format) {
            if (!value)
                return this.defaultText;
            const self = this;
            const maps = {
                YYYY(date) {
                    return date.getFullYear();
                },
                MM(date) {
                    return self.fixDate(date.getMonth() + 1);
                },
                DD(date) {
                    return self.fixDate(date.getDate());
                },
                HH(date) {
                    return self.fixDate(date.getHours());
                },
                mm(date) {
                    return self.fixDate(date.getMinutes());
                },
                ss(date) {
                    return self.fixDate(date.getSeconds());
                },
            };
            const date = new Date(value);
            const pattern = new RegExp(Object.keys(maps).join('|'), 'g');
            return format.replace(pattern, (capture) => maps[capture] ? maps[capture](date) : '');
        },
        fixDate(value) {
            value = '' + value;
            return value.length <= 1 ? '0' + value : value;
        },
        onMouseWheel(e) {
            const direction = e.wheelDelta / 120 > 0 ? -1 : 1;
            const parentWidth = this.$refs.root.offsetWidth;
            const tableWidth = this.$refs.body.offsetWidth;
            const diffWidth = tableWidth - parentWidth;
            if (tableWidth > parentWidth && this.over) {
                e.preventDefault();
                if (this.$refs.body.parentNode.scrollLeft >= diffWidth && direction === 1)
                    this.$refs.body.parentNode.scrollLeft = diffWidth;
                else if (this.$refs.body.parentNode.scrollLeft < 0 && direction === -1)
                    this.$refs.body.parentNode.scrollLeft = 0;
                else if (direction === -1)
                    this.$refs.body.parentNode.scrollLeft += -50;
                else
                    this.$refs.body.parentNode.scrollLeft += 50;
            }
        },
        mouseover() {
            this.over = true;
        },
        mouseleave() {
            this.over = false;
        },
        toggleExpand(index) {
            this.tdata.forEach((item, kindex) => {
                if (kindex !== index) {
                    item.expanded = false;
                    item.iconName = 'right';
                }
            });
            const copyRowData = this.tdata[index];
            copyRowData.expanded = !copyRowData.expanded;
            if (!copyRowData.expanded)
                copyRowData.iconName = 'right';
            else
                copyRowData.iconName = 'down';
            this.tdata.splice(index, 1, copyRowData);
            // 由于点击会导致页面出现滚动条 表格fixed布局不会有变化导致表格显示有问题 需要重新计算下布局
            this.handleResize();
            this.$emit('toggle-expand', {
                index,
                direction: copyRowData.iconName,
                row: copyRowData.iconName,
            });
        },
        bodyScroll(e) {
            this.$refs.head.scrollLeft = e.target.scrollLeft;
            if (this.fixedLeftColumns.length > 0)
                this.$refs.lefttable.scrollTop = e.target.scrollTop;
            if (this.fixedRightColumns.length > 0)
                this.$refs.righttable.scrollTop = e.target.scrollTop;
            this.$refs.popper && this.$refs.popper[0] && this.$refs.popper[0].toggle(false);
        },
        fixmouseover(value) {
            if (value === -1)
                this.fixedHover = true;
            else {
                const obj = this.tdata[value];
                obj.hover = true;
                this.tdata.splice(value, 1, obj);
            }
        },
        fixmouseleave(value) {
            if (value === -1)
                this.fixedHover = false;
            else {
                const obj = this.tdata[value];
                obj.hover = false;
                this.tdata.splice(value, 1, obj);
            }
        },
        showAll() {
            const filterValue = this.defaultFilter.value;
            if (this.defaultFilter.value) {
                this.tdata = this.copyTdata.filter((item) => {
                    const filterColumn = this.defaultFilter.column;
                    if (filterColumn.filterMethod)
                        return filterColumn.filterMethod(filterValue, item[filterColumn.label], item, filterColumn);
                    else
                        return item[filterColumn.label] === filterValue;
                });
            } else
                this.tdata = this.copyTdata;
        },
        showLimit() {
            this.tdata = this.tdata.slice(0, this.limit);
        },
    },
    destroyed() {
        window.removeEventListener('resize', this.onResize, false);
    },
};
