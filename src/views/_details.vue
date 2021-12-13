<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Result</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card class="bg-herbs">
        <ion-searchbar
          show-cancel-button="focus"
          cancel-button-text="Custom Cancel"
        ></ion-searchbar>
      </ion-card>

      <ion-title class="title">Lagundi</ion-title>

      <ion-img :src="lagundi" class="lagundi"></ion-img>
      <ion-text class="text1">
        The most versatile and widely used nut, it should be used with any low
        carbon bolt or screw that is heat-treated.
      </ion-text>

      <ion-text class="text2">
        Uses &amp; Preparation:
        <ul class="list">
          <li>
            Lagundi leaves are prepared through decoction, used through drinking
            of the boiled solution and washing the affected site.
          </li>
          <li>
            Asthma, Cough &amp; Fever – Decoction ( Boil raw fruits or leaves in
            2 glasses of water for 15 minutes)
          </li>
          <li>
            Dysentery, Colds &amp; Pain – Decoction ( Boil a handful of leaves
            &amp; flowers in water to produce a glass, three times a day)
          </li>
          <li>
            Skin diseases (dermatitis, scabies, ulcer, eczema) -Wash &amp; clean
            the skin/wound with the decoction.
          </li>
          <li>Headache – Crush leaves may be applied on the forehead.</li>
          <li>
            Rheumatism, sprain, contusions, insect bites – Pound the leaves and
            apply on affected area.
          </li>
        </ul>
      </ion-text>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Details",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonImg,
  },
  data() {
    return {
      lagundi: "../../assets/bg/lagundi.png",
    };
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 70%;
  transform: translateY(50%);
}

#container strong {
  font-size: 36px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

.bg-herbs {
  height: 100px;
  width: 100%;
  margin: 0;
  border-radius: 0;
  box-shadow: none;

  --background: url("/assets/halfherbs.png") no-repeat cover fixed center;
  background: url("/assets/halfherbs.png") no-repeat fixed center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.lagundi {
  display: block;
  width: auto;
  height: 200px;
  margin-top: 25px;
  margin-bottom: 15px;
  margin: 0 auto;
}
.title {
    font-size: 45px;
}
.text1 {
    width: 220px;
    margin: 0 auto;
    margin-bottom: 20px;
    display: block;
}
.list {
    margin-right: 30px;
}
.text2 {
    margin-left: 10px;
}
</style>