<template>
  <div class="row justify-start bgDark container-social">
    <div class="column q-px-xl">
      <div>
        <q-img
          src="https://firebasestorage.googleapis.com/v0/b/dafel-344311.appspot.com/o/Social.png?alt=media&token=a2d8e4e4-5175-4097-85f1-51f3473a3d7d"
          :ratio="19/9"
          width="200px"
          spinner-color="primary"
          spinner-size="82px"
        />
      </div>
      <div class="subtitle textOrange">
        Seriedade é a nossa marca.
      </div>

    </div>

    <div class="row q-gutter-md items-center full-width justify-center q-my-xl">
      <q-card class="cursor-pointer" v-for="(item, i) in feed" :key="i" @click="openLink(item)">
        <q-img style="max-width: 400px" width="90vw" :ratio="1" :src="item.media_url" />
      </q-card>
    </div>
  </div>
</template>

<script>
import { openURL } from 'quasar';
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      feed: []
    }
  },
  mounted() {
    this.getInstagram()
  },
  methods: {
    async getInstagram() {
      const token = process.env.TOKEN
      const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=media_url,media_type,caption,permalink`
      let result = await axios.get(url)
      console.log(result)
      this.feed = result.data.data.slice(0, 3)
    },
    openLink(item) {
      openURL(item.permalink)
    }
  },
}
</script>

<style>

</style>
