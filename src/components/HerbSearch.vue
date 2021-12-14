<template>
  <ion-grid>
    <form @submit.prevent="onSubmit">
      <ion-col>
        <ion-item>
          <ion-label>Herb/Symptom:</ion-label>
          <ion-input
            :value="herb"
            @input="herb = $event.target.value"
            placeholder="Enter Herb or Symptom"
            name="herb"
          ></ion-input>
        </ion-item>
      </ion-col>
      <ion-col>
        <ion-button type="submit" color="primary" expand="block">Find</ion-button>
      </ion-col>
    </form>
  </ion-grid>
</template>

<script>
 import { alertController } from '@ionic/vue';
export default {
  name: "HerbSearch",
  data() {
    return {
      herb: ""
    };
  },
  methods: {
    onSubmit() {
      const isValidHerb = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.herb);
      if (!isValidHerb) {
        this.presentAlertConfirm();
        this.herb = "";
      } else {
        this.$emit("get-herb", this.herb);
        this.herb = "";
      }
    },
    // showAlert() {
    //   return this.$ionic.alertController
    //     .create({
    //       header: "Enter Zipcode",
    //       message: "Please enter a valid US zipcode",
    //       buttons: ["OK"]
    //     })
    //     .then(a => a.present());
    // },
     async presentAlertConfirm() {
        const alert = await alertController.create({
          cssClass: 'my-custom-class',
          header: 'Error!',
          message: 'Please enter a valid herb/symptom.',
          buttons: [
            // {
            //   text: 'Cancel',
            //   role: 'cancel',
            //   cssClass: 'secondary',
            //   handler: (blah) => {
            //     console.log('Confirm Cancel:', blah);
            //   },
            // },
            {
              text: 'Okay',
              handler: () => {
                console.log('Confirm Okay');
              },
            },
          ],
        });
        return alert.present();
      },
  }
};
</script>
