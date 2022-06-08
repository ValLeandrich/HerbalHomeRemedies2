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

      <ion-title class="title">Yerba Buena</ion-title>

      <ion-img :src="yerbabuena" class="yerba_buena"></ion-img>
      <ion-text class="text1">
        Yerba Buena is used in treating headache, stomachache, cough and colds,
        rheumatism, and arthritis.
      </ion-text>

      <ion-text class="text2">
        Uses &amp; Preparation:
        <ul class="list">
          <li>
            Yerba Buena leaves are prepared through decoction, and massage sap;
            used through drinking of the boiled solution and massaging the
            affected area.
          </li>
          <li>
            Pain (headache, stomachache) – Boil chopped leaves in 2 glasses of
            water for 15 minutes. Divide decoction into 2 parts, drink one part
            every 3 hours.
          </li>
          <li>
            Rheumatism, arthritis and headache – Crush the fresh leaves and
            squeeze sap. Massage sap on painful parts with eucalyptus.
          </li>
          <li>
            Cough & Cold – Soak 10 fresh leaves in a glass of hot water, drink
            as tea. (expectorant)
          </li>
          <li>
            Swollen gums – Steep 6 g. of fresh plant in a glass of boiling water
            for 30 minutes. Use as a gargle solution.
          </li>
          <li>
            Toothache – Cut fresh plant and squeeze sap. Soak a piece of cotton
            in the sap and insert this in aching tooth cavity.
          </li>
          <li>
            Menstrual & gas pain – Soak a handful of leaves in a lass of boiling
            water. Drink infusion.
          </li>
          <li>
            Nausea & Fainting – Crush leaves and apply at nostrils of patients.
          </li>
          <li>
            Insect bites – Crush leaves and apply juice on affected area or
            pound leaves until like a paste, rub on affected area.
          </li>
          <li>
            Pruritis – Boil plant alone or with eucalyptus in water. Use
            decoction as a wash on affected area.
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
  name: "Yerba_Buena",
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
      yerbabuena: "../../assets/bg/yerba_buena.png",
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

.yerba_buena {
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