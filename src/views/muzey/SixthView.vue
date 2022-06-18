<template>
  <div>
    <ForTitle
      title="VI bo’lim. Kushon davlati (Eramizdan avvalgi I-IV asrlar)"
    />
    <ForText
      text="O‘zbek davlatchiligi tizimidagi kad. davlat (er. I-III asrlar). Er. I asrining 1-yarmi yoki o‘rtalarida massagetlar tasarrufidagi Kushon mulkining yuksalishi natijasida vujudga kelgan. Massagetlar er.av. 140 yili Sirdaryo ortidan Baqtriyat kelib, saklarni yengib, Yunon-Baqtriya podsholigi o‘rnida bir asr davomida 5 qabilaga bo‘linib yashagan. Ular orasida kushon (xitoycha “guyshuan”) qabilasi jabg‘usi Kujula Kadfiz (Kadfiz I) er. I asrida qolgan 4 qabilani bo‘ysundirib, o‘zini hukmdor deb e’lon qilgan. "
    />
    <ForText
      text="“Kushon” atamasi yo sulola yoki qabilaga tegishli bo‘lib, u ilk bor er.av. I  asr oxiri – er. I  asri boshida hukmronlik qilgan podshoh “Geray” – Sanab zarb qildirgan tangalarda qo‘llangan. Kushonlarning dastlabki hududiga Shimoliy Baqtriya (Tojikiston hamda O‘zbekistonning jan., Turkmanistonning jan.-sharqidagi yerlar) kirgan. Dastlab jabg‘u, keyinchalik podsho unvoni bilan davlatni idora qilgan Kadfiz I Kushon davlatiga asos solgan bo‘lib, uning davrida kushonlar hoz. Afg‘oniston bilan Pokistonning ko‘pchilik qismini bosib olgan. Kadfiz I ning vorisi Vima Kadfiz hukmronligi davrida Hindistonning aksariyat qismi Kushon podsholigiga qo‘shib olingan. Kushon podsholigining eng ravvaq topgan davri Kanishka hukmronlik qilgan vaqtga to‘g‘ri keladi. "
    />
    <ForText
      text="O‘rta Osiyoda kushon mulklarining shim. chegarasi Hisor tizmasi bo‘ylab, u yerdardagi tog‘ daralarida g‘oyatda mustahkam chegara devorlari qurilgan. Podsholik davrida urushlarning tez-tez bo‘lib turishi natijasida mamlakatda harbiy asir-qullar miqdori oshib borgan. Xitoy va Parfiya bilan kurash olib borayotgan Kushon podsholigi Yaqin Sharkda hukmron bo‘lish uchun Parfiya bilan urushayotgan Rimning ittifoqchisi edi. Biroq, savdo manfaatlari bu davlatlarni o‘zaro yaqinlashtirgan.  “Buyuk ipak yo‘li” bo‘ylab xalqaro savdoning rivojlanishi uchun qulay sharoit yaratilgan. Xitoy, Shimoliy Hindiston, Misr yoki Eron orqali O‘rta dengiz havzasidagi Rim imperiyasi shaharlari, Sharqiy Yevropa bilan savdo qilingan. Kushonlar davriga oid yuzdan ortiq shahar va qishloq xarobalari aniqlangan. Bu davrda har bir shahar atrofida ko‘plab mayda qishloqlar joylashgan."
    />
    <ForText
      text="Kushon podsholigi siyosiy hokimiyat ruhoniylar qo‘lida bo‘lgan davlat bo‘lib, unda podsho dunyoviy rahbar bo‘lish bilan birga bosh kohin ham edi. Davlat satrapliklarga bo‘lingan bo‘lib, ularning satraplari ayrim erkinliklarga ega edi. Garchi quldorlik davlati bo‘lsada, unda qishloq jamoasi muhim o‘rin tutgan. Kushon podsholari mamlakatda keng ko‘lamda dinlararo murosasozlik siyosatini yurgizgan: aholi, asosan, buddizmga e’tiqod qilgan, shuningdek, mamlakatda zardushtiylik, otashparastlik, hinduizm kabi ko‘plab  boshqa dinlar ham bo‘lgan. Hunarmandchilik, ichki va tashqi savdo keng taraqqiy etgan. Pul tizimida ko‘proqoltin va mis tangalar qo‘llanilgan. Dehqonchilik, xususan, sug‘orma dehqonchilik rivojlangan, qishloq xo‘jaligi ekinlarining ko‘pchilik turi ekilgan. "
    />
    <ForText
      text="Er. III asrining 1-yarmi yoki o‘rtalarida Kushon podsholigi barham topgan. Baqgriya-Toxariston maxsus mulk sifatida Sosoniylar davlati tarkibiga kirgan. Uni kushonshoh unvonli sosoniylar xonadoni vakillari idora qilgan "
    />
    <div class="for-img">
      <v-row>
        <v-col md="4">
          <img src="../../assets/img/bolim6/rasm1.jpg" alt="" />
          <ForLabel
            label="Kushonlik cig’inuvchi Zevs xudosi bilan (er.av. III asr)"
          />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim6/rasm2.jpg" alt="" />
          <ForLabel label="Budda haykali" />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim6/rasm3.jpg" alt="" />
          <ForLabel label="Kushon shahzodasi" />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim6/rasm4.jpg" alt="" />
          <ForLabel
            label="Kushon hukmdori
"
          />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim6/rasm5.jpg" alt="" />
          <ForLabel label="Kushon bronza tangasi" />
        </v-col>
        <v-col md="4">
          <img src="../../assets/img/bolim6/rasm6.jpg" alt="" />
          <ForLabel
            label="Tillatepaga topilgan tilla taqinchoq (er.av. I asr)"
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
