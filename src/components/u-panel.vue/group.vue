<template>
<div :class="$style.root" allowChild>
    <div :class="$style.head" v-if="title" vusion-slot-name="title">
        {{ title }}
    </div>
    <div :class="$style.body" vusion-slot-name="default">
        <slot></slot>
        <s-empty v-if="(!$slots.default) && $env.VUE_APP_DESIGNER"></s-empty>
    </div>
</div>
</template>

<script>
import SEmpty from '../s-empty.vue';

export default { 
    name: 'u-panel-group',  
    components: {
        SEmpty,
    },
    props: { title: String } 
};
</script>

<style module>
.root {

}

.root:not(:last-child) {
    margin-bottom: var(--space-base);
}

.head {
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: bold;
    /* border-top: 1px solid $border-color-light;
    margin-left: -15px;
    margin-right: -15px;
    padding-left: 15px; */
    color: var(--color-light);
}

.body {
    padding-bottom: 5px;
}
</style>
