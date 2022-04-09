<template>
  <section class="movies">
    <section class="promo">
      <img src="../assets/got.jpg" alt="promo-parents">
    </section>
    <section class="recommend">
      <h2>RECOMMENDED</h2>
      <div style="width: 100%;display:flex;flex-direction: row;flex-wrap: wrap">
        <Movie v-for="movie of movies" v-bind:movie="movie" />
      </div>
    </section>
  </section>
</template>

<script>
import fetchIntercept from "@/utils/fetchIntercept"
import jwt_decode from "jwt-decode"
import Movie from "@/components/Movie"

export default {
  name: 'movies',
  mounted() {
    const user = jwt_decode(localStorage.getItem('accessToken'))
    console.log(user)
    fetchIntercept(`/movies/getAll/${user.typeOfAccount}`, {
      headers: {
        'Content-Type': 'Application/json'
      },
      method: 'GET'
    }).then(({response, data}) => {
      console.log(response)
      if (response.status === 200){
        console.log(data)
        this.movies = data
        console.log(this.movies)
      }
    })

  },
  components: {
    Movie
  },
  data (){
    return {
      movies: [{}]
    }
  }

}
</script>


<style scoped lang="scss">
.movies {
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 40px 20px;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
}


.recommend h2 {
  font-family: "Avenir Next", Arial, Helvetica, sans-serif;
  font-size: 22px;
  font-weight: 500;
  color: #707070
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.hidden {
  display: none
}

a {
  color: #662d91;
  text-decoration: none
}

a:hover {
  color: #707070;
  transition: all .5s ease-out
}

a:visited {
  color: #707070
}
</style>
