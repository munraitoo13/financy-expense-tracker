<template>
  <Header />
  <Balance :total="+total" />
  <IncomeExpense :income="+income" :expense="+expense" />
  <TransactionList :transactions="transactions" @transactionDeleted="handleTransactionDeleted" />
  <AddTransaction @transactionSubmit="handleTransactionSubmit" />
  <Footer />
</template>

<script setup>
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpense from "./components/IncomeExpense.vue";
import TransactionList from "./components/TransactionList.vue";
import AddTransaction from "./components/AddTransaction.vue";
import Footer from "./components/Footer.vue";

import { ref, computed, onMounted } from "vue";
import { toast } from "vue3-toastify";

// Checks localstorage for saved transactions
onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem("transactions"));

  if (savedTransactions) {
    transactions.value = savedTransactions;
  }
});

// Transaction array
const transactions = ref([]);

// Total amount
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
});
// Income amount
const income = computed(() => {
  return transactions.value
    .filter((transaction) => {
      return transaction.amount > 0;
    })
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});
// Expense amount
const expense = computed(() => {
  return transactions.value
    .filter((transaction) => {
      return transaction.amount < 0;
    })
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

// Add transaction
const handleTransactionSubmit = (transactionData) => {
  transactions.value.push({
    id: generateId(),
    text: transactionData.text,
    amount: transactionData.amount,
  });
  toast("Transaction added.", {
    theme: "colored",
    type: "success",
    transition: "slide",
  });
  saveTransactions();
};
// Remove transaction
const handleTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter((transaction) => transaction.id !== id);
  toast("Transaction deleted.", {
    theme: "colored",
    type: "success",
    transition: "slide",
  });
  saveTransactions();
};

// Id generator
const generateId = () => {
  return Math.floor(Math.random() * 1000000);
};

// Save to localstorage
const saveTransactions = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions.value));
};
</script>

<style></style>
