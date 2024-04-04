<template>
  <div class="transaction-list">
    <h2>transaction list</h2>
    <ul id="list" class="list">
      <li v-for="transaction in transactions" :key="transaction.id" :class="transaction.amount < 0 ? 'minus' : 'plus'">
        <button type="button" @click="deleteTransaction(transaction.id)">x</button>
        {{ transaction.text }} <strong>${{ transaction.amount.toFixed(2) }}</strong>
      </li>
    </ul>
  </div>
  <hr />
</template>

<script setup>
import { defineProps } from "vue";

const emit = defineEmits(["transactionDeleted"]);

// Props
const props = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});

// Delete transaction function
const deleteTransaction = (id) => {
  emit("transactionDeleted", id);
};
</script>

<style scoped>
.transaction-list {
  margin: 25px 0;
}
button {
  background-color: transparent;
  border: none;
  padding: 10px;
  transition: all 0.25s ease-in-out;
}
button:hover {
  color: #ca0000;
  cursor: pointer;
}
ul {
  list-style: none;
}
li {
  display: flex;
  align-items: center;
}
li:hover {
  opacity: 0.5;
}
li:hover button {
  margin-right: 10px;
}
h2 {
  font-size: 16px;
  text-align: center;
}
.minus strong {
  color: #ca0000;
  margin-left: auto;
}
.plus strong {
  color: #1ed760;
  margin-left: auto;
}
</style>
