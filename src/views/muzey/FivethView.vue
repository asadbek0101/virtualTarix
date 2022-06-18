<template>
  <div>
    <ForTitle
      title="V bo’lim. Qadimgi Sug’diyona davlati (er.av. IX-VIII asrlar)"
    />
    <ForText
      text="Qadimgi So‘g‘diyona, Zarafshon va Qashqadaryo vohalarida joylashgan bo‘lib, janubi-sharqda Baqtriya, shimoli-g‘arbda Xorazm bilan chegaradosh bo‘lgan. So‘g‘diyonada Afrosiyob, Yerqo‘rg‘on, Uzunqir kabi yirik shahar markazlari hamda qo‘shni viloyatlar va davlatlar bilan o‘zaro iqtisodiy va madaniy aloqalar rivojlanadi. So‘g‘diyona qadimgi Baqtriya davlatining muayyan qismi bo‘lgan. Baqtriya davlati So‘g‘diyonaning rivojlanishiga o‘z ta’siri o‘tkazgan. Arxeologik manbalarga ko‘ra, Baqtriya va So‘g‘diyona viloyatlarida er. av. IX-VIII asrlarga oid paxsa yoki xom g‘ishtdan qurilgan uy-joylar, mudofaa devorlari va turli inshootlar topilgan. Sopol idishlar qo‘lda yasalgan. Er.av. IX-VIII asrlarda Janubiy So‘g‘diyonada (Qashqadaryo vohasi) charxda ishlangan idishlarning paydo  bo‘lishi, qurilishida g‘isht bilan naxsaning ishlatilishi, uy-qo‘rg‘onlar va ayrim qal’alarning bino qilinishi Baqtriyaning So‘g‘diyonaga madaniy ta’sirini va baqtriyaliklar  tomonidan ba’zi tumanlarning o‘zlashtirilishini tasdiqlaydi"
    />
    <div class="for-img">
      <v-row>
        <v-col md="4">
          <img src="../../assets/img/bolim5/rasm1.jpg" alt="" />
          <ForLabel
            label="Diodotning oltin tangasi
(er.av.250 y.)
"
          />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim5/rasm2.jpg" alt="" />
          <ForLabel
            label="Atlas parchasi 
(er.av.700 y.)
"
          />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim5/rasm3.jpg" alt="" />
          <ForLabel label="Cug’diyonalik savdogar  " />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim5/rasm4.jpg" alt="" />
          <ForLabel
            label="Zarhal berilgan kumush idish (er.av. VII asr)
"
          />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim5/rasm5.jpg" alt="" />
          <ForLabel
            label="Sher tasviri tushirilgan polixrom (er.av. VIII asr)"
          />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim5/rasm6.jpg" alt="" />
          <ForLabel
            label="Sug’dlik erkaklar 
kiyimi
"
          />
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
