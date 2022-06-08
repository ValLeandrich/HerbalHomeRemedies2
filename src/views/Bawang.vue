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
      </ion-card>

      <ion-title class="title">Bawang/Garlic</ion-title>

      <ion-img :src="bawang" class="bawang"></ion-img>
      <ion-text class="text1">
        Bawang is used in treating toothache and hypertension and lowering blood
        cholesterol.
      </ion-text>

      <ion-text class="text2">
        Uses &amp; Preparation:
        <ul class="list">
          <li>
            Bawang bulbs are used through eating the recommended raw or fried
            plant material, or direct application on the affected part.
          </li>
          <li>
            Hypertension – Maybe fried, roasted, soaked in vinegar for 30
            minutes, or blanched in boiled water for 15 minutes. Take 2 pieces 3
            times a day after meals.
          </li>
          <li>Toothache – Pound a small piece and apply to affected area.</li>
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
  name: "Bawang",
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
      bawang: "../../assets/bg/bawang.png",
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

.bawang {
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