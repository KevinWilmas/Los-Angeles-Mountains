<script setup>
import Header from "@/components/PagesHeader.vue";
</script>

<template>
  <Header />

  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Lato;
  color: #343a40;
  line-height: 1;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.route-enter-active {
  transition: all 0.3s ease-in;
}

.route-leave-active {
  transition: all 0.3s ease-out;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.icon {
  left: 21%;
}

@media (max-width: 1065px) {
  .mobile--picture--height {
    height: 600px;
  }
  .history--number--image {
    width: 90%;
  }
  .icon {
    left: 5%;
  }
  .carousel--container {
    height: 225px;
  }
  .history--text {
    font-size: 2rem;
  }
  .history--paragraph {
    width: 90%;
    left: 12%;
  }
  .climb--text {
    font-size: 2rem;
  }
  .climb--paragraph {
    /* align-items: normal; */
    font-size: 0.9rem;
    width: 380px;
    height: 144px;
    padding-left: 13rem;
    left: 10%;
    display: flex;
  }

  .slide {
    height: 350px;
  }
  .climb--number--image {
    left: 30%;
    display: relative;
    padding-left: 0px;
  }

  .schedule-box {
    padding: 0 0;
  }
}
</style>
