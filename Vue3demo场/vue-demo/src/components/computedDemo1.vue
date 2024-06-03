<template>
    <div>
      <h3>Component A</h3>
      <p>Derived Value in A: {{ computedValueA }}</p>
      <button @click="updateSharedWithIncrementedValue">Update Shared (+5)</button>
    </div>
  </template>
  
  <script setup>
  import { defineProps, computed, defineEmits } from 'vue';
  
  const props = defineProps({
    currentValue: {
      type: Number,
      required: true
    }
  });
  
  const emits = defineEmits(['update-shared']);
  
  const computedValueA = computed(() => {
    return props.currentValue * 2;
  });
  
  const updateSharedWithIncrementedValue = () => {
    const newValue = props.currentValue + 5;
    emits('update-shared', newValue);
  };
  </script>