<script setup>
import Footer from "../components/PagesFooter.vue";

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
  <div>
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
        <div class="container">
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
    <div class="flex h-36 mt-4 items-center">
      <div
        class="climb--number--image size flex relative z-20 left-1/2 -translate-x-1/2 items-center"
      >
        <img class="relative" src="../assets/img/02..png" alt="" />
        <h2
          class="climb--text absolute text-5xl text-primary-a opacity-80 font-Oswald"
        >
          <strong>CLIMB</strong>
        </h2>
        <p class="climb--paragraph absolute pl-72 items-center">
          Lorem ipsum dolor sit amet, nec leo diam, neque donec nonummy quis.
          Senectus tincidunt consequat pharetra mauris diam. Ut at pellentesque
          dignissim ut egestas, donec vitae at ultricies quis sem sodales. Cras
          dictum etiam.
        </p>
      </div>
      <!-- <div class="climb--paragraph absolute"> -->

      <!-- </div> -->
    </div>
    <div class="w-full h-12 bg-primary-a">
      <ul
        class="mountain--boxes absolute left-1/4 font-Oswald text-white text-xl gap-8"
      >
        <li class="selected--mountain flex item-center">MOUNTAIN 1</li>
        <li class="flex item-center">MOUNTAIN 2</li>
      </ul>
    </div>
    <div class="absolute w-full flex">
      <img
        class="slide absolute w-full"
        src="../assets/img/photo-1414449381078-c7768b8f19b8.png"
        alt=""
      />
      <img
        class="slide absolute w-full"
        src="../assets/img/photo-1417021423914-070979c8eb34.png"
        alt=""
      />
    </div>
    <div
      class="schedule-box bg-opacity-70 absolute bg-white py-6 px-16 left-1/4"
    >
      <table>
        <tr>
          <td
            class="text-5xl text-primary-a opacity-80 font-Oswald flex justify-center p-1"
          >
            <strong>Schedule</strong>
          </td>
          <td class="p-1"></td>
        </tr>
        <tr>
          <td class="p-1 text-lg">25 Nov 2016</td>
          <td class="p-1 text-lg">Lorem ipsum</td>
        </tr>
        <tr>
          <td class="p-1 text-lg">28 Nov 2016</td>
          <td class="p-1 text-lg">Lorem ipsum</td>
        </tr>
        <tr>
          <td class="opacity-0">.</td>
          <td class="opacity-0">.</td>
        </tr>
        <tr>
          <td class="p-1 text-lg">18 Dec 2016</td>
          <td class="p-1 text-lg">Lorem ipsum</td>
        </tr>
        <tr>
          <td class="opacity-0">.</td>
          <td class="opacity-0">.</td>
        </tr>
        <tr>
          <td class="p-1 text-lg">7 Jan 2016</td>
          <td class="p-1 text-lg">Lorem ipsum</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
.imgsize {
  height: 745px;
  width: 2000px;
}

.carousel {
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  left: 50%;
  transform: translate(-50%, 0);
  height: 168px;
}
.container {
  display: flex;
  width: 253px;
  overflow: hidden;
  scroll-behavior: smooth;
}

.container .item {
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

.climb--text {
  left: 9rem;
  bottom: 18%;
}

.carousel--container {
  height: 225px;
}

.climb--number--image {
  width: 55%;
}

/* .climb--paragraph {
  width: 48%;
  left: 710px;
} */

.mountain--boxes {
  left: 21%;
  display: flex;
  align-items: center;
}

.schedule-box {
  left: 22%;
  margin-top: 135px;
}

.selected--mountain {
  background-color: gray;
  color: #414f6b;
  height: 48px;
  padding: 22px;
  text-decoration: underline;
  display: flex;
  align-items: center;
  font-weight: bold;
}

.slide {
  height: 600px;
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
</style>
