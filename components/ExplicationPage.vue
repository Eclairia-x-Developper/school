<template>
  <section
    class="!pl-[24px] flex items-center pb-[108px] justify-center text-[#F5F5F5]"
  >
    <article class="flex flex-col w-full space-y-[32px]">
      <p
        class="max-w-[341px] w-full text-[34px] tracking-[-1px] font-normal leading-[108%] font-paralucent"
      >
        Avec la startup Eclairia, devenez un poids lourd dans la passion de
        votre choix :
      </p>
      <div
        class="pt-[32px] max-w-[350px] flex gap-x-[7px] gap-y-[11px] flex-wrap"
      >
        <!-- image -->
        <div
          v-for="(user, index) in users"
          :key="`${index}-${user.color}`"
          class="flex items-center justify-center p-[16.4075px] h-[61.98px] rounded-[16.4075px]"
          :style="{
            background:
              user.name === 'energy'
                ? 'linear-gradient(113.08deg, #f10f47 2.17%, #ff4775 100%)'
                : user.color,
            border: user.isBorder ? `2.26139px solid ${user.borderColor}` : '0',
            minWidth: user.type === 'small' ? '61.98px' : '97.53px',
            gap: user.name === '' ? '0' : '7px',
          }"
        >
          <img
            class="w-full h-full object-scale-down"
            :src="user.imgSrc"
            lazy
          />
          <p
            class="text-[16.4075px] leading-[120%] font-normal tracking-[-0.455764px] text-[#000A2E]"
          >
            {{ user.name }}
          </p>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ExplicationPage',
  data() {
    return {
      users: [
        {
          imgSrc: '/icon1.png',
          color: '#45BCFF',
          isBorder: false,
          borderColor: '',
          name: 'Actualité',
          type: 'small',
        },
        {
          imgSrc: '/icon2.png',
          color: '#45BCFF',
          isBorder: false,
          borderColor: '#0385FD',
          name: '',
          type: 'medium',
        },
        {
          imgSrc: '/icon3.png',
          color: '#45BCFF',
          isBorder: false,
          borderColor: '',
          name: 'Art',
          type: 'medium',
        },
        {
          imgSrc: '/icon4.png',
          color: '#09C094',
          borderColor: '#09C094',
          isBorder: false,
          name: '',
          type: 'small',
        },
        {
          imgSrc: '/icon5.png',
          color: '#09C094',
          borderColor: '#00FFC2',
          isBorder: false,
          name: 'Cuisine',
        },
        {
          imgSrc: '/icon6.png',
          color: '#09C094',
          borderColor: '#00FFC2',
          isBorder: false,
          name: 'Education',
          type: 'medium',
        },
        {
          imgSrc: '/icon7.png',
          color: '#FA3566',
          borderColor: '#FA3566',
          isBorder: false,
          name: 'Histoire',
          type: 'medium',
        },
        {
          imgSrc: '/icon8.png',
          color: '#FA3566',
          borderColor: '#FA3566',
          isBorder: false,
          name: 'Nature',
          type: 'medium',
        },
        {
          imgSrc: '/icon9.png',
          color: '#FA3566',
          borderColor: '#FA3566',
          isBorder: false,
          name: '',
          type: 'small',
        },
        {
          imgSrc: '/icon10.png',
          color: '#F9CB38',
          borderColor: '#F9CB38',
          isBorder: false,
          name: 'Technology',
          type: 'small',
        },
        {
          imgSrc: '/icon11.png',
          color: '#F9CB38',
          borderColor: '#F9CB38',
          isBorder: false,
          name: 'Tradition',
          type: 'small',
        },
      ],
    }
  },
})
</script>

<style scoped>
.box-description {
  background: rgba(0, 38, 180, 0.08);
  border: 1px solid #0026b4;
  border-radius: 15.7888px;
  padding: 12px 22px 12px 18px;
  gap: 18px;
}
</style>
