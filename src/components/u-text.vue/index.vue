<template>
<span :class="$style.root" v-on="$listeners" vusion-slot-name="text">
    <slot>{{ text }}</slot>
</span>
</template>

<script>
export default {
    name: 'u-text',
    props: {
        text: String,
    },
};
</script>

<style module>
.root {}

.root[size="small"] {
    font-size: var(--text-font-size-small);
}

.root[size="normal"] { /* 父级字号不是默认大小时，该值有用的 */
    font-size: var(--text-font-size);
}

.root[size="large"] {
    font-size: var(--text-font-size-large);
}

.root[size="huge"] {
    font-size: var(--text-font-size-huge);
}

.root[weight="normal"] {
    font-weight: normal;
}

.root[weight="bold"] {
    font-weight: bold;
}

.root[color="default"] {
    /* By default */
}

.root[color="primary"] {
    color: var(--text-color-primary);
}

.root[color="secondary"] {
    color: var(--text-color-secondary);
}

.root[color="success"] {
    color: var(--text-color-success);
}

.root[color="warning"] {
    color: var(--text-color-warning);
}

.root[color="error"] {
    color: var(--text-color-error);
}

.root[color="disabled"] {
    color: var(--text-color-disabled);
}

.root[overflow="ellipsis"], .root[wrap="ellipsis"] {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.root[overflow="break"], .root[wrap="break"] {
    word-wrap: break-word;
    hyphens: auto;
    white-space: normal;
}

.root[overflow="nowrap"], .root[wrap="nowrap"] {
    white-space: nowrap;
}

.root[display="block"] {
    display: block;
}
</style>
