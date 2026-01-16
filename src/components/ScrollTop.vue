<template>
  <div class="scroll" v-show="showScroll" @click="scrollToTop">
    Top
  </div>
</template>

<script>
export default {
  name: 'ScrollTop',
  data() {
    return {
      showScroll: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.showScroll = window.scrollY > 200
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>
