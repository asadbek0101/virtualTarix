<template>
  <div>
    <ForTitle title="II bo’lim. Qadimgi qabilalar (er.av. VIII-II asrlar)" />
    <ForText
      text="Eramizdan avvalgi VIII-II asrlarda Sirdaryo daryosining ortida yashagan qabilalar Saklar deb atalgan. Ular jangovar ko‘chmanchi oriylar bo’lgan. Ayollar ham erkaklar bilan bir qatorda janglarda ishtirok etishgan. Ular yovni aldash uchun yolg‘ondan qochishga, xuddi erkaklardek ot ustida chopib keta turib orqalariga o‘girilib kamondan o‘q otishga mohir bo‘lishgan. Gerodotning yozishicha, Saklar askarlarining boshlarida qalin kigizdan tikilgan, cho‘qqi qalpoklari bo‘lgan. Tarixiy manbalarda sak qabilasining jasur cho‘poni Shiroq haqidagi rivoyatlar keltirilgan."
    />
    <ForText
      text="Massagetlar Kaspiy dengizining sharqiy sohili, Orol dengizi atroflari, Amudaryo va Sirdaryoning quyi oqimida er.av. VIII-IV a. larda yashagan ko‘chmanchi qabila. Ular piyoda va otda jang qilgan, otlarning ko‘kragiga sovut kiydirgan. Kamon, nayza va sagariy (oy-bolta) kabi jang qurollari ishlatgan. Massagetlarning barcha  jihoz va qurol-aslahalari mis va oltindan yasalgan. Ro‘zg‘or buyumlarini esa bo‘yoq bilan bo‘yaganlar. Massagetlar malikasi To‘maris bilan bo‘lgan jangda Ahomaniylar davlatining asoschisi Kir halok bo‘lgan. Strabonitg ma’lumotiga ko‘ra, qabila Quyoshga topingan va unga atab otlarni qurbonlik qilgan "
    />
    <div class="for-img">
      <v-row>
        <v-col md="4">
          <img src="../../assets/img/bolim2/rasm1.jpg" alt="" />
          <ForLabel
            label="Saklar shohi Skunha 
(er.av. VI asr)
"
          />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim2/rasm2.jpg" alt="" />
          <ForLabel
            label=" 
Saklarning qurol-yarog’lari
(Issiqqo’rg’on, Qozog’iston)
"
          />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim2/rasm3.jpg" alt="" />
          <ForLabel label="Massagetlar malikasi To’maris (tax. 570-520 yy.)" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import ForText from "@/components/ForText.vue";
import ForLabel from "@/components/ForLabel.vue";
import ForTitle from "@/components/ForTitle.vue";
export default { components: { ForText, ForLabel, ForTitle } };
</script>

<style lang="scss" scoped>
.for-img {
  img {
    width: 100%;
  }
}
</style>
