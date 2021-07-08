<template>
  <div class="flex items-center mx-auto p-6 max-w-sm bg-white rounded-xl shadow-md space-x-4">
    <div class="flex-shrink-0">
      <img class="w-12 h-12" src="../assets/logo.png" alt="ChitChat Logo" />
    </div>
    <div>
      <div class="text-black text-xl font-medium">ChitChat</div>
      <p class="text-gray-500">You have a new message!</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "chatMsg",
});
</script>
