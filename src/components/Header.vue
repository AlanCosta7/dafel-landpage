<template>
  <div>
    <q-responsive class="responsive" :ratio="20/10">
      <q-carousel
        animated
        v-model="slide"
        :navigation="!mobile"
        infinite
        :autoplay="autoplay"
      >
          <q-carousel-slide class="cursor-pointer" @click="openLink(item.txt)" v-for="(item, i) in banner" :key="i" :name="i" :img-src="item.img" />
      </q-carousel>
    </q-responsive>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { ref } from 'vue'
import { openURL } from 'quasar';

export default {
  setup () {
    return {
      slide: ref(0),
      autoplay: true
    }
  },
  computed: {
    ...mapState([
      'banner',
    ]),
    ...mapGetters([
      'mobile',
    ]),
  },
  methods: {
    openLink(msg) {
      let phoneNumber = '21994361660'
      openURL(`https://api.whatsapp.com/send?phone=55${phoneNumber}&text=${msg}`);
    }
  },
}
</script>

<style scoped>
  .responsive {
    margin-top: 0px;
  }
</style>
