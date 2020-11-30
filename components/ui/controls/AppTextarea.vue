<template>
  <div class="controls">
    <label> <slot /> </label>
    <textarea
    :value="value"
    v-bind="$attrs"
    @input="$emit('input', $event.target.value)"></textarea>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    }
  }
}
</script>