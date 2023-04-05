<template>
  <section class="my-[108px] pl-[24px] gap-[32px] flex flex-col">
    <p
      class="font-normal text-[28px] leading-[124%] font-paralucent max-w-[341px] tracking-[-1px] text-white"
    >
      Passe à l’action maintenant et procure toi une de nos cartes de formation
      Eclair.
    </p>
    <!-- pricing -->
    <div class="flex no-scroll overflow-y-auto gap-8">
      <div
        v-for="(price, index) in prices"
        :key="`price-${index}`"
        class="box-pricing"
      >
        <div class="w-[157.95px] h-[250.92px]">
          <img
            :src="price.imgSrc"
            class="w-full h-full"
            alt="image"
            height="157.95"
            width="250.92"
          />
        </div>
        <p class="text-[#B1B1B1] text-[22px] w-auto leading-[120%] font-normal">
          {{ price.title }}
        </p>
        <p
          class="leading-[120%] font-semibold text-[22.3663px] font-paralucent"
          :style="{ color: price.color }"
        >
          {{ price.price }}
        </p>
        <div class="flex gap-[18px] flex-col w-[186.47px]">
          <p
            v-for="(description, index) in price.descriptions"
            :key="`desc-${index}`"
            class="inline-flex gap-[8px] text-white"
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="!w-6 !h-[25px]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.85 2.54215C16.481 2.54215 17.111 2.63115 17.71 2.83215C21.401 4.03215 22.731 8.08215 21.62 11.6222C20.99 13.4312 19.96 15.0822 18.611 16.4312C16.68 18.3012 14.561 19.9612 12.28 21.3912L12.03 21.5422L11.77 21.3812C9.48102 19.9612 7.35002 18.3012 5.40102 16.4212C4.06102 15.0722 3.03002 13.4312 2.39002 11.6222C1.26002 8.08215 2.59002 4.03215 6.32102 2.81115C6.61102 2.71115 6.91002 2.64115 7.21002 2.60215H7.33002C7.61102 2.56115 7.89002 2.54215 8.17002 2.54215H8.28002C8.91002 2.56115 9.52002 2.67115 10.111 2.87215H10.17C10.21 2.89115 10.24 2.91215 10.26 2.93115C10.481 3.00215 10.69 3.08215 10.89 3.19215L11.27 3.36215C11.3618 3.41112 11.4649 3.48595 11.554 3.55062C11.6104 3.5916 11.6612 3.62849 11.7 3.65215C11.7163 3.66178 11.7329 3.67146 11.7496 3.68122C11.8354 3.73127 11.9247 3.78341 12 3.84115C13.111 2.99215 14.46 2.53215 15.85 2.54215ZM18.51 9.74215C18.92 9.73115 19.27 9.40215 19.3 8.98115V8.86215C19.33 7.46115 18.481 6.19215 17.19 5.70215C16.78 5.56115 16.33 5.78215 16.18 6.20215C16.04 6.62215 16.26 7.08215 16.68 7.23115C17.321 7.47115 17.75 8.10215 17.75 8.80115V8.83215C17.731 9.06115 17.8 9.28215 17.94 9.45215C18.08 9.62215 18.29 9.72115 18.51 9.74215Z"
                fill="white"
              />
            </svg>

            <span
              class="font-normal text-[12.581px] font-sofia leading-[120%]"
              >{{ description }}</span
            >
          </p>
        </div>

        <p
          class="font-normal text-[12.581px] w-[154.47px] leading-[120%]"
          :style="{ color: price.color }"
        >
          {{ price.info }}
        </p>
      </div>
    </div>
    <button
      class="mt-[15px] btn outline-none gap-[8px] focus:ring-transparent py-[10.0539px] px-[26.8103px] flex items-center justify-center active:ring-transparent focus:outline-none active:outline-none max-w-[341px] h-[38.2px]"
    >
      <span
        class="tracking-[-0.418911px] font-paralucent text-white font-semibold leading-[120%] text-[13.4051px]"
        >Acheter dès maintenant ma carte</span
      >
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <mask
          id="mask0_4303_1613energ"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="19"
          height="19"
        >
          <rect
            x="0.643555"
            y="0.460938"
            width="18.0911"
            height="18.0911"
            fill="url(#pattern0x)"
          />
        </mask>
        <g mask="url(#mask0_4303_1613energ)">
          <rect
            x="0.643555"
            y="0.460938"
            width="19.9482"
            height="19.9482"
            fill="#F7D618"
          />
        </g>
        <defs>
          <pattern
            id="pattern0x"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlink:href="#image0_4303_1613" transform="scale(0.01)" />
          </pattern>
          <image
            id="image0_4303_1613"
            width="100"
            height="100"
            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABNBJREFUeAHtnbtrVEEUh3fFR6GYSiOiYEDr+CgklWtjbaX+BWIlGBGMUQw+UKOCNmIjpNEiKFipiI9WfEVbX1hpFCsfRRSzfoe4ZJPsTnaz2ZlzZmZg2Hvv3HvnnN835z5O7r0pFHLJCmQFsgJZgaxAViArkBWYfwWK87/LsHssl8ubsKCTOlIsFr+EtSbh3gHRQX1ArZQxJg4mLElY1xF/qEKi6nec6VJYyxLsHdG7qX+rQFRPXrIkyQJLxjpsHaStni+rHdupa6rnhDpD6xlEKJRo21Gv3dpy00CAIVeJF6yJ7rLXNBAc203d4nLQWptZIETHIsQ+aU3w2ew1CwTH9lLXz+agtXaTQIiOZQh91JrYjdhrEgiOyR34qkYctLaOOSBExwpE7rUmdKP2mgOCY8eoyxt10Np6poAQHV0ILCfzaIspIFA4TV0SLQ0cMwOE6OjGXrkRjLqYAQIFVwIxGkgmgBAdJRSPJoHoGj3qgQBDEohnXU7E1KYeCGLLeWNrTKK7fFENhOiIMoFoFgiGR5lANAmE6Ig2gWgSCEZHm0A0B4ToiDqBaA4IBkedQDQFhOhYh8FRJxBNAcHY6BOIZoAQHZJA3OMyOPY2bTeGSSQQXYNKDRCio4ShSSQQ1QMBRlIJRPVAMHAXNZkEomogREdyCUTVQDBO7jk2uIxMqS3oSZ3oSDKB6BpgC12NHtoO0Ee7n0DsAfzwHHz5zDa3eXH08Ry2nfMmcnUTpCCSJBDfUTU/9FbGvkNAuehLpJBALuPkfl+OttDPb7ZdC5SvLeyj4U2DnEOIji4s3NewlWFXXEz38u67lxIECJ7JizbiqJUy6stQ74csomMjzr2ghhoMzWr7lMOVt5vWEKKcMwRD4PU1S7CV9b0CITq2YaylBOIdouNRKwI3u63XQxZAnmCgt/BvVoxp648zvxkgr6ctb+ustwj5f+6wAkNEv+EbhnTqDQh9dUqHRsoYdsqDFt6LTyCv8E5usiyUq0THxxCGegOCg/IxsSNUSUdoLt8x7lQoA70mF4FykXOJ3IPspM7lKz09bLemzWKdx85vbe4jjt0Dc5jazvKJnS8NqZa3Q1ZIJ5vo+wTR8auJ9ed91QxkUtI3TF6bnA0zlYFM6t5PdPyZnA0zlYFM6P6Mn1thEEztNQOZ0KOP6FBxOZ6BFAp3gfFw6jgNN5c6EEkg9oeTf2bPqQO5TnSMzJQl3JKUgUhebSCc9LV7ThnIFaLjQ21Zwi1NFcgPJD8TTvb6PacKZJDo8PKcVX3pa7ekCERAyEN6KkuKQI4THXLIUllSA/IWCsETiK6RkBoQFQnEDGRCAUkg3nSJoaEtpQhRk0B0gU8FyD1O5GoSiKkDUZdATB2IPIH40iWCprbYD1kqE4iuARA7EEkgvncJoK0tZiA/EVtlAtE1CGIGojaBmCIQSSCa+g+fFUixRsiA5gRiRfxavzECkb8Cqk4g1gJRWRYjkMNEh1zumiyxAXkOBfUJRNdIiQ2IRIeKJxBdorvaYgJiJoEYExD5ZFKtIlGh6gnEWkZGt4y3m7ZTx2u8QjUUnbNWHAJGL3WsCsp9pjus2D+bnV6/5DCbMY22A2Al68onk0Y5iXv90kKjNub1sgJZgaxAViArkBXICmQFNCnwD4PKp2cwdfH0AAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
    </button>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PricePage',
  data() {
    return {
      prices: [
        {
          imgSrc: '/pricing1.png',
          title: 'Eclair x JUNIOR',
          price: '20 $/mois',
          color: 'rgba(255, 165, 26, 1);',
          descriptions: [
            'Un cours en ligne accessible durant un mois',
            'Une correction podcast par un expert Eclairia.',
            'Bonus : Accès au contenu exclusif Eclairia ',
            'Bonus : Templates et canevas d’histoires.',
          ],
          info: 'Votre profil apparait sur Eclairia avec la carte orange ',
        },
        {
          imgSrc: '/pricing2.png',
          title: 'Eclair x SENIOR',
          price: '50 $/mois',
          color: 'rgba(9, 192, 148, 1)',
          descriptions: [
            '3 cours en ligne accessible durant un mois',
            'Une correction podcast par semaine par un expert Eclairia.',
            'Bonus : Accès au contenu exclusif Eclairia ',
            'Bonus : Templates et canevas d’histoires.',
          ],
          info: 'Votre profil apparait sur Eclairia avec la carte verte ',
        },
        {
          imgSrc: '/pricing3.png',
          title: 'Eclair x PRO',
          price: '232 $/mois',
          color: '#00C4FF',
          descriptions: [
            '1 cours en ligne accessible durant 12 mois',
            '1 Appel de groupe tous les trimestres (FAQ)',
            'Bonus : Accès au contenu exclusif Eclairia ',
            'Bonus : Templates et canevas d’histoires.',
          ],
          info: 'Votre profil apparait sur Eclairia avec la carte bleu ',
        },
        {
          imgSrc: '/pricing4.png',
          title: 'Eclair x PRO',
          price: '660 $/mois',
          color: '#F7D618',
          descriptions: [
            'Création et management d’un podcast de marque',
            '1 Appel de groupe tous les trimestres (FAQ)',
            '3 cours en ligne accessible durant un mois',
            'Bonus : Accès au contenu exclusif Eclairia ',
          ],
          info: 'Votre profil apparait sur Eclairia avec la carte jaune ',
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
