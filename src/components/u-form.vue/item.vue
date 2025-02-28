<template>
<div :class="$style.root" :label-size="currentLabelSize" :distance="rootVM && rootVM.extraSlots ? 'extra' : ''">
    <label :class="$style.label" :required="currentRequired" v-show="label || title || currentLabelSize !== 'auto'" vusion-slot-name="label">
        <slot name="label">{{ label || title }}</slot>
    </label>
    <span :class="$style.extra" v-if="!hideSlots && rootVM && rootVM.extraSlots" vusion-slot-name="extra">
        <slot name="extra"></slot>
    </span>
    <div :class="[$style.field, $env.VUE_APP_DESIGNER ? $style.full : null]">
        <!-- 添加了描述功能 -->
        <div :class="$style.description" vusion-slot-name="description">
            <slot name="description">{{ description }}</slot>
        </div>
        <div :class="[$style.wrap, $env.VUE_APP_DESIGNER ? $style.full : null]" vusion-slot-name="default">
            <slot></slot>
            <s-empty v-if="(!$slots.default) && $env.VUE_APP_DESIGNER"></s-empty>
            <span v-if="color === 'focus' && currentMessage" :class="$style.message" color="focus"><slot name="message">{{ currentMessage }}</slot></span>
            <span v-else-if="currentMessage" :class="$style.message" :color="color" placement="bottom"><slot name="message">{{ currentMessage }}</slot></span>
            <span v-else-if="bubble && !mutedMessage && touched && !valid && firstError" :class="$style.message" color="error" placement="bottom">{{ firstError }}</span>
        </div>
    </div>
</div>
</template>

<script>
import UValidator from '../u-validator.vue';
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-form-item',
    mixins: [UValidator],
    components: {
        SEmpty,
    },
    props: {
        // name: String,
        // label: String,
        title: String,
        // rules: Array,
        // ignoreRules: { type: Boolean, default: false },
        // message: String,
        required: { type: Boolean, default: false },
        labelSize: String,
        bubble: { type: Boolean, default: false },
        description: String,
        hideSlots: { type: Boolean, default: false },
    },

    data() {
        return {
            // value: undefined,
            // state: '',
            // color: '',
            // currentMessage: this.message,
            // inputing: false,
            // parentVM: undefined,
            // fieldVM: undefined,
        };
    },
    computed: {
        currentRequired() {
            return (
                this.required
                || (Array.isArray(this.currentRules)
                    && this.currentRules.some((rule) => rule.required))
            );
        },
        currentLabelSize() {
            return (
                this.labelSize
                || (this.rootVM && this.rootVM.labelSize)
                || 'auto'
            );
        },
    },

    methods: {
        // onFocus() {
        //     this.color = 'focus';
        //     this.currentMessage = this.message;
        // },
        // onBlur() {
        //     this.color = this.state = '';
        //     this.$nextTick(() => this.validate('blur');
        // },
    },
};
</script>

<style module>
@import url("../u-validator.vue/index.css");

.root {
    position: relative;
    display: block;
}

.full {
    min-width: 100px;
}

.label {
    display: inline-block;
    padding-right: var(--form-item-label-padding-right);
    color: var(--form-item-text-color);
    text-align: right;
    position: relative;
}

.label[required]::after {
    content: '*';
    color: var(--form-required-color);
    position: absolute;
    right: var(--form-required-right);
    height: 12px;
    line-height: 12px;
    top: 7px;
}

.field {
    display: inline-block;
    position: relative;
}

.root[label-size$="mini"] > .label { width: var(--form-item-label-width-mini); padding-right: var(--form-item-label-padding-right-mini); }
.root[label-size$="mini"] > .label::after { right: var(--form-required-right-mini); }
.root[label-size$="mini"] > .field { max-width: calc(100% - var(--form-item-label-width-mini)); }

.root[label-size$="small"] > .label { width: var(--form-item-label-width-small); padding-right: var(--form-item-label-padding-right-small); }
.root[label-size$="small"] > .label::after { right: var(--form-required-right-small); }
.root[label-size$="small"] > .field { max-width: calc(100% - var(--form-item-label-width-small)); }

.root[label-size$="normal"] > .label { width: var(--form-item-label-width); padding-right: var(--form-item-label-padding-right); }
.root[label-size$="normal"] > .label::after { right: var(--form-required-right); }
.root[label-size$="normal"] > .field { max-width: calc(100% - var(--form-item-label-width)); }

.root[label-size$="large"] > .label { width: var(--form-item-label-width-large); padding-right: var(--form-item-label-padding-right-large); }
.root[label-size$="large"] > .label::after { right: var(--form-required-right-large); }
.root[label-size$="large"] > .field { max-width: calc(100% - var(--form-item-label-width-large)); }

.root[field-size="full"] > .field {
    width: 100%;
}

.root[layout="block"] > .field {
    vertical-align: top;
}

.root[layout="none"] {
    display: inline-block;
}
.root[layout="none"] > .label {
    display: none;
}
.root[layout="none"] > .field {
    max-width: none;
}

.description {
    color: var(--color-light);
    margin-bottom: 10px;
}

.description:empty {
    display: none;
}

.wrap {
    position: relative;
    display: inline-block;
    max-width: 100%;
}

.root[field-size="full"] .wrap {
    display: block;
}

.extra {
    width: 24px;
    display: inline-block;
    position: relative;
    left: -12px;
}

.root[layout="block"][placement="right"] > .field > .wrap > .message {
    top: 0;
    transform: none;
}

.root[distance="extra"][label-size$="small"] > .field {
    max-width: calc(100% - 110px);
}
.root[distance="extra"][label-size$="normal"] > .field {
    max-width: calc(100% - 150px);
}
.root[distance="extra"][label-size$="large"] > .field {
    max-width: calc(100% - 190px);
}

.root div[class^="u-form-table-view"] {
    margin-top: -13px;
}
</style>
