<template>
<div :class="$style.root">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'u-grid-layout',
    props: {
        repeat: { type: Number, default: 12 },
    },
};
</script>

<style module>
.root {
    margin: 0 calc(var(--space-base) / (-2));
}

.root .column {
    padding: calc(var(--space-base) / 2);
}

.root[gap^="none"] {
    margin-top: 0;
    margin-bottom: 0;
}

.root[gap^="none"] .column {
    padding-top: 0;
    padding-bottom: 0;
}

.root[gap$="none"] {
    margin-left: 0;
    margin-right: 0;
}

.root[gap$="none"] .column {
    padding-left: 0;
    padding-right: 0;
}

.root[gap^="small"] {
    margin-top: calc(var(--space-small) / (-2));
    margin-bottom: calc(var(--space-small) / (-2));
}

.root[gap^="small"] .column {
    padding-top: calc(var(--space-small) / 2);
    padding-bottom: calc(var(--space-small) / 2);
}

.root[gap$="small"] {
    margin-left: calc(var(--space-small) / (-2));
    margin-right: calc(var(--space-small) / (-2));
}

.root[gap$="small"] .column {
    padding-left: calc(var(--space-small) / 2);
    padding-right: calc(var(--space-small) / 2);
}

.root[gap^="large"] {
    margin-top: calc(var(--space-large) / (-2));
    margin-bottom: calc(var(--space-large) / (-2));
}

.root[gap^="large"] .column {
    padding-top: calc(var(--space-large) / 2);
    padding-bottom: calc(var(--space-large) / 2);
}

.root[gap$="large"] {
    margin-left: calc(var(--space-large) / (-2));
    margin-right: calc(var(--space-large) / (-2));
}

.root[gap$="large"] .column {
    padding-left: calc(var(--space-large) / 2);
    padding-right: calc(var(--space-large) / 2);
}

</style>
