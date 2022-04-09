<template>
  <section class="audios">
    <AudioFile v-for="audio of audios" v-bind:audio="audio"/>
  </section>
</template>

<script>
import jwt_decode from "jwt-decode"
import fetchIntercept from "@/utils/fetchIntercept"
import AudioFile from "@/components/AudioFile"

export default {
  name: 'audioView',
  mounted() {
    const user = jwt_decode(localStorage.getItem('accessToken'))
    console.log(user)
    fetchIntercept(`/audios/getAll/${user.typeOfAccount}`, {
      headers: {
        'Content-Type': 'Application/json'
      },
      method: 'GET'
    }).then(({response, data}) => {
      console.log(response)
      if (response.status === 200) {
        console.log(data)
        this.audios = data
        console.log(this.audios)
      }
    })

  },
  components: {
    AudioFile
  },
  data(){
    return {
      audios: []
    }
  }
}

</script>

<style scoped lang="scss">
.audios {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
