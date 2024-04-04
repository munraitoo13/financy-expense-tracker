<template>
  <div class="income-expense-card">
    <div class="income">
      <h3>income</h3>
      <strong>${{ income.toFixed(2) }}</strong>
    </div>

    <div class="expense">
      <h3>expense</h3>
      <strong>${{ expense.toFixed(2) }}</strong>
    </div>
  </div>
  <hr />
</template>

<script setup>
import { defineProps } from "vue";

// Props
const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.income-expense-card {
  display: flex;
  justify-content: space-between;
  background-color: #e7e7e7;
  padding: 25px;
  border-radius: 12.5px;
  margin: 25px auto;
  width: fit-content;
}
.income {
  margin-right: 25px;
}
.expense {
  text-align: right;
}
h3 {
  font-size: 16px;
}
strong {
  font-size: 24px;
}
.income strong {
  color: #1ed760;
}
.expense strong {
  color: #ca0000;
}
</style>
