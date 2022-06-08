<template>
  <ion-page>
    <ion-content :fullscreen="true" class="bg-herbal">
      <div id="container">
        <ion-buttons slot="start" class="menu">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <strong class="capitalize title">Herbal Home Remedies</strong>
        <input v-model="searchQuery" />
        <div></div>
        <ion-button
          @click="navigate(r.url)"
          v-for="r of resultQuery"
          :key="r.id"
          >{{ r.title }}</ion-button
        >
        <!-- <HerbSearch v-on:get-herb="getHerbInfo" />
        <HerbInfo v-bind:info="info" />
        <ClearInfo v-bind:info="info" v-on:clear-info="clearInfo" /> -->
        <!-- <form @submit="onSubmit">
        <ion-searchbar
          show-cancel-button="focus"
          cancel-button-text="Custom Cancel"
          :value="herbal"
          @input="zip = $event.target.value"
          placeholder="Search"
        ></ion-searchbar>
        </form> -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
// import HerbSearch from "../components/HerbSearch";
// import HerbInfo from "../components/HerbInfo";
// import ClearInfo from "../components/ClearInfo";
import { IonButtons, IonContent, IonMenuButton, IonPage } from "@ionic/vue";
import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';

 export default defineComponent({
    name: 'Home',
    components: {
      IonButtons,
      IonContent,
      IonPage,
      IonMenuButton
    },
    setup() {
      const router = useRouter();
      return { router };
    },
    data() {
    return {
      info: null,
      clearBtn: true,
      searchQuery: null,
      resources: [
        { id: 1, title: "Lagundi", url: "details" },
        { id: 2, title: "Yerba Buena", url: "yerba_buena" },
        { id: 3, title: "Sambong",  url: "sambong" },
        { id: 4, title: "Tsaang Gubat",  url: "tsaang_gubat" },
        { id: 5, title: "Niyug-niyogan", url: "niyug_niyogan" },
        { id: 6, title: "Bayabas",  url: "bayabas" },
        { id: 7, title: "Akapulko",  url: "akapulko" },
        { id: 8, title: "Ulasimang Bato",  url: "ulasimang_bato" },
        { id: 9, title: "Bawang",  url: "bawang" },
        { id: 10, title: "Ampalaya",  url: "ampalaya" },
      ]
    };
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.resources.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => item.title.toLowerCase().includes(v));
        });
      } 
      else {
        return this.searchQuery;
      }
    }
  },
  methods: {
    navigate(url) {
      this.$router.push('/'+ url)
    }
//     async getHerbInfo(herb) {
//       const res = await fetch(`https://api.zippopotam.us/us/${herb}`);
//       if (res.status == 404) {
//         this.showAlert();
//       }
//       this.info = await res.json();
//       this.clearBtn = false;
//     },
//     clearInfo() {
//       this.info = null;
//     },
//     showAlert() {
//       return this.$ionic.alertController
//         .create({
//           header: "Not Valid",
//           message: "Please enter a valid herb or symptom.",
//           buttons: ["OK"],
//         })
//         .then((a) => a.present());
//     }
    },
 })</script>

<style lang="scss" scoped>
ion-content {
  --background: url("/assets/bg/bgherbs.png") no-repeat cover fixed center;
  background: url("/assets/bg/bgherbs.png") no-repeat fixed center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 45%;
  transform: translateY(-50%);
}
.menu {
  position: absolute;
  top: -45px;
}
ion-menu-button {
  color: #ffffff;
}
ion-searchbar {
  border-radius: 25px;
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
.title {
  font-size: 70px;
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  font-family: "Sanchez", serif;
  margin: 0 0 50px 0;
  display: block;
}
</style>