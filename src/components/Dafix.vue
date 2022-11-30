<template>
  <div class="row justify-around bgGrey container">

    <div class="float-left">
      <h1 class="text-left">Dafix</h1>
      <div class="subtitle text-left">
        Conheça a DAFIX
      </div>
      <div class="card-container float-right text-left q-my-xl">
        Trabalhamos com as melhores marcas, para garantir máxima qualidade em nossos produtos para atender a todos os segmentos profissionais.<br><br>
        Baixe agora o catálogo e conheça este mix de produtos
      </div>

      <div class=" q-gutter-md">
        <q-btn color="primary" class="col" rounded label="Baixe agora o catálogo" @click="onBaixar()" />

        <q-btn color="positive" class="col q-px-xl" rounded @click="openLink()" label="Fale conosco" />
      </div>
    </div>

    <div class="float-right">
      <q-img
        src="https://firebasestorage.googleapis.com/v0/b/dafel-344311.appspot.com/o/dafix.png?alt=media&token=b0a2af17-205a-4787-af87-055ff87a4820"
        :ratio="1"
        class="dafix"
        spinner-color="primary"
        spinner-size="82px"
      />
    </div>
  </div>
</template>

<script>
import { openURL } from 'quasar';

export default {
  methods: {
    onBaixar() {
      openURL('https://drive.google.com/file/d/1oYWBBW2WfwIazYX2ifs9eC74rZjsOHIZ/view?usp=sharing')
    },
    openLink() {
      let phoneNumber = '21994361660'
      let msg = "quero saber mais sobre mix de parafusos."
      openURL(`https://api.whatsapp.com/send?phone=55${phoneNumber}&text=${msg}`);
    }
  },
}
</script>

<style>

</style>
