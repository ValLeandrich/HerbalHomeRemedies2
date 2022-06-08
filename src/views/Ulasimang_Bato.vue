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

      <ion-title class="title">Ulasimang Bato</ion-title>

      <ion-img :src="ulasimangbato" class="ulasimang_bato"></ion-img>
      <ion-text class="text1">
        Ulasimang-bato/Pansit-pansitan is used to lower blood uric acid.
      </ion-text>

      <ion-text class="text2">
        Uses &amp; Preparation:
        <ul class="list">
          <li>
            Ulasimang-bato/Pansit-pansitan stems and leaves are prepared through decoction and used through drinking of the boiled solution or eating the recommended raw plant material.
          </li>
          <li>
            Lowers uric acid (rheumatism and gout) – One a half cup leaves are boiled in two glass of water over low fire. Do not cover pot. Divide into 3 parts and drink one part 3 times a day.
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
  name: "Ulasimang_Bato",
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
      ulasimangbato: "../../assets/bg/ulasimang_bato.png",
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

.ulasimang_bato {
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