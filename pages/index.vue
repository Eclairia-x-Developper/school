<template>
  <main>
    <div
      class="hidden md:flex text-white font-bold font-sofia text-lg bg-primaryColor h-screen w-screen items-center justify-center"
    >
      <p>Vous devez utiliser un smarthopne pour voir le contenu</p>
    </div>
    <main class="md:hidden flex flex-col leadingBackground">
      <Leading />
      <WhyPage />
      <ExplicationPage />
      <PresentationPage />
      <PricePage />
      <RecrutePage />
      <ContactPage />
      <FooterPage />
    </main>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import ContactPage from '~/components/ContactPage.vue'
import ExplicationPage from '~/components/ExplicationPage.vue'
import FooterPage from '~/components/FooterPage.vue'
import Leading from '~/components/Leading.vue'
import PresentationPage from '~/components/PresentationPage.vue'
import PricePage from '~/components/PricePage.vue'
import RecrutePage from '~/components/RecrutePage.vue'
import WhyPage from '~/components/WhyPage.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Leading,
    WhyPage,
    ExplicationPage,
    PresentationPage,
    PricePage,
    RecrutePage,
    ContactPage,
    FooterPage,
  },
  head() {
    return {
      title: 'Home | Eclairia School',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Eclairia School for broadcasting',
        },
      ],
    }
  },
})
</script>
