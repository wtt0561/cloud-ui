<template>
<table :class="$style.root">
    <slot></slot>
</table>
</template>

<script>
export default { name: 'u-table' };
</script>

<style module>
.root {
    width: 100%;
    table-layout: fixed;
    background: var(--table-background);
}

.root th {
    position: relative;
    line-height: var(--table-th-line-height);
    padding: var(--table-th-padding);
}

.root td {
    position: relative;
    line-height: var(--table-td-line-height);
    color: var(--table-td-color);
    padding: var(--table-td-padding);
}

.root td[vusion-slot-name="empty"] {
    color: #999;
}

.root thead tr {
    background-color: var(--table-head-background);
    border-bottom: 1px solid var(--table-border-color);
    background-clip: padding-box;
}
.root[color="light"] thead tr {
    background-color: var(--table-head-background-light);
}

.root thead th {
    text-align: left;
    color: var(--table-head-color);
    font-weight: var(--table-head-font-weight);
}

.root tbody tr {
    border-top: 1px solid var(--table-border-color);
}

.root tbody > tr:first-child {
    border-top: none;
}

.root tbody > tr:last-child {
    border-bottom: 1px solid var(--table-border-color);
}

.root tbody > tr:hover > td::before {
    content: '';
    width: 100%;
    height: 6px;
    position: absolute;
    top: -6px;
    left: 0;
    background: url("../../assets/images/shadow-up.png") repeat-x;
    z-index: 100;
    display: var(--table-hover-border-shadow-display);
}

.root tbody > tr:hover > td::after {
    content: '';
    width: 100%;
    height: 6px;
    position: absolute;
    bottom: -6px;
    left: 0;
    background: url("../../assets/images/shadow-down.png") repeat-x;
    z-index: 100;
    display: var(--table-hover-border-shadow-display);
}

.root tbody > tr:hover{
    background-color: var(--table-view-row-hover-background);
}

.root tbody > tr:first-child:hover > td::before {
    display: none;
}

.root tbody > tr:last-child:hover > td::after {
    display: none;
}

.root[line] th, .root[line] td {
    border: 1px solid var(--table-border-color);
}

.root[line] th, .root[line] thead tr {
    border-bottom: none;
}

/* 下一个大版本放开 */
.root[striped] thead tr {
    border-top: 1px solid var(--table-border-color);
}

.root[striped] tbody tr:nth-of-type(even) {
    background: var(--table-row-background-striped);
}

.root tbody > tr[color="light"] {
    background: var(--table-row-background-light);
}

.root tbody > tr[color="normal"] {
    background: var(--table-row-background);
}

.root tbody > tr[color="dark"] {
    background: var(--table-row-background-dark);
}

.root tbody > tr[color="primary"] {
    background: var(--table-row-background-primary);
}

.root tbody > tr[color="error"] {
    background: var(--table-row-background-error);
}
</style>
