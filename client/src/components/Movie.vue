<template>
  <router-link :to="`/movie/${movie.id}`">
    <div>
      <img :src="`${FILE_URL}/movie_images/${movie.image}`" alt="">
      <p><strong>Name: </strong><br>{{ movie.title }}</p>
      <p><strong>Story Line:</strong> <br>{{ movie.storyLine }}</p>
      <p><strong>Year:</strong> {{ movie.year }}</p>

    </div>
  </router-link>
</template>

<script>
import {FILE_URL} from "@/utils/consts"
import router from "@/router"

export default {
  name: 'movie',
  data() {
    return {
      FILE_URL
    }
  },
  created() {
    if (!localStorage.getItem('accessToken')) {
      router.push("/authorization")
    }
  },
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>


<style scoped lang="scss">
div {
  max-width: 250px;
  padding: 20px;
}

img {
  width: 100%;
}
</style>
