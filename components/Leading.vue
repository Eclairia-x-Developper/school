<template>
  <div
    class="flex flex-col relative w-full h-[690.16px] leadingBackgroundImage"
  >
    <Navbar />
    <!-- for text presentation -->
    <div class="mt-[43px] !pl-[24px] space-y-[24px] flex flex-col">
      <h3
        class="tracking-[-3px] text-[#F7D618] font-paralucent font-semibold leading-[128%] text-[38px] max-w-[247px]"
      >
        Raconter ton histoire deviens un jeu d’enfant
      </h3>
      <h4
        class="tracking-[-1px] text-white font-normal leading-[120%] max-w-[266px]"
      >
        L’école des éclaireurs t’apprends à raconter ton histoire et à conquérir
        le coeur de ton audience avec ta propre signature vocale.
      </h4>
    </div>
    <!-- for image background -->
    <div class="pt-[24px] !pl-[24px] max-w-[221px] flex gap-[9px] flex-wrap">
      <!-- image -->
      <div
        v-for="(user, index) in users"
        :key="`${index}-${user.color}`"
        class="w-[42.38px] h-[42.38px] rounded-[10.8486px]"
        :style="{
          background:
            user.name === 'energy'
              ? 'linear-gradient(113.08deg, #f10f47 2.17%, #ff4775 100%)'
              : user.color,
          border: user.isBorder ? `2.26139px solid ${user.borderColor}` : '0',
        }"
      >
        <img class="w-full h-full object-scale-down" :src="user.imgSrc" lazy />
      </div>
    </div>
    <!-- bouton -->
    <button
      class="mt-[24.66px] !ml-[24px] btn outline-none focus:ring-transparent py-[10.0539px] px-[26.8103px] flex items-center justify-center active:ring-transparent focus:outline-none active:outline-none max-w-[262.62px] h-[36.11px]"
    >
      <span
        class="tracking-[-0.418911px] font-paralucent text-white font-semibold leading-[120%] text-[13.4051px]"
        >Écouter nos éclaieurs sur eclairia.io !</span
      >
    </button>

    <!-- last division -->
    <div
      class="w-full absolute space-y-[5.79px] pb-[14px] bottom-0 flex flex-col items-center justify-center"
    >
      <p
        class="font-paralucent text-white font-normal tracking-[-0.293569px] text-[9.39422px] leading-[120%] max-w-[51.41px]"
      >
        Défilez pour découvrir
      </p>
      <svg
        width="11"
        height="15"
        viewBox="0 0 11 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="animate-bounce"
      >
        <path
          d="M4.98796 14.3395C5.27075 14.6223 5.72925 14.6223 6.01204 14.3395L10.6204 9.73111C10.9032 9.44831 10.9032 8.98982 10.6204 8.70702C10.3376 8.42423 9.87914 8.42423 9.59634 8.70702L5.5 12.8034L1.40366 8.70702C1.12086 8.42423 0.662365 8.42423 0.379572 8.70702C0.0967784 8.98982 0.0967784 9.44831 0.379572 9.73111L4.98796 14.3395ZM4.77586 0.792969L4.77586 13.8275H6.22414L6.22414 0.792969H4.77586Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from './Navbar.vue'

export default Vue.extend({
  name: 'NavBar',
  components: { Navbar },
  data() {
    return {
      users: [
        {
          imgSrc: '/emoji.png',
          color: '#45BCFF',
          isBorder: false,
          borderColor: '',
          name: '',
        },
        {
          imgSrc: '/img1.png',
          color: '#45BCFF',
          isBorder: true,
          borderColor: '#0385FD',
          name: '',
        },
        {
          imgSrc: '/energy.png',
          color: '#45BCFF',
          isBorder: false,
          borderColor: '',
          name: 'energy',
        },
        {
          imgSrc: '/img2.png',
          color: '#F9CB38',
          borderColor: '#E9F74D',
          isBorder: true,
          name: '',
        },
        {
          imgSrc: '/img3.png',
          color: '#09C094',
          borderColor: '#00FFC2',
          isBorder: true,
          name: '',
        },
        {
          imgSrc: '/logo.png',
          color: '#09C094',
          borderColor: '#00FFC2',
          isBorder: false,
          name: '',
        },
        {
          imgSrc: '/img4.png',
          color: '#45BCFF',
          borderColor: '#45BCFF',
          isBorder: false,
          name: 'energy',
        },
        {
          imgSrc: '/img5.png',
          color: '#F9CB38',
          borderColor: '#E9F74D',
          isBorder: false,
          name: '',
        },
      ],
    }
  },
})
</script>

<style scoped>
.btn {
  background: linear-gradient(113.08deg, #f10f47 2.17%, #ff4775 100%);
  box-shadow: 0px -1.67564px 3.35129px rgba(0, 0, 0, 0.11),
    0px 2.51346px 8.37822px rgba(0, 10, 46, 0.2),
    0px 1.67564px 1.67564px rgba(0, 0, 0, 0.12);
  border-radius: 10.9379px;
}
</style>
