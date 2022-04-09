<template>
  <Header />
  <Main />
  <Footer />
</template>

<style lang="scss">
.hidden {
  display: none;
}

a {
  color: #662D91;
  text-decoration: none;

  &:hover {
    color: #707070;
    transition: all .5s ease-out;
  }

  &:visited {
    color: #707070;
  }
}
</style>
<script>
import Main from '@/views/MainView'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
  name: 'app',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
