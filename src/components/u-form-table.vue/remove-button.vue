<script>
import UButton from '../u-button.vue';

export default {
    name: 'u-form-table-remove-button',
    extends: UButton,
};
</script>

<style module>
.root {
    display: block;
    position: relative;
    cursor: var(--cursor-pointer);
    margin-bottom: 0;
    font-size: 40px;
    color: var(--form-table-remove-button-color);
    height: 40px;
    line-height: 40px;
    opacity: 0.6;
}

.root:hover {
    opacity: 1;
}

.root[disabled] {
    color: #ddd;
    cursor: var(--cursor-not-allowed);
    color: var(--brand-disabled);
}

.root::before {
    /* font-size: var(--form-table-button-font-size); */
    icon-font: url('./assets/icon.svg');
}
</style>
