<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
    <MobileFooter />
    <MessageForm />
    <SocialMedia />
    <ScrollTop />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import MobileFooter from './components/MobileFooter.vue'
import MessageForm from './components/MessageForm.vue'
import SocialMedia from './components/SocialMedia.vue'
import ScrollTop from './components/ScrollTop.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    MobileFooter,
    MessageForm,
    SocialMedia,
    ScrollTop
  }
}
</script>
