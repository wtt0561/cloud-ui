<template>
<div :class="$style.root" :readonly="readonly" :readonly-mode="readonlyMode" :disabled="disabled" :border="String(border)"
    :tabindex="readonly || disabled ? '' : 0"
    @keydown.prevent.up="shift(-1)"
    @keydown.prevent.down="shift(+1)">
    <div v-show="showHead" :class="$style.head">
        <slot name="head">
            <u-checkbox v-if="multiple" :value="allChecked" @check="checkAll($event.value)"></u-checkbox>
            <span :class="$style.title" vusion-slot-name="title">{{ title }}</span>
            <div :class="$style.extra">
                <span v-if="multiple">{{ selectedVMs.length }}{{ currentDataSource && currentDataSource.originTotal !== Infinity ? ' / ' + currentDataSource.originTotal : '' }}</span>
            </div>
        </slot>
    </div>
    <u-input v-if="filterable" :class="$style.filter" :disabled="disabled" :placeholder="placeholder" size="small" suffix="search" :clearable="clearable"
        :value="filterText" @input="onInput">
    </u-input>
    <div ref="body" :class="$style.body" @scroll.stop="onScroll">
        <slot></slot>
        <div ref="virtual" v-if="(!currentLoading && !currentError || pageable === 'auto-more' || pageable === 'load-more') && currentData && currentData.length"
            :style="{ paddingTop: virtualTop + 'px', paddingBottom: virtualBottom + 'px' }">
            <component :is="ChildComponent"
                v-for="item in virtualList"
                v-if="item"
                :key="$at(item, valueField)"
                :value="$at(item, valueField)"
                :disabled="item.disabled || disabled"
                :item="item">
                <slot name="item" :item="item" :text="$at(item, field || textField)" :value="$at(item, valueField)" :disabled="item.disabled || disabled" vusion-slot-name="item">{{ $at(item, field || textField) }}<s-empty v-if="(!$slots.item) && $env.VUE_APP_DESIGNER"></s-empty></slot>
            </component>
        </div>
        <div :class="$style.status" status="loading" v-if="currentLoading">
            <slot name="loading"><u-spinner></u-spinner> {{ loadingText }}</slot>
        </div>
        <div :class="$style.status" status="error" v-else-if="currentData === null || currentError">
            <slot name="error">{{ errorText }}</slot>
        </div>
        <div :class="$style.status" v-else-if="pageable === 'load-more' && currentDataSource.hasMore()">
            <u-link @click="load(true)">{{ $t('loadMore') }}</u-link>
        </div>
        <div :class="$style.status" v-else-if="(pageable === 'auto-more' || pageable === 'load-more') && !currentDataSource.hasMore()">
            {{ $t('noMore') }}
        </div>
        <div :class="$style.status" v-else-if="currentData && !currentData.length">
            <slot name="empty">{{ emptyText }}</slot>
        </div>
    </div>
    <div v-show="showFoot && (pageable === true || pageable === 'pagination')" :class="$style.foot">
        <slot name="foot"></slot>
        <u-pagination :class="$style.pagination" v-if="pageable === true || pageable === 'pagination'"
            :total-items="currentDataSource.total" :page="currentDataSource.paging.number"
            :page-size="currentDataSource.paging.size" :page-size-options="pageSizeOptions" :show-total="showTotal" :show-sizer="showSizer" :show-jumper="showJumper"
            :side="1" :around="3"
            @change="page($event.page)" @change-page-size="page(currentDataSource.paging.number, $event.pageSize)">
        </u-pagination>
    </div>
</div>
</template>

<script>
import { MComplex } from '../m-complex.vue';
import { MGroupParent } from '../m-group.vue';
import MField from '../m-field.vue';
import FVirtualList from '../f-virtual-list.vue';
import DataSource from '../../utils/DataSource';
import debounce from 'lodash/debounce';
import i18n from './i18n';
import { findScrollParent } from '../../utils/dom';
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-list-view',
    groupName: 'u-list-view-group',
    childName: 'u-list-view-item',
    components: {
        SEmpty,
    },
    mixins: [MComplex, MGroupParent, MField, FVirtualList],
    i18n,
    props: {
        // @inherit: value: null,
        // @inherit: value: Array,
        field: String,
        textField: { type: String, default: 'text' },
        valueField: { type: String, default: 'value' },
        data: Array,
        dataSource: [DataSource, Function, Object, Array],
        // @inherit: cancelable: { type: Boolean, default: false },
        // @inherit: multiple: { type: Boolean, default: false },
        // @inherit: collapsible: { type: Boolean, default: false },
        // @inherit: accordion: { type: Boolean, default: false },
        // @inherit: expandTrigger: { type: String, default: 'click' },
        // @inherit: readonly: { type: Boolean, default: false },
        readonlyMode: String,
        // @inherit: disabled: { type: Boolean, default: false },
        showHead: { type: Boolean, default: false },
        title: { type: String, default: '列表' },
        showFoot: { type: Boolean, default: true },
        border: { type: Boolean, default: true },
        loading: { type: Boolean, default: false },
        loadingText: {
            type: String,
            default() {
                return this.$t('loading');
            },
        },
        error: { type: Boolean, default: false },
        errorText: {
            type: String,
            default() {
                return this.$t('error');
            },
        },
        emptyText: {
            type: String,
            default() {
                return this.$t('empty');
            },
        },
        initialLoad: { type: Boolean, default: true },
        filterable: { type: Boolean, default: false },
        placeholder: { type: String, default: '请输入' },
        clearable: { type: Boolean, default: true },
        matchMethod: { type: [String, Function], default: 'includes' },
        caseSensitive: { type: Boolean, default: false },
        remoteFiltering: { type: Boolean, default: false },
        pageable: { type: [Boolean, String], default: false },
        pageSize: { type: Number, default: 50 },
        pageNumber: { type: Number, default: 1 },
        pageSizeOptions: {
            type: Array,
            default() {
                return [10, 20, 50];
            },
        },
        showTotal: { type: Boolean, default: false },
        showSizer: { type: Boolean, default: false },
        showJumper: { type: Boolean, default: false },
        remotePaging: { type: Boolean, default: false },
        virtual: { type: Boolean, default: false },
        // @inherit: virtualCount: { type: Number, default: 60 },
        // @inherit: throttle: { type: Number, default: 60 },
        listKey: { type: String, default: 'currentData' },
    },
    data() {
        return {
            ChildComponent: this.$options.childName,
            // @inherit: groupVMs: [],
            // @inherit: itemVMs: [],
            // @inherit: selectedVM: undefined,
            // @inherit: selectedVMs: undefined,
            // @inherit: currentMultiple: this.multiple,
            currentDataSource: undefined,
            currentLoading: this.loading,
            currentError: this.error,
            // virtualIndex: 0,
            // virtualTop: 0,
            // virtualBottom: 0,
            filterText: '', // 过滤文本，只有 input 时会改变它
        };
    },
    computed: {
        currentData() {
            return this.currentDataSource && this.currentDataSource.viewData;
        },
        paging() {
            if (this.pageable) {
                const paging = {};
                paging.size = this.pageSize;
                paging.number = paging.number || 1;
                return paging;
            } else
                return undefined;
        },
        filtering() {
            return {
                [this.field || this.textField]: {
                    operator: this.matchMethod,
                    value: this.filterText,
                    caseInsensitive: !this.caseSensitive,
                },
            };
        },
        allChecked() {
            if (!this.currentDataSource)
                return; // 仅显示当前页的选中项
            let checkedLength = 0;
            this.itemVMs.forEach((itemVM) => {
                if (itemVM.currentSelected)
                    checkedLength++;
            });
            if (checkedLength === 0)
                return false;
            else if (checkedLength === this.currentData.length)
                return true;
            else
                return null;
        },
    },
    watch: {
        data(data) {
            this.handleData();
        },
        dataSource(dataSource, oldDataSource) {
            if (typeof dataSource === 'function' && String(dataSource) === String(oldDataSource))
                return;
            this.handleData();
        },
        loading(loading) {
            this.currentLoading = loading;
        },
        error(error) {
            this.currentError = error;
        },
        // paging(paging) {
        //     this.page()
        // },
        itemVMs: {
            override: true,
            handler(itemVMs, oldVMs) {
                if (this.data || this.dataSource)
                    return;
                MComplex.watch.itemVMs.handler.call(this, itemVMs, oldVMs);
            },
        },
    },
    created() {
        // 自动补充 pageSizeOptions
        if (this.pageSizeOptions && !this.pageSizeOptions.includes(this.pageSize)) {
            for (let i = 0; i < this.pageSizeOptions.length; i++) {
                if (this.pageSizeOptions[i] > this.pageSize) {
                    this.pageSizeOptions.splice(i, 0, this.pageSize);
                    break;
                }
            }
        }

        this.debouncedLoad = debounce(this.load, 300);
        this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
        if (this.currentDataSource && this.initialLoad) {
            this.load().then(() => {
                // 更新列表之后，原来的选择可能已不存在，这里暂存然后重新查找一遍
                MComplex.watch.itemVMs.handler.call(this, this.itemVMs);
            });
        }
        this.$on('virtual-scroll', () => {
            this.ensureSelectedInItemVMs();
        });
    },
    methods: {
        handleData() {
            // @TODO: undefined or null
            this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
            if (this.currentDataSource && this.initialLoad) {
                this.load().then(() => {
                    // 更新列表之后，原来的选择可能已不存在，这里暂存然后重新查找一遍
                    MComplex.watch.itemVMs.handler.call(this, this.itemVMs);
                });
            }
        },
        getExtraParams() {
            return { filterText: this.filterText };
        },
        getDataSourceOptions() {
            return {
                viewMode: this.pageable === 'load-more' || this.pageable === 'auto-more' ? 'more' : 'page',
                paging: this.paging,
                remotePaging: this.remotePaging,
                filtering: this.filtering,
                remoteFiltering: this.remoteFiltering,
                getExtraParams: this.getExtraParams,
            };
        },
        normalizeDataSource(dataSource) {
            const options = this.getDataSourceOptions();
            if (dataSource instanceof DataSource)
                return dataSource;
            else if (dataSource instanceof Array) {
                options.data = Array.from(dataSource);
                return new DataSource(options);
            } else if (dataSource instanceof Function) {
                options.load = function load(params) {
                    const result = dataSource(params);
                    if (result instanceof Promise)
                        return result.catch(
                            () => (this.currentLoading = false),
                        );
                    else if (result instanceof Array)
                        return Promise.resolve(result);
                    else
                        return Promise.resolve(result);
                };
                return new DataSource(options);
            } else if (dataSource instanceof Object) {
                return new DataSource(Object.assign(options, dataSource));
            } else
                return undefined;
        },
        shift(count) {
            let selectedIndex = this.itemVMs.indexOf(this.selectedVM);
            if (count > 0) {
                for (
                    let i = selectedIndex + count;
                    i < this.itemVMs.length;
                    i++
                ) {
                    const itemVM = this.itemVMs[i];
                    if (!itemVM.disabled) {
                        this.selectedVM = itemVM;
                        this.$emit(
                            'shift',
                            {
                                selectedIndex,
                                selectedVM: itemVM,
                                value: this.$at(itemVM.item, this.valueField),
                            },
                            this,
                        );
                        this.ensureFocusedInView();
                        break;
                    }
                }
            } else if (count < 0) {
                if (selectedIndex === -1)
                    selectedIndex = this.itemVMs.length;
                for (let i = selectedIndex + count; i >= 0; i--) {
                    const itemVM = this.itemVMs[i];
                    if (!itemVM.disabled) {
                        this.selectedVM = itemVM;
                        this.$emit(
                            'shift',
                            {
                                selectedIndex,
                                selectedVM: itemVM,
                                value: this.$at(itemVM.item, this.valueField),
                            },
                            this,
                        );
                        this.ensureFocusedInView();
                        break;
                    }
                }
            }
        },
        ensureFocusedInView(natural) {
            const focusedVM = this.focusedVM || this.selectedVM;
            if (!focusedVM)
                return;
            const focusedEl = focusedVM.$el;
            if (!focusedEl)
                return;
            let parentEl = focusedEl.parentElement;
            parentEl = findScrollParent(focusedEl); // focusedEl.parentElement不一定可以滚动，需要找到滚动的父元素
            if (!parentEl)
                return;
            const selectedIndex = this.itemVMs.indexOf(focusedVM);
            if (parentEl.scrollTop < focusedEl.offsetTop + focusedEl.offsetHeight - parentEl.clientHeight) {
                if (natural)
                    parentEl.scrollTop
                        = focusedEl.offsetTop - focusedEl.offsetHeight;
                else
                    parentEl.scrollTop
                        = focusedEl.offsetTop
                            + focusedEl.offsetHeight
                            - parentEl.clientHeight;
                if (selectedIndex === this.itemVMs.length - 1) {
                    (this.pageable === 'auto-more'
                        || (this.$options.isSelect && this.pageable))
                        && this.debouncedLoad(true); // 保证显示加载中，但又不是全部数据
                    this.$nextTick(
                        () =>
                            (parentEl.scrollTop
                                = parentEl.scrollHeight - parentEl.clientHeight),
                    );
                }
            }
            if (parentEl.scrollTop > focusedEl.offsetTop)
                parentEl.scrollTop = focusedEl.offsetTop;
        },
        /**
         * 保证选择项是 itemVMs 中的。由于切换分页、虚拟列表等会将内部组件节点干掉重新渲染，于是需要这个函数。
         */
        ensureSelectedInItemVMs() {
            if (this.multiple) {
                for (let i = 0; i < this.selectedVMs.length; i++) {
                    const oldVM = this.selectedVMs[i];
                    if (!this.itemVMs.includes(oldVM)) {
                        const selectedVM = this.itemVMs.find((itemVM) => this.$at(oldVM.item, this.valueField) && this.$at(oldVM.item, this.valueField) === this.$at(itemVM.item, this.valueField));
                        if (selectedVM) {
                            this.selectedVMs[i] = selectedVM;
                            selectedVM.currentSelected = true;
                        }
                    }
                }
            } else {
                if (this.selectedVM && !this.itemVMs.includes(this.selectedVM)) {
                    const selectedVM = this.itemVMs.find((itemVM) => this.$at(this.selectedVM.item, this.valueField) && this.$at(this.selectedVM.item, this.valueField) === this.$at(itemVM.item, this.valueField));
                    if (selectedVM)
                        this.selectedVM = selectedVM;
                }
            } // MComplex.watch.itemVMs.handler.call(this, this.itemVMs);
        },
        fastLoad(more, keep) {
            this.currentDataSource.filter(this.filtering);
            return this.currentDataSource.mustRemote() ? this.debouncedLoad(more, keep) : this.load(more, keep);
        },
        load(more) {
            const dataSource = this.currentDataSource;
            if (!dataSource)
                return;
            if (this.currentLoading)
                return Promise.resolve();
            if (this.$emitPrevent('before-load', undefined, this))
                return;
            this.currentLoading = true;
            return dataSource[more ? 'loadMore' : 'load']()
                .then((data) => {
                    this.currentLoading = false;
                    if (
                        this.pageable === true
                        || this.pageable === 'pagination'
                    ) {
                        if (
                            this.currentDataSource.paging
                            && this.currentDataSource.paging.number
                                > this.currentDataSource.totalPage
                        )
                            this.page(1); // 数据发生变更时，回归到第 1 页
                    }
                    this.ensureSelectedInItemVMs();
                    this.$emit('load', undefined, this);
                    return data;
                })
                .catch(() => (this.currentLoading = false));
        },
        reload() {
            this.currentDataSource.clearLocalData();
            const paging = {
                size: this.currentDataSource.paging.size,
                oldSize: this.currentDataSource.paging.size,
                number: 1,
                oldNumber: this.currentDataSource.paging.number,
            };
            // eslint-disable-next-line no-console
            console.log(JSON.stringify(paging));
            try {
                this.currentDataSource.page(paging);
                this.load();
                this.$emit('page', paging, this);
                this.$emit('update:page-number', 1, this);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.log(error);
            }
        },
        page(number, size) {
            if (size === undefined)
                size = this.currentDataSource.paging.size;
            const paging = {
                size,
                oldSize: this.currentDataSource.paging.size,
                number,
                oldNumber: this.currentDataSource.paging.number,
            };
            if (this.$emitPrevent('before-page', paging, this))
                return;
            this.currentDataSource.page(paging);
            this.load();
            this.$emit('page', paging, this);
            this.$emit('update:page-number', number, this);
        },
        onScroll(e) {
            this.throttledVirtualScroll(e);
            if (!(this.pageable === 'auto-more' || (this.pageable === true && this.$options.isSelect)))
                return;
            if (this.currentLoading)
                return;
            const el = e.target;
            if (el.scrollHeight === el.scrollTop + el.clientHeight && this.currentDataSource && this.currentDataSource.hasMore())
                this.debouncedLoad(true);
        },
        onInput(value) {
            if (this.$emitPrevent('before-filter', { filterText: value }, this))
                return;
            this.filterText = value;
            this.fastLoad(false, true);
        },
        checkAll(checked) {
            // Check if enabled
            if (this.readonly || this.disabled)
                return;
            const selectedVMs = this.selectedVMs;
            const oldValue = selectedVMs.map((itemVM) => itemVM.value);
            this.itemVMs.forEach((itemVM) => {
                if (itemVM.disabled)
                    return;
                if (checked && !selectedVMs.includes(itemVM)) {
                    itemVM.currentSelected = true;
                    selectedVMs.push(itemVM);
                    itemVM.$emit('update:selected', itemVM.currentSelected);
                } else if (!checked && selectedVMs.includes(itemVM)) {
                    itemVM.currentSelected = false;
                    selectedVMs.splice(selectedVMs.indexOf(itemVM), 1);
                    itemVM.$emit('update:selected', itemVM.currentSelected);
                }
            });
            const value = selectedVMs.map((itemVM) => itemVM.value);
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
            this.$emit('checkAll', { value, oldValue, checked }, this);
        },
    },
};
</script>

<style module src="./index.css"></style>
