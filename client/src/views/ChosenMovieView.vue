<template>
  <section class="chosenMovie">
    <video :src="`${FILE_URL}/movie_files/${video}`" type="video/mp4" controls></video>
  </section>
</template>

<script>
import fetchIntercept from "@/utils/fetchIntercept"
import {FILE_URL} from "@/utils/consts"

export default {

  name: 'chosenMovie',
  mounted() {
    console.log(this.$route.params.id)

    fetchIntercept(`/movies/getOne/${this.$route.params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/json'
      }
    }).then(({response, data}) => {
      this.video = data.trailer
      console.log(this.video)
    })
  },
  data(){
    return {
      video: '',
      FILE_URL
    }
  }
}
</script>

<style scoped lang="scss">
.chosenMovie {
  max-width: 1280px;
  display: flex;
  justify-content: center;
  margin: 40px 20px;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
}
</style>
