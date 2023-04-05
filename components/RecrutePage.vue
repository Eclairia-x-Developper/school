<template>
  <section class="mb-[108px] relative pl-[24px] gap-[32px] flex flex-col">
    <p
      class="font-normal text-[28px] leading-[124%] font-paralucent max-w-[341px] tracking-[-1px] text-white"
    >
      Eclairia recrute actuellement
    </p>
    <!-- pricing -->
    <svg
      width="145"
      height="153"
      viewBox="0 0 145 153"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute top-[48.09px]"
    >
      <rect
        x="4.5"
        y="4.10352"
        width="136"
        height="136"
        rx="22"
        fill="#0730C8"
      />
      <rect
        x="4.5"
        y="4.10352"
        width="136"
        height="136"
        rx="22"
        stroke="url(#paint0_linear_4290_1524)"
        stroke-width="8"
      />
      <path
        d="M71.119 120.806C71.8888 119.472 73.8133 119.472 74.5831 120.806L86.1455 140.832C86.9153 142.166 85.953 143.832 84.4134 143.832H61.2887C59.7491 143.832 58.7869 142.166 59.5567 140.832L71.119 120.806Z"
        fill="url(#paint1_linear_4290_1524)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4290_1524"
          x1="8.5"
          y1="17.4126"
          x2="159.634"
          y2="81.8169"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F10F47" />
          <stop offset="1" stop-color="#FF4775" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4290_1524"
          x1="55.5"
          y1="120.329"
          x2="96.474"
          y2="137.79"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F10F47" />
          <stop offset="1" stop-color="#FF4775" />
        </linearGradient>
      </defs>
    </svg>
    <div class="flex relative pt-[15px] no-scroll overflow-x-auto gap-8">
      <div v-for="(job, index) in jobs" :key="`job-${index}`">
        <div
          class="flex flex-col gap-[46px] !w-[156px] justify-center items-center"
        >
          <div class="!w-[80px] !h-[80px]">
            <img :src="job.imgSrc" :alt="job.title" height="80" width="80" />
          </div>
          <p
            class="tracking-[-1px] flex justify-center items-center min-w-[157px] w-full leading-[108%] font-semibold text-[18px] font-paralucent text-white"
          >
            {{ job.title }}
          </p>
        </div>
      </div>
    </div>
    <p class="text-white text-[18px] leading-[134%] font-normal max-w-[346px]">
      Vous travaillerez à distance avec nos équipes basées à Kinshasa, en
      République Démocratique du Congo, et à Douala, au Cameroun. Nous sommes
      une équipe anonyme et décentralisé qui construis une chaîne d’information
      à croissance rapide.
    </p>
    <p class="text-white text-[18px] leading-[134%] font-normal max-w-[346px]">
      Notre startup valorise le travail d’équipe, l’intégrité, la créativité et
      la dignité. Les employés et les candidats à un emploi sont abordés avec
      honnêteté et respect.
    </p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RecrutePage',
  data() {
    return {
      jobs: [
        {
          imgSrc: '/job1.png',
          title: 'Community Manager',
        },
        {
          imgSrc: '/job2.png',
          title: 'Fullstack Developper',
        },
        {
          imgSrc: '/job3.png',
          title: 'Regional Lead',
        },
        {
          imgSrc: '/job2.png',
          title: 'Fullstack Developper',
        },
      ],
    }
  },
})
</script>

<style scoped>
.box-pricing {
  /* Frame 168 */

  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 22.3663px 52px;
  gap: 12.58px;

  width: 270.32px;
  height: 623.4px;

  border: 1.39789px solid rgba(255, 165, 26, 0.08);
  border-radius: 32px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}

.btn {
  background: linear-gradient(113.08deg, #f10f47 2.17%, #ff4775 100%);
  box-shadow: 0px -1.67564px 3.35129px rgba(0, 0, 0, 0.11),
    0px 2.51346px 8.37822px rgba(0, 10, 46, 0.2),
    0px 1.67564px 1.67564px rgba(0, 0, 0, 0.12);
  border-radius: 10.9379px;
}
</style>
