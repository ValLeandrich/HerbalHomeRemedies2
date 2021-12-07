<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>List Of Herbs</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"></ion-title>
        </ion-toolbar>
      </ion-header>
       <ion-img :src="halfherbs" class="halfherbs"></ion-img>
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
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg,
  IonItem,  
  IonList, 
  IonLabel,
    } from '@ionic/vue';

export default {
  name: 'Folder',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonImg, 
  IonItem, 
  IonList, 
  IonLabel, 
  },
  data(){
    return{
     halfherbs: "../../assets/halfherbs.png"
    }
  }
}
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
.title{
  font-size: 25px;
}
</style>