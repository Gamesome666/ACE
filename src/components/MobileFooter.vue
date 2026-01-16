<template>
  <nav class="navbar navbar-default navbar-fixed-bottom mfoot_box">
    <div class="mfoot_nav btn-group dropup">
      <a class="dropdown-toggle" data-toggle="dropdown" href="#">
        <span class="glyphicon glyphicon-share btn-lg"></span>Share
      </a>
    </div>
    <div class="mfoot_nav">
      <a href="tel:+85267113894">
        <span class="glyphicon glyphicon-phone btn-lg"></span>Call
      </a>
    </div>
    <div class="mfoot_nav">
      <button id="foot_btn" type="button" @click="toggleMenu" style="width:100%; border: 0px; background: transparent;">
        <span class="glyphicon glyphicon-th-list btn-lg"></span> Menu
      </button>
    </div>
    <div class="mfoot_nav">
      <a href="#" @click.prevent="scrollToTop">
        <span class="glyphicon glyphicon-circle-arrow-up btn-lg"></span>Top
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MobileFooter',
  methods: {
    toggleMenu() {
      const navbar = document.getElementById('navbar')
      if (navbar) {
        navbar.classList.toggle('in')
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>
