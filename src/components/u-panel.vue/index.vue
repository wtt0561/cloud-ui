<template>
<div :class="$style.root">
    <div :class="$style.head">
        <slot name="head">
            <div v-if="title" :class="$style.title" vusion-slot-name="title">
                <slot name="title">{{ title }}</slot>
            </div>
            <a :class="$style.close" @click="cancel()"></a>
            <div :class="$style.extra">
                <slot name="extra"></slot>
            </div>
        </slot>
    </div>
    <div :class="$style.body" vusion-slot-name="default">
        <slot>{{ content }}</slot>
        <s-empty v-if="(!$slots.default) && $env.VUE_APP_DESIGNER"></s-empty>
    </div>
    <div :class="$style.foot">
        <slot name="foot">
        </slot>
    </div>
</div>
</template>

<script>
import SEmpty from '../s-empty.vue';
export default {
    name: 'u-panel',
    components: {
        SEmpty,
    },
    props: { title: String, content: String },
};
</script>

<style module>
.root {
    border-radius: var(--panel-border-radius);
    background: var(--panel-background);
    box-shadow: 0px 2px 10px rgba(64, 69, 78, 0.05);
    border: var(--panel-border-width) solid var(--border-color-light);
    transition: box-shadow var(--transition-duration-base);
}

.root:hover {
    box-shadow: var(--panel-box-shadow);
}

.head {
    position: relative;
    padding: var(--panel-head-padding);
    padding-top: 15px;
    padding-bottom: 0;
}

.title {
    margin: 0;
    font-size: var(--panel-title-font-size);
    font-weight: var(--panel-title-font-weight);
}

.extra {
    position: absolute;
    right: var(--panel-head-padding);
    top: 15px;
}

.body {
    clear: both;
    padding: var(--panel-body-padding);
}
</style>
