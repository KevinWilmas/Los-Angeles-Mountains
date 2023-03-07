<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const openMenu = (e) => {
  const menu = document.querySelector(".menu");
  menu.classList.add("active");
};

const closeMenu = (e) => {
  const menu = document.querySelector(".menu");
  menu.classList.remove("active");
};
const pushRouterMobile = (event, route) => {
  const el = document.querySelector(".headerOptionActive");
  if (el) {
    el.classList.remove("headerOptionActive");
  }
  event.target.className += " headerOptionActive";
  router.push(route);
  closeMenu();
};
</script>

<template>
  <div class="flex items-center absolute h-12 w-full">
    <div class="icon absolute h-4/5 w-auto flex">
      <RouterLink to="/home"
        ><img class="relative z-20" src="../assets/img/Logo.png" alt=""
      /></RouterLink>
      <RouterLink to="/home"
        ><img
          class="relative z-10 pl-2"
          src="../assets/img/LOSANGELESMOUNTAINS.png"
          alt=""
      /></RouterLink>
    </div>

    <div class="sm:hidden" @click.prevent="openMenu($event)">
      <i class="uil uil-bars text-3xl text-primary-a pr-2"></i>
    </div>
    <div class="hidden sm:block">
      <div
        class="flex absolute text-sm left-2/3 underline text-primary-a items-center"
      >
        <h2
          class="headerOptionActive cursor-pointer z-20"
          @click="pushRouterMobile($event, 'history')"
        >
          <strong><RouterLink to="/history">01. HISTORY </RouterLink></strong>
        </h2>
        <h2
          class="ml-8 mx-4 cursor-pointer z-20"
          @click="pushRouterMobile($event, 'team')"
        >
          <strong><RouterLink to="/team">02. TEAM </RouterLink> </strong>
        </h2>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->

  <div
    class="menu mobile-menu hidden fixed top-0 bottom-0 left-0 right-0 bg-black"
  >
    <div class="flex justify-center w-full pt-20">
      <span
        class="text-xl text-white absolute top-4 right-4 cursor-pointer"
        @click.prevent="closeMenu"
      >
        <i class="uil uil-times text-2xl" />
      </span>
      <ul class="flex flex-col text-white">
        <li
          class="my-4 cursor-pointer"
          @click="pushRouterMobile($event, 'home')"
        >
          <RouterLink to="/home"> Home</RouterLink>
        </li>
        <li
          class="my-4 cursor-pointer"
          @click="pushRouterMobile($event, 'history')"
        >
          <RouterLink to="/history"> History</RouterLink>
        </li>
        <li
          class="my-4 cursor-pointer"
          @click="pushRouterMobile($event, 'team')"
        >
          <RouterLink to="/team"> Team</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.active {
  display: block;
}
/* .headerOptionActive {
  @apply text-primary-a;
} */
.mobile-menu {
  z-index: 80;
}
.header-adjust {
  z-index: 70;
}
a:active,
a:hover,
a.router-link-active {
  @apply text-primary-a;
}

.icon {
  left: 21%;
}
</style>
