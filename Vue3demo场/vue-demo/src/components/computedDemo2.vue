<template>
    <div>
      <h3>Component B</h3>
      <p>Derived Value in B: {{ computedValueB }}</p>
      <button @click="updateSharedWithDoubledValue">Update Shared (*2)</button>
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
  
  const computedValueB = computed(() => {
    console.log(props.currentValue,12312312312312)
    return props.currentValue + 10;
  });
  
  const updateSharedWithDoubledValue = () => {
    const newValue = props.currentValue * 2;
    emits('update-shared', newValue);
  };
  </script>