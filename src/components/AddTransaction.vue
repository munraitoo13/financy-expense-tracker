<template>
  <div class="add-transaction">
    <h2>add new transaction</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-entry">
        <label for="text">description</label>
        <input type="text" v-model="text" />
      </div>
      <div class="form-entry">
        <label for="amount">amount <small>(-value or +value)</small></label>
        <input type="number" step="any" v-model="amount" />
      </div>
      <button>add</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { toast } from "vue3-toastify";

const text = ref("");
const amount = ref("");

const emit = defineEmits(["transactionSubmit"]);

// Submit form
const onSubmit = () => {
  // Handle empty input
  if (!text.value || !amount.value) {
    toast("Both fields must be filled!", {
      theme: "colored",
      type: "warning",
      pauseOnFocusLoss: false,
      transition: "zoom",
      dangerouslyHTMLString: true,
    });
    return;
  }

  // Add submitted data
  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value),
  };

  // Reset input
  text.value = "";
  amount.value = "";

  emit("transactionSubmit", transactionData);
};
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.add-transaction {
  margin: 25px auto;
  width: 50%;
  text-align: center;
}
h2 {
  font-size: 16px;
}
.form-entry {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
input {
  padding: 10px;
  background-color: #e7e7e7;
  border: none;
  border-radius: 5px;
}
button {
  background-color: #e7e7e7;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
}
button:hover {
  opacity: 0.75;
  cursor: pointer;
}
label {
  font-size: 12px;
}
</style>
