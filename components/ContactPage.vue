<template>
  <div class="pb-[64px] text-white !px-[12.5px] flex flex-col gap-[32px]">
    <p
      class="font-paralucent font-semibold text-[34px] tracking-[-3px] leading-[108%]"
    >
      Contactez-nous
    </p>
    <form @submit.prevent="sendInfos" class="form-container">
      <input
        type="text"
        :disabled="loading"
        class="input-container font-paralucent bg-transparent text-[18px] leading-[120%] input-text"
        placeholder="Entrer votre nom complet"
        v-model="contact.nom"
      />
      <input
        type="email"
        :disabled="loading"
        class="input-container font-paralucent bg-transparent text-[18px] leading-[120%] input-text"
        placeholder="Entrer votre adresse mail"
        v-model="contact.email"
      />
      <textarea
        type="email"
        :disabled="loading"
        class="input-container font-paralucent bg-transparent text-[18px] leading-[120%] !h-[138px] input-text"
        placeholder="Entrer votre message"
        v-model="contact.message"
      />
      <button
        type="submit"
        :disabled="loading"
        class="btn focus:outline-none active:outline-none font-paralucent font-semibold text-[16px] leading-[120%] text-white tracking-[-0.5px]"
      >
        Envoyer mon message
      </button>
    </form>
    <div class="contact-container">
      <div class="sub-container text-white">
        <div class="sub-item">
          <p class="font-semibold font-paralucent text-[18px] leading-[120%]">
            Si tu veux en savoir plus sur les secrets de la fondation de
            Eclairia Audio, le livre blanc est disponible gratuitement.
          </p>
          <img src="/couverture.png" alt="couverture" />
          <form @submit.prevent="sendNews()" class="news-form">
            <input
              type="email"
              :disabled="loading"
              class="news-input font-paralucent bg-transparent text-[18px] leading-[120%] input-text news-text"
              placeholder="Entrer votre adresse mail"
              v-model="info.email"
            />
            <button
              type="submit"
              :disabled="loading"
              class="btn-news focus:outline-none active:outline-none font-paralucent font-semibold text-[12.0714px] leading-[120%] text-white tracking-[-0.5px]"
            >
              S’inscrire pour recevoir gratuitement le PDF
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ContactPage',
  data() {
    return {
      contact: {
        nom: '',
        email: '',
        message: '',
      },
      info: {
        email: '',
      },
      loading: false,
    }
  },
  methods: {
    sendInfos() {},
    sendNews() {},
  },
})
</script>

<style scoped>
.form-container {
  /* Frame 48095809 */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 28px 22px;
  gap: 32px;
  width: 100%;
  max-width: 361px;
  min-height: 386.92px;

  /* Background */

  background: #000a2e;
  box-shadow: -4px -6px 5px rgba(255, 71, 117, 0.08),
    2px 4px 18px rgba(11, 58, 242, 0.17);
  border-radius: 38px;
}

.input-container {
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9.48032px 25.2808px;
  gap: 7.9px;

  width: 317px;
  height: 40.96px;

  border: 0.862245px solid rgba(255, 255, 255, 0.28);
  border-radius: 12.6404px;
}

.news-text {
  color: rgba(0, 10, 46, 0.28) !important;
}

.input-text {
  display: flex;
  align-items: center;
  letter-spacing: -0.395013px;

  color: rgba(255, 255, 255, 0.28);
}

.btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 32px;
  gap: 10px;

  width: 221px;
  height: 43px;

  background: #f10f47;
  /* Button */

  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.11),
    0px 3px 10px rgba(0, 10, 46, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
}

.contact-container {
  /* Frame 48095880 */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 64px 18px;
  gap: 18px;
  width: 100%;
  max-width: 374px;
  min-height: 629.92px;

  background: linear-gradient(324.11deg, #00a3ff 56.42%, #2c1a69 96.38%);
}

.sub-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 48px 18px;
  gap: 64px;

  width: 338px;
  min-height: 501.92px;
}

.sub-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 29.32px;

  width: 273.88px;
  min-height: 405.92px;
}

.news-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 6.9px;
  width: 273.88px;
  min-height: 80.82px;
}

.news-input {
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9.48032px 25.2808px;
  gap: 7.9px;

  width: 273.88px;
  height: 40.96px;

  border: 0.862245px solid rgba(0, 10, 46, 0.28);
  border-radius: 12.6404px;
}

.btn-news {
  /* Connexion */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 9.48032px 25.2808px;
  gap: 7.9px;

  width: 273.88px;
  height: 32.96px;

  /* Background */

  background: #000a2e;
  box-shadow: 0px -1.58005px 3.16011px rgba(0, 0, 0, 0.11),
    0px 2.37008px 7.90026px rgba(0, 10, 46, 0.2),
    0px 1.58005px 1.58005px rgba(0, 0, 0, 0.12);
  border-radius: 12.6404px;
}
</style>
