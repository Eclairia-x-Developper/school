<template>
  <section
    class="px-[24px] flex items-center justify-center my-[108px] text-[#F5F5F5]"
  >
    <article class="flex flex-col w-full space-y-[32px]">
      <p
        class="uppercase max-w-[341px] w-full text-[34px] font-semibold leading-[108%] tracking-[-2px] font-paralucent"
      >
        POURQUOI ECLAIRIA ?
      </p>
      <div
        v-for="description in descriptions"
        :key="description.text"
        class="flex items-center justify-center max-w-[349px] box-description"
      >
        <p
          v-if="description.desciption"
          class="font-sofia font-normal text-[61.4008px] leading-[100%]"
        >
          {{ description.desciption }}
        </p>
        <p
          class="text-[16px] leading-[134%] w-full font-normal"
          :class="{ 'max-w-[174px]': description.desciption }"
        >
          {{ description.text }}
        </p>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'WhyPage',
  data() {
    return {
      descriptions: [
        {
          desciption: '90%',
          text: 'c’est le pourcentage des personnes qui n’aiment pas leur voix.',
        },
        {
          desciption: '',
          text: 'Aujourd’hui, ta voix fait autant partie de ton récit que de ton propos, car c’est elle qui amène l’auditeur dans un univers. Eclairia t’apprend en peu de temps comment gagner en aisance, incarner ton histoire et impacter ton public.',
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
