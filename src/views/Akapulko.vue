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

      <ion-title class="title">Akapulko</ion-title>

      <ion-img :src="akapulko" class="akapulko"></ion-img>
      <ion-text class="text1"> Akapulko is used as antifungal. </ion-text>

      <ion-text class="text2">
        Uses &amp; Preparation:
        <ul class="list">
          <li>
            Akapulko leaves are prepared through poultice or used through direct
            application of the recommended plant material on the affected part.
          </li>
          <li>
            Anti-fungal (tinea flava, ringworm, athlete’s foot and scabies) –
            Fresh, matured leaves are pounded. Apply soap to the affected area
            1-2 times a day.
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
  name: "Akapulko",
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
      akapulko: "../../assets/bg/akapulko.png",
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

.akapulko {
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