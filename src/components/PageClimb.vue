<script setup>
import { ref } from "vue";

const mountainOne = ref(true);
</script>

<template>
  <div>
    <div class="climb--container flex h-36 mt-4 items-center">
      <div
        class="climb--number--container flex relative z-20 left-1/2 -translate-x-1/2 items-center"
      >
        <img
          class="climb--number--image relative"
          src="../assets/img/02..png"
          alt=""
        />
        <h2
          class="climb--text absolute text-5xl text-primary-a opacity-80 font-Oswald"
        >
          <strong>CLIMB</strong>
        </h2>
        <p class="climb--paragraph absolute ml-6 pl-72 items-center">
          Lorem ipsum dolor sit amet, nec leo diam, neque donec nonummy quis.
          Senectus tincidunt consequat pharetra mauris diam. Ut at pellentesque
          dignissim ut egestas, donec vitae at ultricies quis sem sodales. Cras
          dictum etiam.
        </p>
      </div>
    </div>
    <div class="w-full h-12 bg-primary-a">
      <ul
        class="mountain--boxes absolute left-1/4 font-Oswald text-white text-xl gap-8"
      >
        <a
          class="mountain--box flex item-center"
          :class="{ 'selected--mountain': mountainOne }"
          @click="mountainOne = true"
        >
          MOUNTAIN 1
        </a>
        <a
          class="mountain--box mountain--two flex item-center"
          @click="mountainOne = false"
          :class="{ 'selected--mountain': !mountainOne }"
          >MOUNTAIN 2</a
        >
      </ul>
    </div>
    <div class="relative w-full flex">
      <div class="slider flex overflow-hidden">
        <div></div>
        <img
          v-if="mountainOne"
          class="slide relative w-full"
          src="../assets/img/photo-1414449381078-c7768b8f19b8.png"
          alt=""
        />
        <img
          v-else
          class="slide relative w-full"
          src="../assets/img/photo-1417021423914-070979c8eb34.png"
          alt=""
        />
      </div>

      <div
        class="schedule-box bg-opacity-70 absolute bg-white py-6 px-16 left-1/4 flex"
      >
        <table v-if="mountainOne">
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
            <td class="p-1 text-lg">7 Jan 2017</td>
            <td class="p-1 text-lg">Lorem ipsum</td>
          </tr>
        </table>
        <table v-else>
          <tr>
            <td
              class="text-5xl text-primary-a opacity-80 font-Oswald flex justify-center p-1"
            >
              <strong>Schedule</strong>
            </td>
            <td class="p-1"></td>
          </tr>
          <tr>
            <td class="p-1 text-lg">25 Nov 2017</td>
            <td class="p-1 text-lg">Ipsum lorem</td>
          </tr>
          <tr>
            <td class="p-1 text-lg">28 Nov 2017</td>
            <td class="p-1 text-lg">Ipsum lorem</td>
          </tr>
          <tr>
            <td class="opacity-0">.</td>
            <td class="opacity-0">.</td>
          </tr>
          <tr>
            <td class="p-1 text-lg">18 Dec 2017</td>
            <td class="p-1 text-lg">Ipsum lorem</td>
          </tr>
          <tr>
            <td class="opacity-0">.</td>
            <td class="opacity-0">.</td>
          </tr>
          <tr>
            <td class="p-1 text-lg">7 Jan 2018</td>
            <td class="p-1 text-lg">Ipsum lorem</td>
          </tr>
        </table>
      </div>
    </div>
    <FooterPage class="bottom-0 z-30 flex absolute"></FooterPage>
  </div>
</template>

<style scoped>
.climb--number--container {
  position: absolute;
  display: flex;
  width: 55%;
}

.climb--text {
  left: 9rem;
  bottom: 18%;
}

.mountain--boxes {
  left: 21%;
  display: flex;
  align-items: center;
}

.mountain--box {
  height: 48px;
  padding: 0 22px;
  gap: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.schedule-box {
  left: 22%;
  margin-top: 135px;
}

.selected--mountain {
  background-color: gray;
  color: #414f6b;
  height: 48px;
  gap: 0;
  text-decoration: underline;
  align-items: center;
  font-weight: bold;
}

.slide {
  height: 800px;
}

@media (max-width: 1065px) {
  .climb--container {
    left: 0;
  }

  .climb--number--container {
    left: 15%;
  }
  .climb--number--image {
    translate: -9%;
  }

  .climb--text {
    left: 65%;
  }

  .climb--paragraph {
    /* align-items: normal; */
    font-size: 0.9rem;
    width: 90%;
    padding-left: 0%;
    margin-left: 19.5rem;
    padding-right: 1px;
    left: 30%;
    /* display: flex; */
  }

  img.slide {
    height: 500px;
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

@media (max-width: 655px) {
  .climb--container {
    left: 0;
  }

  .climb--number--container {
    left: 10%;
    position: relative;
    justify-content: center;
  }

  .climb--number--image {
    translate: 0%;
    width: 120;
  }

  .climb--text {
    padding-top: 3rem;
    position: relative;
    font-size: 2rem;
    width: 20%;
    left: 10%;
  }

  .climb--paragraph {
    /* align-items: normal; */
    font-size: 0.8rem;
    /* width: 450px; */
    height: 144px;
    margin-left: 15rem;
    padding-right: 0 0 0 1;
    width: 60%;
    /* display: flex; */
  }
}
</style>
