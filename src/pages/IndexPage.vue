<template>
  <q-page>
    <Header class="full-width"></Header>
    <Epis></Epis>
    <Dafix></Dafix>
    <Aco></Aco>
    <Social></Social>
    <Footer></Footer>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import Header from '../components/Header.vue'
import Epis from '../components/Epis.vue'
import Dafix from '../components/Dafix.vue'
import Aco from '../components/Aco.vue'
import Social from '../components/Social.vue'
import Footer from '../components/Footer.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    Header, Epis, Dafix, Aco, Social, Footer
  }
})
</script>
