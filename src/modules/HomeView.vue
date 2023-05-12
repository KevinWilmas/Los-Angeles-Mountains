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
    <PagesFooter class="home--pages--footer absolute bg-primary-a" />
  </div>
</template>

<style scoped>
:deep(.header--text) h2 {
  @apply text-white;
}

.home--image {
  image-rendering: -webkit-optimize-contrast;
}

.home--pages--footer {
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

  .home--pages--footer {
    display: flex;
    margin-top: 900px;
  }
}

@media (max-width: 900px) {
  .home--image {
    height: 850px;
  }

  .home--pages--footer {
    margin-top: 800px;
    height: 180px;
  }
}

@media (max-width: 750px) {
  .home--image {
    height: 830px;
  }

  .home--pages--footer {
    margin-top: 750px;
    height: 230px;
  }
}

@media (max-width: 650px) {
  .home--image {
    height: 750px;
  }

  .home--pages--footer {
    margin-top: 650px;
    padding-top: 0;
    height: 330px;
  }
}
@media (max-width: 550px) {
  .home--image {
    height: 700px;
  }

  .home--pages--footer {
    padding-top: 0;
    height: 315px;
  }
}
</style>
