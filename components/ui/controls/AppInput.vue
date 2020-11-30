<template>
  <div class="controls">
    <label> <slot /> </label>
    <input
    :type="type"
    :required="required"
    :value="value"
    v-bind="$attrs"
    @input="$emit('input', $event.target.value)">
  </div>
</template>
<script>
export default {
  props: {
    required: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    }
  }
}
</script>