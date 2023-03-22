<script setup></script>

<template>
  <div class="flex items-center absolute h-16 w-full bg-primary-a">
    <div class="icon opacity-10 absolute w-auto flex items-center">
      <RouterLink to="/home"
        ><img class="relative z-30" src="../assets/img/Logo.png" alt=""
      /></RouterLink>
      <RouterLink class="text-white font-Oswald pl-2" to="/home"
        ><h2>LOSANGELES</h2>
        <h2>MOUNTAINS</h2></RouterLink
      >
    </div>
    <h3
      class="absolute text-white opacity-10 font font-Lato italic left-2/3 -translate-x-1/3"
    >
      COPYRIGHT 2016. ALL RIGHTS RESERVED
    </h3>
  </div>
</template>

<style scoped>
.icon {
  left: 21%;
}

@media (max-width: 1065px) {
  .icon {
    left: 5%;
  }
}
</style>
