<script setup>
import { ref, onMounted } from "vue";
const currentSlide = ref(1);
const getSlideCount = ref(null);

onMounted(() => {
  getSlideCount.value = document.querySelectorAll(".slide").length;
});

const goToSlide = (index) => {
  currentSlide.value = index + 1;
};
</script>

<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />
    <div class="pagination">
      <span
        @click="goToSlide(index)"
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
      >
      </span>
    </div>
  </div>
</template>

<style lang="scss">
.pagination {
  position: absolute;
  bottom: 24px;
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  transform: translate(0, 425%);
  span {
    cursor: pointer;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: gray;
    opacity: 80%;
  }
  .active {
    background-color: white;
    opacity: 100;
  }
}
</style>
