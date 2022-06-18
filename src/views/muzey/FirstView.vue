<template>
  <div>
    <ForTitle
      title="I bo’lim. Qadimgi odam va uning mehnat qurollari (er.av. asrlar)"
    />
    <ForText
      text="Qadimgi odamlarning qazilma qoldiqlari dastlab 1948, 1964 yillarda Ispaniyaning Gibraltar bo‘g‘ozi rayonidan, so‘ngra 1970 yilda Germaniyaning Neandertal vodiysidan topilgan. Joyning nomidan kelib chiqib, bu odamni neandertal deb atash rayem bo‘lgan. Ular toshlardan mehnat qurollari yasaganlar. Neandertal qiyofadagi odamlarning qazilma qoldiqlari Afrikadan, O’rta dengizining sharqiy qirg‘oqlaridan, O’rta Osiyo, Yaqin va O‘rta Sharq mamlakatlari territoriyasidan, Qora dengiz bo‘ylaridan, Sharqiy Yevropadan va Osiyo yerlaridan ko‘plab topilgan"
    />
    <div class="for-img">
      <v-row>
        <v-col md="4">
          <img src="../../assets/img/bolim1/rasm1.jpg" alt="" />
          <ForLabel label="Neondertal odam" />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim1/rasm2.jpg" alt="" />
          <ForLabel label="Neondertal odam" />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim1/rasm3.jpg" alt="" />
          <ForLabel label="Teshiktoshdan topilgan bolaning bosh qismi" />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim1/rasm4.jpg" alt="" />
          <ForLabel
            label="Teshiktoshdan topilgan 
odam boshchanog'i
"
          />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim1/rasm5.jpg" alt="" />
          <ForLabel label="Mehnat qurollari" />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim1/rasm6.jpg" alt="" />
          <ForLabel label="Mehnat qurollari" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import ForTitle from "@/components/ForTitle.vue";
import ForText from "@/components/ForText.vue";
import ForLabel from "@/components/ForLabel.vue";

export default { components: { ForTitle, ForText, ForLabel } };
</script>

<style lang="scss" scoped>
.for-img {
  img {
    width: 100%;
  }
}
</style>
