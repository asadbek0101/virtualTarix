<template>
  <div>
    <ForTitle
      title="IV bo’lim. Qadimgi Xorazm davlati (er.av. VIII-VII asrlar)"
    />
    <ForText
      text="Arxeologik tadqiqotlar natijalariga ko‘ra, Xorazm tuprog‘ida er. av. VIII-VII asrlarga oid paxsa yoki xom g‘isht turar joylar aniqlanmagan (turar joylar yarim yerto‘lalardan iborat). Qadimgi Xorazm davlati mil. avv. VI asrda Amudaryoning o‘rta oqimi qismidan Orolga yaqin bo‘lgan yerlarda vujudga kelgan. Baqtriya va Xorazm davlatining hududiy chegaralari O‘rta Amudaryo oqimidagi yerlar orqali o‘tgan. Xorazmning yirik sug‘orish inshootlari mil. avv. VI-V asrlarga oiddir. O‘lkada bu davrlarga oid ko‘pgina shahar va qishloqlar xa-robalari ochib o‘rganilgan. Ulardagi topilmalar, manzilgohlar, xom g‘isht va paxsa-dan qad ko‘targan bo‘lib, aholi dehqonchilik va chorvachilik bilan shug‘ullangan. Shaharlarda hunarmandchilik rivojlangan"
    />
    <div class="for-img">
      <v-row>
        <v-col md="4">
          <img src="../../assets/img/bolim4/rasm1.jpg" alt="" />
          <ForLabel
            label="Ayozqa’la qo’rgoni 
(er.av. III-II asr)
"
          />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim4/rasm2.jpg" alt="" />
          <ForLabel
            label="Xorazmlik jangchi 
(Ermitaj)
"
          />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim4/rasm3.jpg" alt="" />
          <ForLabel label="Devorga solingan surat (er.av. III asr)" />
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
