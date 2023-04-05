<template>
  <section class="presentation relative text-[#F5F5F5]">
    <!-- <article class="flex no-scroll relative overflow-y-auto"> -->
    <div
      v-for="(data, index) in datas"
      class="w-[287px] -order-none absolute flex-grow-0 flex-none"
      :key="data.imgSrc"
      :style="{
        width: index === 0 ? '287px' : '220px',
        height: index === 0 ? '369px' : '303px',
        zIndex: index === 0 ? 1000 : 900,
        left: index === 0 ? '22px' : '40%',
        top: index === 0 ? '64px' : '104px',
      }"
    >
      <div
        :style="{
          width: index === 0 ? '287px' : '220px',
          height: index === 0 ? '369px' : '303px',
        }"
        class="relative rounded-[60.7497px]"
      >
        <img
          :src="data.imgSrc"
          alt="image"
          :style="{
            width: index === 0 ? '287px !important' : '220px !important',
            height: index === 0 ? '369px !important' : '303px !important',
          }"
          class="rounded-[60.7497px] bg-[black]"
        />
        <svg
          v-if="index === 0"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute top-[41.36%] left-[39.02%] right-[38.68%] botton-[41.29%]"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 32.0185C0 14.356 14.3629 0 32 0C49.6371 0 64 14.356 64 32.0185C64 49.644 49.6371 64 32 64C14.3629 64 0 49.644 0 32.0185ZM43.7378 35.2576C44.0776 34.918 44.51 34.3932 44.6027 34.2697C45.0969 33.6213 45.344 32.8186 45.344 32.019C45.344 31.1206 45.066 30.287 44.5409 29.6078C44.4978 29.5648 44.4136 29.4731 44.3038 29.3536C44.0983 29.1299 43.8034 28.8089 43.5216 28.5273C40.9888 25.8104 34.3787 21.3647 30.9193 20.0063C30.3942 19.7933 29.066 19.3271 28.3556 19.2962C27.676 19.2962 27.0274 19.4506 26.4096 19.7593C25.6374 20.1915 25.0196 20.8707 24.6799 21.6734C24.4637 22.2292 24.1239 23.8963 24.1239 23.9272C23.7841 25.7487 23.5988 28.7125 23.5988 31.9851C23.5988 35.1063 23.7841 37.9436 24.0621 39.796C24.0698 39.8036 24.0963 39.9361 24.1376 40.1419C24.2631 40.7676 24.5245 42.0711 24.8034 42.6054C25.483 43.9021 26.8112 44.7048 28.232 44.7048H28.3556C29.2822 44.6739 31.2281 43.8712 31.2281 43.8403C34.5023 42.4819 40.9579 38.2523 43.5525 35.4428L43.7378 35.2576Z"
            fill="url(#paint0_linear_4379_13338)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_4379_13338"
              x1="5.22357e-07"
              y1="4.65454"
              x2="75.5669"
              y2="36.8567"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F10F47" />
              <stop offset="1" stop-color="#FF4775" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
    <!-- </article> -->
    <div class="justify-between mt-[369px] w-full flex py-[37px] items-center">
      <p
        class="tracking-[-2px] leading-[108%] text-[34px] font-paralucent font-semibold max-w-[235px]"
      >
        ‘’ 21 JOURS POUR PODCASTER ‘’
      </p>
      <img
        src="/certificat.png"
        alt="image"
        class="relative w-[92px] object-fill rounded-full h-[92px] bg-[black]"
      />
    </div>
    <p
      class="max-w-[309px] text-[#F9CB38] tracking-[-1px] leading-[134%] font-normal text-[24px]"
    >
      Maitriser les techniques du podcast et toucher une nouvelle audience !
    </p>
    <ul class="flex flex-col space-y-[8px] disc">
      <li
        v-for="step in steps"
        :key="step.text"
        class="text-[#09C094] font-normal step-box tracking-[-1.82306px] leading-[108%] text-[21.8767px]"
      >
        <span class="marque flex items-start w-full">{{ step.text }}</span>
      </li>
    </ul>
    <!-- bouton -->
    <button
      class="btn outline-none mt-[18px] focus:ring-transparent active:ring-transparent focus:outline-none active:outline-none w-full max-w-[355px] h-[53.32px]"
    >
      <span
        class="tracking-[-0.348727px] text-shaddow font-paralucent text-[#4409C0] font-semibold leading-[120%] text-[20px] max-w-[320px]"
        >En savoir plus sur ce module special</span
      >
    </button>
    <!-- description -->
    <div class="mt-[18px] flex w-full overflow-x-auto no-scroll mb-[64px]">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="`${index}-${testimonial.username}`"
        class="gap-y-[18px] flex flex-col min-w-full"
      >
        <p
          class="font-normal text-[24px] leading-[124%] font-paralucent max-w-[337px] tracking-[-1px] text-white"
        >
          {{ testimonial.text }}
        </p>
        <div class="flex items-center w-full space-x-[24px] justify-center">
          <div
            v-for="number in testimonials.length"
            :key="`item-${number}`"
            class="rounded-full transition-all duration-500"
            :class="{
              'bg-white h-[14px] w-[14px]': number === index + 1,
              'border border-white h-2 w-2': number !== index + 1,
            }"
          ></div>
        </div>
        <div class="flex gap-[8px]">
          <div
            class="w-[42.38px] h-[50.32px] rounded-[10.8486px]"
            :style="{
              background: testimonial.color,
            }"
          >
            <img
              class="w-full h-full object-scale-down"
              :src="testimonial.imgSrc"
              loading="lazy"
            />
          </div>
          <div class="flex flex-col items-start gap-1">
            <p
              class="text-white leading-[120%] font-normal font-paralucent text-[12.3478px]"
            >
              {{ testimonial.username }}
            </p>
            <p
              class="font-semibold font-paralucent leading-[120%] text-white text-[8.81206px]"
            >
              {{ testimonial.post }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PresentationPage',
  data() {
    return {
      datas: [
        {
          imgSrc: '/IMAGE.png',
        },
        {
          imgSrc: '/IMAGE1.png',
        },
      ],
      steps: [
        {
          text: 'S’approprier les codes narratifs du podcast',
        },
        {
          text: 'Maitriser les différents formats',
        },
        {
          text: 'Construire un univers sonore',
        },
        {
          text: 'Générer de l’engagement',
        },
        {
          text: 'S’entourer des bons experts',
        },
        {
          text: 'Se lancer',
        },
      ],
      testimonials: [
        {
          text: '‘’Avant j’avais un problème dans ma façon de raconter ma vision de Eclairia. Peu comprennait mon langage. Aujourdhui, avec la formation de Gael, j’ai la main mise sur mon histoire et de la perception de mon audience.‘’',
          username: 'Shila Mogba Leila',
          post: 'Directeur Général Engagé et PM 360 chez Eclairia',
          imgSrc: '/img4.png',
          color: '#45BCFF',
          borderColor: '#45BCFF',
        },
        {
          text: '‘’Avant j’avais un problème dans ma façon de raconter ma vision de Eclairia. Peu comprennait mon langage. Aujourdhui, avec la formation de Gael, j’ai la main mise sur mon histoire et de la perception de mon audience.‘’',
          username: 'Shila Mogba Leila',
          post: 'Directeur Général Engagé et PM 360 chez Eclairia',
          imgSrc: '/img4.png',
          color: '#45BCFF',
          borderColor: '#45BCFF',
        },
        {
          text: '‘’Avant j’avais un problème dans ma façon de raconter ma vision de Eclairia. Peu comprennait mon langage. Aujourdhui, avec la formation de Gael, j’ai la main mise sur mon histoire et de la perception de mon audience.‘’',
          username: 'Shila Mogba Leila',
          post: 'Directeur Général Engagé et PM 360 chez Eclairia',
          imgSrc: '/img4.png',
          color: '#45BCFF',
          borderColor: '#45BCFF',
        },
      ],
    }
  },
})
</script>

<style scoped>
.presentation {
  background: linear-gradient(
    180deg,
    rgba(101, 3, 148, 0.21) 0%,
    rgba(3, 22, 96, 0.21) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 64px 18px;
  gap: 18px;
}

.step-box {
  /* Frame 48095864 */

  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px;
  gap: 8px;

  width: 338.83px;
  height: 76px;

  border: 0.911528px solid rgba(9, 192, 148, 0.08);
  border-radius: 18px;
}

.marque::before {
  display: flex;
  height: 10px !important;
  width: 10px !important;
  content: '';
  background-color: #09c094;
  border-radius: 100%;
  margin-right: 20px;
  margin-top: 5px;
}

.btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6.65969px 14.9843px;
  background: #09c094;
  border: 1px solid rgba(9, 192, 148, 0.08);
  border-radius: 10.9379px;
  border-radius: 10.9379px;
}

.text-shaddow {
  filter: drop-shadow(0px -1.67564px 3.35129px rgba(0, 0, 0, 0.11))
    drop-shadow(0px 2.51346px 8.37822px rgba(0, 10, 46, 0.2))
    drop-shadow(0px 1.67564px 1.67564px rgba(0, 0, 0, 0.12));
}
</style>
