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
        <ion-card class="herb">
        <ion-text class="text">Herbal Remedies</ion-text>
        </ion-card>
      </ion-card>
    </ion-content>
   <ion-list>
    <ion-item>
      <ion-label>Sambong</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Akapulko</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Niyog-niyogan</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Tsaang Gubat</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Ampalaya</ion-label>
    </ion-item>
        <ion-item>
      <ion-label>Lagundi</ion-label>
    </ion-item>
        <ion-item>
      <ion-label>Ulasimang Bato</ion-label>
    </ion-item>
        <ion-item>
      <ion-label>Bawang</ion-label>
    </ion-item>
        <ion-item>
      <ion-label>Bayabas</ion-label>
    </ion-item>
        <ion-item>
      <ion-label>Yerba Buena</ion-label>
    </ion-item>
  </ion-list>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
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
  },
  data() {
    return {
      lagundi: "../../assets/bg/fullherbs.jpg",
    };
  },
});
</script>

<style scoped>

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

.list {
  margin-right: 30px;
}

ion-list {
    display: block;
}

.text {
    background-color: grey;
    color: black;
    font-size: 20px;
    margin-left: 10px;
}

.herb {
    background: gray;
    width: auto;
    margin-left: 0px;
    margin-right: 120px;
}
</style>