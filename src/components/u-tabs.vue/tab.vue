<template>
<div :class="$style.root" v-show="selected" vusion-slot-name="default">
    <slot></slot>
</div>
</template>

<script>
import { MSinglexItem } from '../m-singlex.vue';

export default {
    name: 'u-tab',
    parentName: 'u-tabs',
    extends: MSinglexItem,
    props: {
        title: String,
        /* @TODO: Remove this option */
        hidden: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        selected() {
            return this.parentVM && (this.parentVM.router ? this.active : this.parentVM.selectedVM === this);
        },
    },
    methods: {
        designerControl() {
            this.parentVM.select(this);
        },
    },
};
</script>

<style module>
.root {
    height: 100%;
}
</style>
