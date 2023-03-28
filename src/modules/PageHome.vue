<script setup>
import Header from "@/components/PagesHeader.vue";
</script>

<template>
  <div>
    <Header />
    <img
      class="home--image w-full h-full z-10 flex absolute"
      src="../assets/img/Image.png"
      alt=""
    />
  </div>
</template>

<style scoped>
:deep(.header--text) h2 {
  @apply text-white;
}

@media (max-width: 1065px) {
  .home--image {
    min-width: full;
    min-height: full;
  }
}
</style>
