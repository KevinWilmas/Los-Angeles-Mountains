<script setup>
import Header from "@/components/PagesHeader.vue";
import PagesFooter from "../components/PagesFooter.vue";
</script>

<template>
  <div>
    <Header />
    <img
      class="home--image w-full h-full z-10 flex absolute"
      src="../assets/img/Image.png"
      alt=""
    />
    <PagesFooter class="pages--footer absolute bg-primary-a" />
  </div>
</template>

<style scoped>
:deep(.header--text) h2 {
  @apply text-white;
}

.home--image {
  image-rendering: -webkit-optimize-contrast;
}

.pages--footer {
  display: none;
}

@media (max-width: 1065px) {
  .home--image {
    min-width: full;
    min-height: full;
  }
}

@media (max-width: 1000px) {
  .home--image {
    height: 900px;
  }

  .pages--footer {
    display: flex;
    margin-top: 900px;
  }
}

@media (max-width: 900px) {
  .home--image {
    height: 800px;
  }

  .pages--footer {
    margin-top: 800px;
    padding-bottom: 100%;
    /* height: 180px; */
  }
}

@media (max-width: 750px) {
  .home--image {
    height: 750px;
  }

  .pages--footer {
    margin-top: 750px;
    height: 230px;
  }
}

@media (max-width: 650px) {
  .home--image {
    height: 650px;
  }

  .pages--footer {
    padding-bottom: 100px;
  }
}
</style>
