<template>
  <div>
    <h2>total balance</h2>
    <strong :class="total >= 0 ? 'positive' : 'negative'">${{ total.toFixed(2) }}</strong>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// Props
const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
div {
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  font-size: 16px;
}
strong {
  font-size: 24px;
}
.negative {
  color: #ca0000;
}
</style>
