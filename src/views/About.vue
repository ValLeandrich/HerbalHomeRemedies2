<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>About</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">About</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-img :src="halfherbs" class="halfherbs"></ion-img>

      <ion-text class="text1">
        This apllication is created by Gio Leandrich Val T. Idio, Johanna
        Kristel E. Padilla and Maria Sophia M. Copat who altogether form the group
        JOGISO. This is a requirement for the SoftEng course A.Y. 2021 - 2022.
      </ion-text>

      <ion-text class="text2">
        The application is made to help determine and educate users about the
        different herbal medicines and their preparation/s and use/s. The herbs
        that can be found in this application are not just any herbs but those
        herbs/plants which are approved by the Philippine Department of Health
        (DOH). (to see the list of herbs please go to the List of Herbs found in
        the side menu.)
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
  name: "About",
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
      halfherbs: "../../assets/halfherbs.png",
    };
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
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
.text1 {
display: block;
margin-left: 25px;
text-indent: 50px;
margin-right: 25px;
text-align: justify;
margin-top: 20px;
}

.text2 {
display: block;
margin-left: 25px;
text-indent: 50px;
margin-right: 25px;
text-align: justify;
margin-top: 20px;
}
</style>