<template>
  <div v-if="output">
    <ion-card @click="details" v-if="info">
      <ion-card-header>
        <ion-card-title>Lagundi</ion-card-title>
      </ion-card-header>
    </ion-card>
  </div>
</template>

<script>
import { IonCardHeader, IonCard } from "@ionic/vue";
export default {
  name: "HerbInfo",
  props: ["info"],
  components: {
    IonCardHeader,
    IonCard
  },
  data() {
    return {
      output: true,
    };
  },
  methods: {
    details() {
      this.$router.push("/details");
      this.output = false;
    },
  },
};
</script>