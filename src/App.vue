<script setup></script>

<template>
  <div class="flex items-center absolute h-12 w-full z-10">
    <img
      class="icon absolute h-4/5 w-auto"
      src="./assets/img/Logo.png"
      alt=""
    />
    <div
      class="flex absolute text-sm left-2/3 underline text-white flex items-center"
    >
      <h2>
        <strong>01. HISTORY </strong>
      </h2>
      <h2 class="ml-8">
        <strong>02. TEAM </strong>
      </h2>
    </div>
  </div>
  <img class="w-full" src="./assets/img/Image.png" alt="" />

  <div class="flex items-center h-16 w-full z-10">
    <div class="flex items-center icon absolute h-4/5 w-auto">
      <img src="./assets/img/Logo.png" alt="" />
      <img class="pl-2" src="./assets/img/LOSANGELESMOUNTAINS.png" alt="" />
    </div>

    <div
      class="flex absolute text-sm left-2/3 underline text-gray-500 items-center"
    >
      <h2>
        <strong>01. HISTORY </strong>
      </h2>
      <h2 class="ml-8">
        <strong>02. TEAM </strong>
      </h2>
    </div>
  </div>
  <div class="absolute w-full mt-7">
    <img
      class="absolute z-10 left-1/2 w-2/3 h-auto -translate-x-1/2"
      src="./assets/img/Text.png"
      alt=""
    />
  </div>
  <img class="absolute imgsize w-full" src="./assets/img/peak.png" alt="" />
  <div class="relative sliderposition"></div>
  <div
    class="absolute h-56 w-full bg-primary-a bg-opacity-50 flex items-center"
  >
    <div class="carousel">
      <img src="./assets/img/photo-1458442310124-dde6edb43d10.png" alt="" />
      <button class="btn btn--left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="btn-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button class="btn btn--right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="btn-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <div class="dots">
        <button class="dot dot--fill">&nbsp</button>
        <button class="dot">&nbsp</button>
        <button class="dot">&nbsp</button>
        <button class="dot">&nbsp</button>
      </div>
    </div>
  </div>
  <div class="h-52 w-full bg-black z-20 flex"></div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Inter", sans-serif;
  color: #343a40;
  line-height: 1;
}
.icon {
  left: 21%;
}
.imgsize {
  height: 745px;
  width: 2000px;
}
.sliderposition {
  height: 522px;
}

.carousel {
  display: flex;
  /* align-items: center; */
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  height: 11rem;
}

/* CAROUSEL CONTROLS */
.btn {
  background-color: white;
  border: none;
  height: 40px;
  width: 40px;
  position: absolute;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 24px rgba(0, 0 0, 0, 2);
  top: 50%;
}

.btn--left {
  left: 0;
  transform: translate(-50%, -50%);
}

.btn--right {
  right: 0;
  transform: translate(50%, -50%);
}

.btn-icon {
  height: 24px;
  width: 24px;
  stroke: gray;
}

.dots {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 150%);

  display: flex;
  gap: 12px;
}

.dot {
  height: 6px;
  width: 6px;
  background-color: gray;
  border-radius: 50%;
  cursor: pointer;
}

.dot--fill {
  background-color: white;
}
</style>
