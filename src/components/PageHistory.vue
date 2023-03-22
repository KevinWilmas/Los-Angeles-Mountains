<script setup>
const activateDot = function (slide) {
  document
    .querySelectorAll(".dot")
    .forEach((dot) => dot.classList.remove("selecteddot"));

  const slideIndex = slide.srcElement.dataset.slide;
  document
    .querySelector(`.dot[data-slide="${slideIndex}"]`)
    .classList.add("selecteddot");
};

const slides = document.querySelectorAll(".slide");

slides.forEach(
  (s, i) => (s.getElementsByClassName.transform = `translateX(${100 * i}%)`)
);
</script>

<template>
  <div class="relative">
    <div class="w-full h-20 bg-white"></div>
    <div class="absolute w-full mt-7">
      <div
        class="history--number--image absolute z-20 left-1/2 w-3/5 h-auto -translate-x-1/2"
      >
        <img class="relative" src="../assets/img/01..png" alt="" />
        <h2
          class="history--text absolute text-5xl text-primary-a opacity-80 font-Oswald"
        >
          <strong> HISTORY</strong>
        </h2>
        <p class="history--paragraph font-Lato absolute left-16 pt-1">
          Lorem ipsum dolor sit amet, nec leo diam, neque donec nonummy quis.
          Senectus tincidunt consequat pharetra mauris diam. Fugit velit culpa
          consectetuer, lacinia lobortis vestibulum sollicitudin amet mauris,
          montes nibh. Ut at pellentesque dignissim ut egestas, donec vitae at
          ultricies quis sem sodales. Cras dictum etiam.
        </p>
      </div>
    </div>
    <img
      class="mobile--picture--height w-full"
      src="../assets/img/peak.png"
      alt=""
    />
    <div
      class="carousel--container -translate-y-full absolute w-full bg-primary-a bg-opacity-50 flex items-center"
    >
      <div class="carousel">
        <div class="carousel--image--container">
          <div class="item" id="item1">
            <img
              src="../assets/img/photo-1458442310124-dde6edb43d10.png"
              alt=""
            />
          </div>
          <div class="item" id="item2">
            <img
              src="../assets/img/photo-1443980995706-8d107e98e707.png"
              alt=""
            />
          </div>
          <div class="item" id="item3">
            <img
              src="../assets/img/photo-1458442310124-dde6edb43d10.png"
              alt=""
            />
          </div>
          <div class="item" id="item4">
            <img
              src="../assets/img/photo-1443980995706-8d107e98e707.png"
              alt=""
            />
          </div>
        </div>
        <div class="dots" @click="activateDot">
          <a href="#item1"
            ><button class="dot selecteddot" data-slide="1"></button
          ></a>
          <a href="#item2"><button class="dot" data-slide="2"></button></a>
          <a href="#item3"><button class="dot" data-slide="3"></button></a>
          <a href="#item4"><button class="dot" data-slide="4"></button></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* .imgsize {
  height: 745px;
  width: 2000px;
} */

.carousel {
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  left: 50%;
  transform: translate(-50%, 0);
  height: 168px;
}
.carousel--image--container {
  display: flex;
  width: 253px;
  overflow: hidden;
  scroll-behavior: smooth;
}

.carousel--image--container .item {
  flex: 0 0 253px;
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.history--text {
  left: 7.5rem;
  bottom: 18%;
}

.carousel--container {
  height: 225px;
}

/* CAROUSEL CONTROLS */
/* .btn {
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

.btn-icon {
  height: 24px;
  width: 24px;
  stroke: gray;
} */

/* .btn:hover .btn-icon {
  stroke: black;
} */

/* .btn--left {
  left: 0;
  transform: translate(-50%, -50%);
}

.btn--right {
  right: 0;
  transform: translate(50%, -50%);
} */

.dots {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 98%);

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

.dot:hover,
.dot:active,
.dot.selectedDot {
  background-color: white;
}

.selecteddot {
  background-color: white;
}

@media (max-width: 1065px) {
  .mobile--picture--height {
    height: 600px;
  }

  .history--number--image {
    width: 90%;
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
}
</style>
