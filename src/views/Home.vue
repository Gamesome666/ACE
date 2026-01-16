<template>
  <div>
    <Banner />
    <Advantage />
    <ProductsPreview />
    <AboutUsPreview />
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Advantage from '../components/Advantage.vue'
import ProductsPreview from '../components/ProductsPreview.vue'
import AboutUsPreview from '../components/AboutUsPreview.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Advantage,
    ProductsPreview,
    AboutUsPreview
  }
}
</script>
