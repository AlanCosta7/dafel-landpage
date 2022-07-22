<template>
  <div class="row justify-around bgOrange text-white container">

    <div class="float-left">
      <q-img
        src="https://firebasestorage.googleapis.com/v0/b/dafel-344311.appspot.com/o/epis.png?alt=media&token=6c5f11b1-7e35-4f10-ad0e-4e69c51eb202"
        :ratio="1"
        class="epis z-top"
        spinner-color="primary"
        spinner-size="82px"
      />
    </div>
    <div class="float-right">
      <h1 class="text-right">epi's</h1>
      <div class="subtitle text-right">
        Com a expertise de 30 anos no mercado
      </div>
      <div class="full-width column">
        <div class="card-container float-right text-weight-medium text-right">
          Reunimos as maiores marcas e produtos do setor de Equipamentos de Proteção Individual (EPI) com: <span class="text-weight-light">Capacetes; Botas; Luvas; Cintos; Protetores auditivos; Abafadores; Uniformes; Aventais; Óculos; Capa de chuva;<br>
          <b>Sinalizações:</b>
          Fita zebra; Tela tapume; Cones plásticos; Tela fachada;
          </span>
          <div class="q-ma-md ">
            <q-btn color="positive" class="q-px-xl" rounded @click="openLink()" label="Fale conosco" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { openURL } from 'quasar';

export default {
  methods: {
    openLink() {
      let phoneNumber = '21994361660'
      let msg = "quero saber mais sobre EPI's."
      openURL(`https://api.whatsapp.com/send?phone=55${phoneNumber}&text=${msg}`);
    }
  }
}
</script>

<style>

</style>
