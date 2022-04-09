<template>
  <footer id="footer">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/roku-logo-svg2.svg" alt="Roku Logo">
      </router-link>
      <div class="copyright">
        <img src="../assets/copyright.svg" alt="copyright">
        <p>2008-2021 All rights reserved.</p>
      </div>
    </div>
    <section class="followUs">
      <p>Follow us:</p>
      <a href="https://www.facebook.com">
        <img src="../assets/facebook.svg" alt="facebook">
      </a>
      <a href="https://www.instagram.com">
        <img src="../assets/instagram.svg" alt="instagram">
      </a>
      <a href="https://www.youtube.com">
        <img src="../assets/youtube.svg" alt="youtube">
      </a>
    </section>
  </footer>
</template>

<script>
  export default {
  name: 'footer'
}
</script>

<style scoped lang="scss">
#footer {
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  margin: 20px;
  background: white;
  border: solid #707070 1px;
  align-items:flex-end;
  margin-left: auto;
  margin-right: auto;

  & .logo {
    margin-left: 20px;
    margin-top: 20px;
  }

  & p {
    color: #662D91;
  }
}


.copyright {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & img {
    width: 20%;
    height: 20%;
  }

  & p {
    margin-left: 10px;
  }
}

.followUs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin:20px;


  & img {
    width: 70%;
    height: 70%;
  }

  & p {
    margin-right: 10px;
  }
}

@media screen and (max-width: 768px) {
  #footer {
    display: none;
  }
}
</style>
