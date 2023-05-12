<script setup>
import PageHistory from "../components/PageHistory.vue";
import PagesFooter from "../components/PagesFooter.vue";
import Header from "@/components/PagesHeader.vue";
</script>

<template>
  <div>
    <Header />
    <PageHistory />
    <PagesFooter class="history--pages--footer" />
  </div>
</template>

<style scoped>
@media (max-width: 500px) {
  .history--pages--footer {
    height: 145px;
  }
}
</style>
