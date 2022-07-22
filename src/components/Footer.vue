<template>
  <div class="bgDark text-white">
    <div>
      <div class="row justify-center q-py-xl">
        <div style="max-width:70vw">
          <div class="text-h4">Sobre:</div>
          <div class="text-h6">
            <p>
              Somos uma empresa de Ferro e aço, com 30 anos no mercado, com um mix de produtos para atender todas as necessidades de empresas de serralheria, comunicação visual, construção civil e marcenaria, incluindo uma linha completa de fixadores (DAFIX) e EPIs de alta qualidade.<br><br>
              Dafel – Seriedade é a nossa marca.
            </p>
          </div>
        </div>
      </div>

      <div class="fit q-pa-lg q-my-xl">
        <div class="row items-center justify-around" style="margin:auto">
          <div class="column text-center q-my-xl">
            <b class="text-h4">Horário de atendimento:</b>
            <div class="text-h6">
              Seg. à Sex: 08h às 17h<br>
              Sáb: 08H às 12h
            </div>
          </div>
          <div class="column text-h6 text-center">
            <b class="text-h4">Telefones:</b>
            <div class="text-h6">
              Fixo:(21) 3952-6530<br>
              Whats: (21) 99436-1660
            </div>
          </div>
        </div>
      </div>

      <div class="row items-start q-my-xl justify-center">
        <div class="col-lg-3">
          <q-img
            src="../assets/logo-br.png"
            :ratio="19/6"
            width="300px"
            spinner-color="primary"
            spinner-size="82px"
          />
        </div>
        <div class="col-lg-9 row items-start q-pa-md">
          <div class="col-lg-8">
            <div class="row items-center">
              <q-icon name="room" size="40px" />
              <b class="text-h4">Endereço:</b>
            </div>
            <div class="text-h6 q-my-xl">
              SARACURUNA: Av. Presidente Roosevelt - Saracuruna, Duque de Caxias - RJ, 25211-120<br><br>
              PIABETÁ: AV. Automóvel Clube, S/N, Lote 38, Quadra 61 Jardim Nazareno - Piabetá, Magé - RJ, 25935-510
            </div>
          </div>

          <div class="row col-lg-auto">
            <div class="row items-center justify-center q-pa-xl q-gutter-lg">
              <a target="_blank" style="text-decoration: none" :href="`https://api.whatsapp.com/send?phone=5521994361660`">
                <q-icon color="white" name="whatsapp" size="35px" />
              </a>
              <a target="_blank" :href="`https://www.facebook.com/dafelcaxias`">
                <q-img
                  src="../assets/facebook.svg"
                  width="30px"
                  :ratio="1"
                  spinner-color="primary"
                  spinner-size="82px"
                />
              </a>
              <a target="_blank" :href="`https://www.instagram.com/dafelcaxias`">
              <q-img
                src="../assets/instagram.svg"
                width="30px"
                :ratio="1"
                spinner-color="primary"
                spinner-size="82px"
              />

              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { openURL } from 'quasar';

export default {

}
</script>

<style>

</style>
