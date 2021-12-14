<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Settings</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-img :src="halfherbs" class="halfherbs"></ion-img>

      <div id="container">
        <ion-text> Dark Mode </ion-text>
        <ion-toggle color="dark"></ion-toggle>
      </div>
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
  IonToggle,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Settings",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonImg,
    IonToggle,
  },
  data() {
    return {
      halfherbs: "../../assets/halfherbs.png",
    };
  },
});
</script>

<style scoped>
#container {
  position: absolute;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  margin-left: 10px;
  margin-top: 10px;
}

#container strong {
  font-size: 20px;
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
ion-toggle {
  --handle-spacing: 0px;
  padding: 0;
  margin: -18px 20px 0 0;
  float: right;
}
ion-text {
  display: block;
  margin-top: 40px;
}
</style>