<template>
  <div>
    <ForTitle
      title="III bo’lim. Ahomaniylar hukmdorligi (er.аv. VI-IV asrlar)"
    />
    <ForText
      text="Axomaniylar – Axomaniylar davlatini boshqargan qadimgi fors podshohlari sulolasi (mil. av. 558-330 yy.). Sulolaning asoschisi Axoman (qad. forschada Xaxomanish) er. av. VII asrning boshida Elam chegaralariga, ya’ni, Parsua (yun. Persida) viloyatiga ko‘chib kelgan fors qabilalarining yo‘lboshchisi bo‘lgan. Axoman o‘g‘li Teisp (Chishpish) va uning bevosita avlodlari: Kir I, Kambis I, Kir II Anshan (Shim. Elamdagi viloyat) shohlari hisoblangan. Qad. Sharqning ko‘pgina mamlakatlarini bosib olgan Kir II A. saltanatini barpo etgan."
    />
    <ForText
      text=" Sulola hukmdorlari: Kir II (550-530 yy.) (Fors va Anshanda 558 yildan), Kambis II (530-522 yy.), Doro I (522-486 yy.), Kserks I (486-465 yy.), Artakserks I (465-424 yy.), Kserks II (424 y.), Sug‘diyon yoxud Sekudian (424-423 yy.), Doro II (423-404 yy.), Artakserks II (404-358 yy.), Artakserks III (358-338 yy.), Arses (338-336 yy.), Doro III (336-330 yy.). "
    />
    <ForText
      text="Axomaniylar davlati Doro I davrida shakllangan murakkab byurokratik tizim orqali boshqarilgan. Doroning ma’muriy-pul islohotlari bosib olingan mamlakatlar ustidan boshqaruv va nazoratni yanada takomillashtirdi: davlat 20 ta harbiy-ma’muriy satrapiya (okrug)larga bo‘linib, ularning tepasida maxsus amaldorlar (satraplar) turgan. Ular fors podshosiga ulkan miqtsorda soliqlar (pul va natura holda) to‘lashgan. Doro I davrida yagona tanga pul birligi – 8,4 g oltin og‘irligidagi doriq joriy qilingan. Sikl (1/20 doriq) mayda kumush tanga vazifasini o‘tagan."
    />
    <ForText
      text="Davlat barqaror iqtisodiy asosga ega bo‘lmagani tufayli beqaror harbiy-ma’muriy birlashma edi, u faqatgina qurol kuchi yordami b-ngina turli xalqlarni davlat tarkibida tutib turishga asoslangandi. Axomaniylarning harbiy qudrati zaiflashishi b-n ularning davlati parchalanib keta boshlagan. Mil. av. 330 yili Aleksandr Makdedonskiy tomonidan bosib olingan"
    />
    <div class="for-img">
      <v-row>
        <v-col md="4">
          <img src="../../assets/img/bolim3/rasm1.png" alt="" />
          <ForLabel label="Ahmoniylar hukmdorligi xaritasidagi Baqtriya" />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim3/rasm2.jpg" alt="" />
          <ForLabel
            label="Behustun yozuvi (era.av. 523-521 yillar solnomasi)"
          />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim3/rasm3.jpg" alt="" />
          <ForLabel label="Shoh Doro I huzuridagi majlis" />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim3/rasm4.jpg" alt="" />
          <ForLabel
            label="Shoh Doro I surati 
aks etgan tanga

"
          />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim3/rasm5.jpg" alt="" />
          <ForLabel
            label="Buyuk Kir II 
(era.av. 640-580 yy.)
"
          />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim3/rasm6.jpg" alt="" />
          <ForLabel
            label="Buyuk Kir II 
Minorasi
"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import ForLabel from "@/components/ForLabel.vue";
import ForTitle from "@/components/ForTitle.vue";
import ForText from "@/components/ForText.vue";
export default { components: { ForLabel, ForTitle, ForText } };
</script>

<style lang="scss" scoped>
.for-img {
  img {
    width: 100%;
  }
}
</style>
