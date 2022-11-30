<template>
  <div class="row justify-center" style="margin-top:100px; margin-bottom:150px">

    <div>
      <q-img
        src="https://firebasestorage.googleapis.com/v0/b/dafel-344311.appspot.com/o/aco.png?alt=media&token=7b337dcb-d409-475c-858f-1fb6b15025b4"
        :ratio="1"
        class="aco"
        spinner-color="primary"
        spinner-size="82px"
      />
    </div>

    <div>
      <h1 class="text-center">ferro e aço</h1>
      <div class="container-aco">

        <div class="subtitle ferro">
          Dafel, a força do ferro e aço, trabalhamos com excelentes produtos para o sucesso do seu projeto.
        </div>
        <div class="ferro">
          <b>Serralheria:</b> Tubos, metalons, chapa U, soldas, chapas, usinados, telas, bobinas, perfil de alumínio.<br><br>
          <b>Construção Civil:</b> Vergalhão, Coluna pronta, Treliça de 6M, Malha Pop, Estribo, pregos, Radier, Arame.<br><br>
          <b>Ferramentas Manuais, Máquinas e equipamentos:</b> Chave de fenda, malas, brocas, fresas, serras, trenas, furadeiras, parafusadeiras, serra mármore, compressores, betoneiras, esmerilhadeiras, geradores e muito mais.
        </div>

        <div class="q-ma-md z-top q-gutter-md">
          <q-btn color="primary" class="col" rounded label="Baixe agora o catálogo" @click="onBaixar()" />

          <q-btn color="positive" class="q-px-xl" rounded @click="openLink()" label="Fale conosco" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { openURL } from 'quasar';

export default {
  methods: {
    onBaixar() {
      openURL('https://drive.google.com/file/d/1NlnOXFQhcy1yjJah0wi3_dy6nyYui_Zh/view?usp=sharing')
    },
    openLink() {
      let phoneNumber = '21994361660'
      let msg = "quero saber mais sobre ferro e aço."
      openURL(`https://api.whatsapp.com/send?phone=55${phoneNumber}&text=${msg}`);
    }
  },
}
</script>

<style>

</style>
