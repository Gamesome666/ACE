<template>
  <div class="product-detail-page">
    <div class="page-header">
      <div class="container">
        <h1>{{ productTitle }}</h1>
      </div>
    </div>

    <div class="container" style="padding: 80px 0 80px 15px;">
      <div class="row">
        <div class="col-xs-12 col-md-3">
          <ProductSidebar />
        </div>

        <div class="col-xs-12 col-md-9">
          <!-- Single Detail Image -->
          <div class="row">
            <div class="col-xs-12">
              <div class="detail-image-container">
                <img :src="detailImage" :alt="productTitle" class="detail-image">
              </div>
              
              <!-- Product Model Name -->
              <div class="product-info" v-if="productModel">
                <h2>{{ productModel }}</h2>
              </div>
            </div>
          </div>

          <!-- Back Button -->
          <div class="text-center" style="margin-top: 50px;">
            <button @click="goBack" class="btn btn-primary btn-lg">
              <i class="fa fa-arrow-left"></i> Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSidebar from '../components/ProductSidebar.vue'

export default {
  name: 'ProductDetail',
  components: {
    ProductSidebar
  },
  data() {
    return {
      categoryTitle: '',
      subcategoryTitle: '',
      productTitle: '',
      productModel: '',
      detailImage: '',
      detailImageData: {
        'smart-pet-feeder': {
          title: 'Smart Pet Feeder',
          images: [
            { image: '/images/Smart Feeding/Smart PetFeeder/image.png', model: 'ACE-Q21 SMART VISUAL PET FEEDER' },
            { image: '/images/Smart Feeding/Smart PetFeeder/image copy.png', model: 'ACE-Q50 PORTABLE PET FEEDER WITH CAMERA' },
            { image: '/images/Smart Feeding/Smart PetFeeder/image copy 2.png', model: 'ACE-Q39K SMART BIRD FEEDER' },
            { image: '/images/Smart Feeding/Smart PetFeeder/image copy 3.png', model: 'ACE-Q45A BAMBOO/WOODEN SMART BIRD FEEDER' },
            { image: '/images/Smart Feeding/Smart PetFeeder/image copy 4.png', model: 'ACE-Q20 SMART BIRD FEEDER' },
            { image: '/images/Smart Feeding/Smart PetFeeder/image copy 5.png', model: 'ACE-Q27 SMART BIRD FEEDER' },
            { image: '/images/Smart Feeding/Smart PetFeeder/image copy 6.png', model: 'ACE-Q31 4G SMART BIRD FEEDER' },
            { image: '/images/Smart Feeding/Smart PetFeeder/image copy 7.png', model: 'ACE-Q39 SMART BIRD FEEDER' },
            { image: '/images/Smart Feeding/Smart PetFeeder/image copy 8.png', model: 'ACE040 Pet Button Feeder' },
            { image: '/images/Smart Feeding/Smart PetFeeder/image copy 9.png', model: 'ACE040 Pet WiFi Feeder' },
            { image: '/images/Smart Feeding/Smart PetFeeder/image copy 10.png', model: 'ACE040 Pet Video Feeder' }
          ]
        },
        'smart-water-dispenser': {
          title: 'Smart Water Dispenser',
          images: [
            { image: '/images/Smart Feeding/Smart Water Dispenser/image.png', model: 'ACE5 Smart Water Dispenser' },
            { image: '/images/Smart Feeding/Smart Water Dispenser/image copy.png', model: 'ACE10 Smart Water Dispenser with APP' },
            { image: '/images/Smart Feeding/Smart Water Dispenser/image copy 2.png', model: 'ACE12 Wireless Smart Water Dispenser' },
            { image: '/images/Smart Feeding/Smart Water Dispenser/image copy 3.png', model: 'ACE18 Wireless Smart Water Dispenser' },
            { image: '/images/Smart Feeding/Smart Water Dispenser/image copy 4.png', model: 'ACE02SP Inductive Water Dispenser' },
            { image: '/images/Smart Feeding/Smart Water Dispenser/image copy 5.png', model: 'ACE04SP Inductive Water Dispenser' }
          ]
        },
        'bluetooth-anti-loss': {
          title: 'Bluetooth Anti Loss Device',
          images: [
            { image: '/images/Anti-Loss Device/Bluetooth Anti Loss Device/image.png', model: 'Y02 Bluetooth anti-loss device' },
            { image: '/images/Anti-Loss Device/Bluetooth Anti Loss Device/image copy.png', model: 'FD-01 Bluetooth anti-loss device' },
            { image: '/images/Anti-Loss Device/Bluetooth Anti Loss Device/image copy 2.png', model: 'Y04 Bluetooth anti-loss device' },
            { image: '/images/Anti-Loss Device/Bluetooth Anti Loss Device/image copy 3.png', model: 'Y22 Bluetooth anti-loss device' },
            { image: '/images/Anti-Loss Device/Bluetooth Anti Loss Device/image copy 4.png', model: 'Y06 Bluetooth anti-loss device' },
            { image: '/images/Anti-Loss Device/Bluetooth Anti Loss Device/image copy 5.png', model: 'FD-03 Bluetooth anti-loss device' },
            { image: '/images/Anti-Loss Device/Bluetooth Anti Loss Device/image copy 6.png', model: 'Y03 Bluetooth anti-loss device' },
            { image: '/images/Anti-Loss Device/Bluetooth Anti Loss Device/image copy 7.png', model: 'Y10 Bluetooth anti-loss device' },
            { image: '/images/Anti-Loss Device/Bluetooth Anti Loss Device/image copy 8.png', model: 'Y01 Bluetooth anti-loss device' }
          ]
        },
        'apple-locator': {
          title: 'Apple Locator',
          images: [
            { image: '/images/Anti-Loss Device/Apple Locator/image.png', model: 'Y12 Apple Locator' },
            { image: '/images/Anti-Loss Device/Apple Locator/image copy.png', model: 'Y14 Apple Locator' },
            { image: '/images/Anti-Loss Device/Apple Locator/image copy 2.png', model: 'Y17 Apple Locator' },
            { image: '/images/Anti-Loss Device/Apple Locator/image copy 3.png', model: 'Y21 Apple Locator' },
            { image: '/images/Anti-Loss Device/Apple Locator/image copy 4.png', model: 'Y27 Apple Locator' },
            { image: '/images/Anti-Loss Device/Apple Locator/image copy 5.png', model: 'C Tag Apple Locator' },
            { image: '/images/Anti-Loss Device/Apple Locator/image copy 6.png', model: 'Y18 Apple Locator' },
            { image: '/images/Anti-Loss Device/Apple Locator/image copy 7.png', model: 'Y19 Apple Locator' },
            { image: '/images/Anti-Loss Device/Apple Locator/image copy 8.png', model: 'Y25 Apple Locator' },
            { image: '/images/Anti-Loss Device/Apple Locator/image copy 9.png', model: 'Y20 Apple Locator' },
            { image: '/images/Anti-Loss Device/Apple Locator/image copy 10.png', model: 'Y23 Apple Locator' }
          ]
        },
        'google-locator': {
          title: 'Google Locator',
          images: [
            { image: '/images/Anti-Loss Device/Google Locator/image.png', model: 'X Tag Google Tracker' }
          ]
        },
        'pet-grooming': {
          title: 'Pet Grooming',
          images: [
            { image: '/images/Pet Essentials/Pet Grooming/image.png', model: 'ACE003 Pet nail grinder' },
            { image: '/images/Pet Essentials/Pet Grooming/image copy.png', model: 'ACE032 Pet electric shaver' },
            { image: '/images/Pet Essentials/Pet Grooming/image copy 2.png', model: 'ACE107 Pet electric shaver' },
            { image: '/images/Pet Essentials/Pet Grooming/image copy 3.png', model: 'ACE109 Pet hair clipper' },
            { image: '/images/Pet Essentials/Pet Grooming/image copy 4.png', model: 'ACE161 Pet toe crease hair clipper' },
            { image: '/images/Pet Essentials/Pet Grooming/image copy 5.png', model: 'ACE162 Pet four-in-one electric shaver' },
            { image: '/images/Pet Essentials/Pet Grooming/image copy 6.png', model: 'ACE166 Electric digital display pet hair clipper grooming set(four-in-one package)' },
            { image: '/images/Pet Essentials/Pet Grooming/image copy 7.png', model: 'ACE167 Electric digital display pet hair clipper grooming set(four-in-one package)' },
            { image: '/images/Pet Essentials/Pet Grooming/image copy 8.png', model: 'ACE177 Pet hair clipper' }
          ]
        },
        'pet-leash': {
          title: 'Pet Leash',
          images: [
            { image: '/images/Pet Essentials/Pet Leash/image.png', model: '' },
            { image: '/images/Pet Essentials/Pet Leash/image copy.png', model: '' },
            { image: '/images/Pet Essentials/Pet Leash/image copy 2.png', model: '' },
            { image: '/images/Pet Essentials/Pet Leash/image copy 3.png', model: '' },
            { image: '/images/Pet Essentials/Pet Leash/image copy 4.png', model: '' },
            { image: '/images/Pet Essentials/Pet Leash/image copy 5.png', model: '' },
            { image: '/images/Pet Essentials/Pet Leash/image copy 6.png', model: '' },
            { image: '/images/Pet Essentials/Pet Leash/image copy 7.png', model: '' },
            { image: '/images/Pet Essentials/Pet Leash/image copy 8.png', model: '' },
            { image: '/images/Pet Essentials/Pet Leash/image copy 9.png', model: '' },
            { image: '/images/Pet Essentials/Pet Leash/image copy 10.png', model: 'ACE-11001 Running traction rope set' },
            { image: '/images/Pet Essentials/Pet Leash/image copy 11.png', model: 'ACE-11010 Multi-functional elastic leash' }
          ]
        },
        'pet-collar': {
          title: 'Pet Collar',
          images: [
            { image: '/images/Pet Essentials/Pet Collor/image.png', model: 'ACE-12002 PU Positioning collar' },
            { image: '/images/Pet Essentials/Pet Collor/image copy.png', model: 'ACE-12003 Printed material collar' },
            { image: '/images/Pet Essentials/Pet Collor/image copy 2.png', model: 'ACE-12010 Widened tactical collar' },
            { image: '/images/Pet Essentials/Pet Collor/image copy 3.png', model: '' },
            { image: '/images/Pet Essentials/Pet Collor/image copy 4.png', model: '' },
            { image: '/images/Pet Essentials/Pet Collor/image copy 5.png', model: '' },
            { image: '/images/Pet Essentials/Pet Collor/image copy 6.png', model: '' }
          ]
        },
        'pet-harness': {
          title: 'Pet Harness',
          images: [
            { image: '/images/Pet Essentials/Pet Harness/image.png', model: 'ACE-13002 Mesh Nylon Dog Harnesses' },
            { image: '/images/Pet Essentials/Pet Harness/image copy.png', model: 'ACE-13003 Saddle dog harness' },
            { image: '/images/Pet Essentials/Pet Harness/image copy 2.png', model: 'ACE-13012 Dog Lifting Harness' },
            { image: '/images/Pet Essentials/Pet Harness/image copy 3.png', model: '' },
            { image: '/images/Pet Essentials/Pet Harness/image copy 4.png', model: '' }
          ]
        },
        'pet-bed': {
          title: 'Pet Bed',
          images: [
            { image: '/images/Pet Essentials/Pet Bed/image.png', model: 'ACE-23003 Solid Wood Cat Hammock' },
            { image: '/images/Pet Essentials/Pet Bed/image copy.png', model: 'ACE-14004 Memory Foam Dog Bed' },
            { image: '/images/Pet Essentials/Pet Bed/image copy 2.png', model: '' },
            { image: '/images/Pet Essentials/Pet Bed/image copy 3.png', model: '' }
          ]
        },
        'pet-backpack': {
          title: 'Pet Backpack',
          images: [
            { image: '/images/Pet Essentials/Pet Backpack/image.png', model: 'ACE-22005 Pet travel folding backpack' },
            { image: '/images/Pet Essentials/Pet Backpack/image copy.png', model: 'ACE-22006 Pet portable outing bag' },
            { image: '/images/Pet Essentials/Pet Backpack/image copy 2.png', model: 'ACE-22007 Pet Moving Bags' },
            { image: '/images/Pet Essentials/Pet Backpack/image copy 3.png', model: '' },
            { image: '/images/Pet Essentials/Pet Backpack/image copy 4.png', model: '' }
          ]
        },
        'pet-car-mat': {
          title: 'Pet Car Mat',
          images: [
            { image: '/images/Pet Essentials/Pet Car Mat/image.png', model: 'ACE-14007 Car rear pet mat' },
            { image: '/images/Pet Essentials/Pet Car Mat/image copy.png', model: '' },
            { image: '/images/Pet Essentials/Pet Car Mat/image copy 2.png', model: '' }
          ]
        },
        'pet-toy': {
          title: 'Pet Toy',
          images: [
            { image: '/images/Pet Essentials/Pet Toy/image.png', model: '' },
            { image: '/images/Pet Essentials/Pet Toy/image copy.png', model: '' }
          ]
        }
      },
      categoryData: {
        'smart-feeding': 'Smart Feeding',
        'anti-loss-device': 'Anti-Loss Device',
        'pet-essentials': 'Pet Essentials'
      }
    }
  },
  mounted() {
    this.loadProductDetail()
  },
  watch: {
    '$route.params'() {
      this.loadProductDetail()
    }
  },
  methods: {
    loadProductDetail() {
      const category = this.$route.params.category
      const subcategory = this.$route.params.subcategory
      const detailIndex = parseInt(this.$route.params.detailIndex)
      
      this.categoryTitle = this.categoryData[category] || ''
      
      if (this.detailImageData[subcategory]) {
        this.subcategoryTitle = this.detailImageData[subcategory].title
        this.productTitle = this.detailImageData[subcategory].title
        
        const productData = this.detailImageData[subcategory].images[detailIndex]
        if (productData) {
          this.detailImage = productData.image
          this.productModel = productData.model
        }
      }
    },
    goBack() {
      this.$router.push(`/products/${this.$route.params.category}/${this.$route.params.subcategory}`)
    }
  }
}
</script>

<style scoped>
.page-header {
  background: var(--primary-color);
  color: #333;
  padding: 60px 0 40px;
  margin-bottom: 0;
}

.page-header h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
}

.breadcrumb {
  font-size: 16px;
  margin: 0;
}

.breadcrumb a {
  color: #333;
  text-decoration: underline;
}

.breadcrumb a:hover {
  color: #555;
}

.detail-image-container {
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.detail-image {
  width: auto;
  height: auto;
  max-width: 1200px;
  max-height: 1200px;
  display: block;
  border-radius: 0;
}

.product-info {
  text-align: center;
  padding: 30px;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 20px;
}

.product-info h2 {
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.btn-primary {
  padding: 15px 40px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 50px;
  transition: all 0.3s;
  background: var(--primary-color);
  border-color: var(--primary-color);
}

.btn-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 20px rgba(0,0,0,0.3);
  background: var(--primary-hover);
  border-color: var(--primary-hover);
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 32px;
  }
  
  .detail-image-container {
    padding: 20px;
  }
  
  .product-info h2 {
    font-size: 20px;
  }
}
</style>
