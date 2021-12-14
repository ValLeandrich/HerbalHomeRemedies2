<template>
  <div v-if="output">
    <ion-card @click="details" v-if="info">
    <ion-card-header>
      <ion-card-subtitle>{{info['post code']}}</ion-card-subtitle>
      <ion-card-title>{{info['places'][0]['place name']}}</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <ion-list>
        <ion-item>
          <ion-label>
            <strong>State:</strong>
            {{info['places'][0]['state']}} ({{info['places'][0]['state abbreviation']}})
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-label>
            <strong>Latitude:</strong>
            {{info['places'][0]['latitude']}}
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-label>
            <strong>Longitude:</strong>
            {{info['places'][0]['longitude']}}
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-card-content>
  </ion-card>
  </div>
</template>

<script>
export default {
  name: "HerbInfo",
  props: ["info"],
  data() {
    return {
       output: true,
    }
  },
  methods: {
    details() {
      this.$router.push("/details");
      this.output = false;
    },
  }
};
</script>