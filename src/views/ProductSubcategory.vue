<template>
  <div class="product-subcategory-page" v-if="subcategoryInfo">
    <div class="page-header">
      <div class="container">
        <h1>{{ subcategoryInfo.title }}</h1>
      </div>
    </div>

    <div class="container" style="padding: 50px 0 50px 15px;">
      <div class="row">
        <div class="col-xs-12 col-md-3">
          <ProductSidebar />
        </div>

        <div class="col-xs-12 col-md-9">
          <!-- Product count -->
          <div class="product-count">
            <p>Total Products: {{ totalDisplayProducts }} | Page {{ currentPage }} of {{ totalPages }}</p>
          </div>

          <!-- Display Images Grid -->
          <div :class="getContainerClass()">
        <div 
          v-for="(product, index) in paginatedProducts" 
          :key="index"
          :class="[getItemClass(), { 'second-image': shouldDisableClick() && index === 1 }]"
        >
          <div 
            class="display-item" 
            :class="{ 'no-click': shouldDisableClick() }"
            @click="!shouldDisableClick() && goToDetail(product.detailIndex)"
          >
            <div :class="getImageWrapperClass()">
              <img :src="product.image" :alt="product.model" class="display-image">
            </div>
            <div class="product-model" v-if="product.model && currentPage === 1">
              {{ product.model }}
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="pagination-wrapper" v-if="totalPages > 1">
        <nav>
          <ul class="pagination">
            <li :class="{ disabled: currentPage === 1 }">
              <a href="#" @click.prevent="goToPage(currentPage - 1)" aria-label="Previous">
                <span aria-hidden="true">&laquo; Previous</span>
              </a>
            </li>
            <li 
              v-for="page in displayPages" 
              :key="page"
              :class="{ active: currentPage === page }"
            >
              <a href="#" @click.prevent="goToPage(page)">{{ page }}</a>
            </li>
            <li :class="{ disabled: currentPage === totalPages }">
              <a href="#" @click.prevent="goToPage(currentPage + 1)" aria-label="Next">
                <span aria-hidden="true">Next &raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSidebar from '../components/ProductSidebar.vue'

export default {
  name: 'ProductSubcategory',
  components: {
    ProductSidebar
  },
  data() {
    return {
      categoryTitle: '',
      subcategoryInfo: null,
      currentPage: 1,
      productData: {
        'smart-feeding': {
          title: 'Smart Feeding',
          subcategories: {
            'smart-pet-feeder': {
              title: 'Smart Pet Feeder',
              displayProducts: [
                { image: '/images/imagesDisplay/Smart Pet Feeder/image.png', model: 'ACE-Q21 SMART VISUAL PET FEEDER', detailIndex: 0 },
                { image: '/images/imagesDisplay/Smart Pet Feeder/image copy.png', model: 'ACE-Q50 PORTABLE PET FEEDER WITH CAMERA', detailIndex: 1 },
                { image: '/images/imagesDisplay/Smart Pet Feeder/image copy 2.png', model: 'ACE-Q39K SMART BIRD FEEDER', detailIndex: 2 },
                { image: '/images/imagesDisplay/Smart Pet Feeder/image copy 3.png', model: 'ACE-Q45A BAMBOO/WOODEN SMART BIRD FEEDER', detailIndex: 3 },
                { image: '/images/imagesDisplay/Smart Pet Feeder/image copy 4.png', model: 'ACE-Q20 SMART BIRD FEEDER', detailIndex: 4 },
                { image: '/images/imagesDisplay/Smart Pet Feeder/image copy 5.png', model: 'ACE-Q27 SMART BIRD FEEDER', detailIndex: 5 },
                { image: '/images/imagesDisplay/Smart Pet Feeder/image copy 6.png', model: 'ACE-Q31 4G SMART BIRD FEEDER', detailIndex: 6 },
                { image: '/images/imagesDisplay/Smart Pet Feeder/image copy 7.png', model: 'ACE-Q39 SMART BIRD FEEDER', detailIndex: 7 },
                { image: '/images/imagesDisplay/Smart Pet Feeder/image copy 8.png', model: 'ACE040 Pet Button Feeder', detailIndex: 8 },
                { image: '/images/imagesDisplay/Smart Pet Feeder/image copy 9.png', model: 'ACE040 Pet WiFi Feeder', detailIndex: 9 },
                { image: '/images/imagesDisplay/Smart Pet Feeder/image copy 10.png', model: 'ACE040 Pet Video Feeder', detailIndex: 10 }
              ]
            },
            'smart-water-dispenser': {
              title: 'Smart Water Dispenser',
              displayProducts: [
                { image: '/images/imagesDisplay/Smart Water Dispenser/image.png', model: 'ACE5 Smart Water Dispenser', detailIndex: 0 },
                { image: '/images/imagesDisplay/Smart Water Dispenser/image copy.png', model: 'ACE10 Smart Water Dispenser with APP', detailIndex: 1 },
                { image: '/images/imagesDisplay/Smart Water Dispenser/image copy 2.png', model: 'ACE12 Wireless Smart Water Dispenser', detailIndex: 2 },
                { image: '/images/imagesDisplay/Smart Water Dispenser/image copy 3.png', model: 'ACE18 Wireless Smart Water Dispenser', detailIndex: 3 },
                { image: '/images/imagesDisplay/Smart Water Dispenser/image copy 4.png', model: 'ACE02SP Inductive Water Dispenser', detailIndex: 4 },
                { image: '/images/imagesDisplay/Smart Water Dispenser/image copy 5.png', model: 'ACE04SP Inductive Water Dispenser', detailIndex: 5 }
              ]
            }
          }
        },
        'anti-loss-device': {
          title: 'Anti-Loss Device',
          subcategories: {
            'bluetooth-anti-loss': {
              title: 'Bluetooth Anti Loss Device',
              displayProducts: [
                { image: '/images/imagesDisplay/Bluetooth Anti Loss Device/image.png', model: 'Y02 Bluetooth anti-loss device', detailIndex: 0 },
                { image: '/images/imagesDisplay/Bluetooth Anti Loss Device/image copy.png', model: 'FD-01 Bluetooth anti-loss device', detailIndex: 1 },
                { image: '/images/imagesDisplay/Bluetooth Anti Loss Device/image copy 2.png', model: 'Y04 Bluetooth anti-loss device', detailIndex: 2 },
                { image: '/images/imagesDisplay/Bluetooth Anti Loss Device/image copy 3.png', model: 'Y22 Bluetooth anti-loss device', detailIndex: 3 },
                { image: '/images/imagesDisplay/Bluetooth Anti Loss Device/image copy 4.png', model: 'Y06 Bluetooth anti-loss device', detailIndex: 4 },
                { image: '/images/imagesDisplay/Bluetooth Anti Loss Device/image copy 5.png', model: 'FD-03 Bluetooth anti-loss device', detailIndex: 5 },
                { image: '/images/imagesDisplay/Bluetooth Anti Loss Device/image copy 6.png', model: 'Y03 Bluetooth anti-loss device', detailIndex: 6 },
                { image: '/images/imagesDisplay/Bluetooth Anti Loss Device/image copy 7.png', model: 'Y10 Bluetooth anti-loss device', detailIndex: 7 },
                { image: '/images/imagesDisplay/Bluetooth Anti Loss Device/image copy 8.png', model: 'Y01 Bluetooth anti-loss device', detailIndex: 8 }
              ]
            },
            'apple-locator': {
              title: 'Apple Locator',
              displayProducts: [
                { image: '/images/imagesDisplay/Apple Locator/image.png', model: 'Y12 Apple Locator', detailIndex: 0 },
                { image: '/images/imagesDisplay/Apple Locator/image copy.png', model: 'Y14 Apple Locator', detailIndex: 1 },
                { image: '/images/imagesDisplay/Apple Locator/image copy 2.png', model: 'Y17 Apple Locator', detailIndex: 2 },
                { image: '/images/imagesDisplay/Apple Locator/image copy 3.png', model: 'Y21 Apple Locator', detailIndex: 3 },
                { image: '/images/imagesDisplay/Apple Locator/image copy 4.png', model: 'Y27 Apple Locator', detailIndex: 4 },
                { image: '/images/imagesDisplay/Apple Locator/image copy 5.png', model: 'C Tag Apple Locator', detailIndex: 5 },
                { image: '/images/imagesDisplay/Apple Locator/image copy 6.png', model: 'Y18 Apple Locator', detailIndex: 6 },
                { image: '/images/imagesDisplay/Apple Locator/image copy 7.png', model: 'Y19 Apple Locator', detailIndex: 7 },
                { image: '/images/imagesDisplay/Apple Locator/image copy 8.png', model: 'Y25 Apple Locator', detailIndex: 8 },
                { image: '/images/imagesDisplay/Apple Locator/image copy 9.png', model: 'Y20 Apple Locator', detailIndex: 9 },
                { image: '/images/imagesDisplay/Apple Locator/image copy 10.png', model: 'Y23 Apple Locator', detailIndex: 10 }
              ]
            },
            'google-locator': {
              title: 'Google Locator',
              displayProducts: [
                { image: '/images/imagesDisplay/Google Locator/image.png', model: 'X Tag Google Tracker', detailIndex: 0 }
              ]
            }
          }
        },
        'pet-essentials': {
          title: 'Pet Essentials',
          subcategories: {
            'pet-grooming': {
              title: 'Pet Grooming',
              displayProducts: [
                { image: '/images/imagesDisplay/Pet Grooming/image.png', model: 'ACE003 Pet nail grinder', detailIndex: 0 },
                { image: '/images/imagesDisplay/Pet Grooming/image copy.png', model: 'ACE032 Pet electric shaver', detailIndex: 1 },
                { image: '/images/imagesDisplay/Pet Grooming/image copy 2.png', model: 'ACE107 Pet electric shaver', detailIndex: 2 },
                { image: '/images/imagesDisplay/Pet Grooming/image copy 3.png', model: 'ACE109 Pet hair clipper', detailIndex: 3 },
                { image: '/images/imagesDisplay/Pet Grooming/image copy 4.png', model: 'ACE161 Pet toe crease hair clipper', detailIndex: 4 },
                { image: '/images/imagesDisplay/Pet Grooming/image copy 5.png', model: 'ACE162 Pet four-in-one electric shaver', detailIndex: 5 },
                { image: '/images/imagesDisplay/Pet Grooming/image copy 6.png', model: 'ACE166 Electric digital display pet hair clipper grooming set(four-in-one package)', detailIndex: 6 },
                { image: '/images/imagesDisplay/Pet Grooming/image copy 7.png', model: 'ACE167 Electric digital display pet hair clipper grooming set(four-in-one package)', detailIndex: 7 },
                { image: '/images/imagesDisplay/Pet Grooming/image copy 8.png', model: 'ACE177 Pet hair clipper', detailIndex: 8 }
              ]
            },
            'pet-leash': {
              title: 'Pet Leash',
              displayProducts: [
                // First page - 10 items, last 3 with model names
                { image: '/images/imagesDisplay/Pet Leash First/image.png', model: '', detailIndex: 0 },
                { image: '/images/imagesDisplay/Pet Leash First/image copy.png', model: '', detailIndex: 1 },
                { image: '/images/imagesDisplay/Pet Leash First/image copy 2.png', model: '', detailIndex: 2 },
                { image: '/images/imagesDisplay/Pet Leash First/image copy 3.png', model: '', detailIndex: 3 },
                { image: '/images/imagesDisplay/Pet Leash First/image copy 4.png', model: '', detailIndex: 4 },
                { image: '/images/imagesDisplay/Pet Leash First/image copy 5.png', model: '', detailIndex: 5 },
                { image: '/images/imagesDisplay/Pet Leash First/image copy 6.png', model: '', detailIndex: 6 },
                { image: '/images/imagesDisplay/Pet Leash First/image copy 7.png', model: '', detailIndex: 7 },
                { image: '/images/imagesDisplay/Pet Leash First/image copy 8.png', model: '', detailIndex: 8 },
                { image: '/images/imagesDisplay/Pet Leash First/image copy 9.png', model: '', detailIndex: 9 },
                // Second page - 2 items without model names
                { image: '/images/imagesDisplay/Pet Leash Second/image.png', model: '', detailIndex: 10 }
               // { image: '/images/imagesDisplay/Pet Leash Second/image copy.png', model: '', detailIndex: 11 }
              ]
            },
            'pet-collar': {
              title: 'Pet Collar',
              displayProducts: [
                // First page - 3 items
                { image: '/images/imagesDisplay/Pet Collar First/image.png', model: 'ACE-12002 PU Positioning collar', detailIndex: 0 },
                { image: '/images/imagesDisplay/Pet Collar First/image copy.png', model: 'ACE-12003 Printed material collar', detailIndex: 1 },
                { image: '/images/imagesDisplay/Pet Collar First/image copy 2.png', model: 'ACE-12010 Widened tactical collar', detailIndex: 2 },
                // Second page - 1 item (index 3)
                { image: '/images/imagesDisplay/Pet Collar Second/image.png', model: '', detailIndex: 3 },
                // Third page - 1 item (index 4)
                { image: '/images/imagesDisplay/Pet Collar Third/image.png', model: '', detailIndex: 4 }
              ]
            },
            'pet-harness': {
              title: 'Pet Harness',
              displayProducts: [
                // First page - 3 items
                { image: '/images/imagesDisplay/Pet Harness First/image.png', model: 'ACE-13002 Mesh Nylon Dog Harnesses', detailIndex: 0 },
                { image: '/images/imagesDisplay/Pet Harness First/image copy.png', model: 'ACE-13003 Saddle dog harness', detailIndex: 1 },
                { image: '/images/imagesDisplay/Pet Harness First/image copy 2.png', model: 'ACE-13012 Dog Lifting Harness', detailIndex: 2 },
                // Second page - 2 items
                { image: '/images/imagesDisplay/Pet Harness Second/image.png', model: '', detailIndex: 3 }
                //{ image: '/images/imagesDisplay/Pet Harness Second/image copy.png', model: '', detailIndex: 4 }
              ]
            },
            'pet-bed': {
              title: 'Pet Bed',
              displayProducts: [
                // First page - 2 items
                { image: '/images/imagesDisplay/Pet Bed First/image.png', model: 'ACE-23003 Solid Wood Cat Hammock', detailIndex: 0 },
                { image: '/images/imagesDisplay/Pet Bed First/image copy.png', model: 'ACE-14004 Memory Foam Dog Bed', detailIndex: 1 },
                // Second page - 2 items
                { image: '/images/imagesDisplay/Pet Bed Second/image.png', model: '', detailIndex: 2 }
                //{ image: '/images/imagesDisplay/Pet Bed Second/image copy.png', model: '', detailIndex: 3 }
              ]
            },
            'pet-backpack': {
              title: 'Pet Backpack',
              displayProducts: [
                // First page - 3 items
                { image: '/images/imagesDisplay/Pet Backpack First/image.png', model: 'ACE-22005 Pet travel folding backpack', detailIndex: 0 },
                { image: '/images/imagesDisplay/Pet Backpack First/image copy.png', model: 'ACE-22006 Pet portable outing bag', detailIndex: 1 },
                { image: '/images/imagesDisplay/Pet Backpack First/image copy 2.png', model: 'ACE-22007 Pet Moving Bags', detailIndex: 2 },
                // Second page - 2 items
                { image: '/images/imagesDisplay/Pet Backpack Second/image.png', model: '', detailIndex: 3 }
                //{ image: '/images/imagesDisplay/Pet Backpack Second/image copy.png', model: '', detailIndex: 4 }
              ]
            },
            'pet-car-mat': {
              title: 'Pet Car Mat',
              displayProducts: [
                // First page - 1 item
                { image: '/images/imagesDisplay/Pet Car Mat/image.png', model: 'ACE-14007 Car rear pet mat', detailIndex: 0 },
                // Second page - 2 items
                { image: '/images/imagesDisplay/Pet Car Mat Second/image.png', model: '', detailIndex: 1 }
                //{ image: '/images/imagesDisplay/Pet Car Mat/image copy 2.png', model: '', detailIndex: 2 }
              ]
            },
            'pet-toy': {
              title: 'Pet Toy',
              displayProducts: [
                { image: '/images/imagesDisplay/Pet Toy/image.png', model: '', detailIndex: 0 },
                { image: '/images/imagesDisplay/Pet Toy/image copy.png', model: '', detailIndex: 1 }
              ]
            }
          }
        }
      }
    }
  },
  computed: {
    totalDisplayProducts() {
      return this.subcategoryInfo?.displayProducts?.length || 0
    },
    itemsPerPage() {
      const subcategory = this.$route.params.subcategory
      
      // Pet Leash: 10 on first page, 2 on second
      if (subcategory === 'pet-leash') {
        return this.currentPage === 1 ? 10 : 2
      }
      
      // Pet Collar: 3 on first page, 1 on second, 1 on third
      if (subcategory === 'pet-collar') {
        if (this.currentPage === 1) return 3
        return 1
      }
      
      // Pet Harness: 3 on first page, 2 on second
      if (subcategory === 'pet-harness') {
        return this.currentPage === 1 ? 3 : 2
      }
      
      // Pet Bed: 2 per page
      if (subcategory === 'pet-bed') {
        return 2
      }
      
      // Pet Backpack: 3 on first page, 2 on second
      if (subcategory === 'pet-backpack') {
        return this.currentPage === 1 ? 3 : 2
      }
      
      // Pet Car Mat: 1 on first page, 2 on second
      if (subcategory === 'pet-car-mat') {
        return this.currentPage === 1 ? 1 : 2
      }
      
      // Pet Toy: 2 items on one page
      if (subcategory === 'pet-toy') {
        return 2
      }
      
      // Default: show all on one page for other products
      return this.totalDisplayProducts
    },
    totalPages() {
      const subcategory = this.$route.params.subcategory
      const total = this.totalDisplayProducts
      
      // Pet Leash: 2 pages (10 + 2)
      if (subcategory === 'pet-leash') {
        return 2
      }
      
      // Pet Collar: 3 pages (3 + 1 + 1)
      if (subcategory === 'pet-collar') {
        return 3
      }
      
      // Pet Harness: 2 pages (3 + 2)
      if (subcategory === 'pet-harness') {
        return 2
      }
      
      // Pet Bed: 2 pages (2 + 2)
      if (subcategory === 'pet-bed') {
        return 2
      }
      
      // Pet Backpack: 2 pages (3 + 2)
      if (subcategory === 'pet-backpack') {
        return 2
      }
      
      // Pet Car Mat: 2 pages (1 + 2)
      if (subcategory === 'pet-car-mat') {
        return 2
      }
      
      // Others: 1 page
      return 1
    },
    paginatedProducts() {
      const subcategory = this.$route.params.subcategory
      const products = this.subcategoryInfo?.displayProducts || []
      
      // Pet Leash pagination
      if (subcategory === 'pet-leash') {
        if (this.currentPage === 1) {
          return products.slice(0, 10)
        } else {
          return products.slice(10, 12)
        }
      }
      
      // Pet Collar pagination
      if (subcategory === 'pet-collar') {
        if (this.currentPage === 1) {
          return products.slice(0, 3)
        } else if (this.currentPage === 2) {
          return products.slice(3, 4)
        } else {
          return products.slice(4, 5)
        }
      }
      
      // Pet Harness pagination
      if (subcategory === 'pet-harness') {
        if (this.currentPage === 1) {
          return products.slice(0, 3)
        } else {
          return products.slice(3, 5)
        }
      }
      
      // Pet Bed pagination
      if (subcategory === 'pet-bed') {
        if (this.currentPage === 1) {
          return products.slice(0, 2)
        } else {
          return products.slice(2, 4)
        }
      }
      
      // Pet Backpack pagination
      if (subcategory === 'pet-backpack') {
        if (this.currentPage === 1) {
          return products.slice(0, 3)
        } else {
          return products.slice(3, 5)
        }
      }
      
      // Pet Car Mat pagination
      if (subcategory === 'pet-car-mat') {
        if (this.currentPage === 1) {
          return products.slice(0, 1)
        } else {
          return products.slice(1, 3)
        }
      }
      
      // Default: show all
      return products
    },
    displayPages() {
      const pages = []
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i)
      }
      return pages
    }
  },
  mounted() {
    this.loadSubcategory()
  },
  watch: {
    '$route.params'() {
      this.currentPage = 1
      this.loadSubcategory()
    }
  },
  methods: {
    loadSubcategory() {
      const category = this.$route.params.category
      const subcategory = this.$route.params.subcategory
      
      if (this.productData[category]) {
        this.categoryTitle = this.productData[category].title
        if (this.productData[category].subcategories[subcategory]) {
          this.subcategoryInfo = this.productData[category].subcategories[subcategory]
        }
      }
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    goToDetail(detailIndex) {
      this.$router.push(`/products/${this.$route.params.category}/${this.$route.params.subcategory}/detail/${detailIndex}`)
    },
    getContainerClass() {
      const subcategory = this.$route.params.subcategory
      
      // Use vertical layout for second page and beyond
      if ((subcategory === 'pet-leash' && this.currentPage === 2) || 
          (subcategory === 'pet-collar' && this.currentPage > 1) ||
          (subcategory === 'pet-harness' && this.currentPage === 2) ||
          (subcategory === 'pet-bed' && this.currentPage === 2) ||
          (subcategory === 'pet-backpack' && this.currentPage === 2) ||
          (subcategory === 'pet-car-mat' && this.currentPage === 2) ||
          subcategory === 'pet-toy') {
        return 'display-grid-vertical'
      }
      
      return 'display-grid-container'
    },
    getItemClass() {
      const subcategory = this.$route.params.subcategory
      
      // Use large item class for second page and beyond
      if ((subcategory === 'pet-leash' && this.currentPage === 2) || 
          (subcategory === 'pet-collar' && this.currentPage > 1) ||
          (subcategory === 'pet-harness' && this.currentPage === 2) ||
          (subcategory === 'pet-bed' && this.currentPage === 2) ||
          (subcategory === 'pet-backpack' && this.currentPage === 2) ||
          (subcategory === 'pet-car-mat' && this.currentPage === 2) ||
          (subcategory === 'pet-backpack' && this.currentPage === 2) ||
          subcategory === 'pet-toy') {
        return 'display-vertical-item'
      }
      
      return 'display-grid-item'
    },
    getImageWrapperClass() {
      const subcategory = this.$route.params.subcategory
      
      // Use large image wrapper for second page and beyond
      if ((subcategory === 'pet-leash' && this.currentPage === 2) || 
          (subcategory === 'pet-collar' && this.currentPage > 1) ||
          (subcategory === 'pet-harness' && this.currentPage === 2) ||
          (subcategory === 'pet-bed' && this.currentPage === 2) ||
          (subcategory === 'pet-backpack' && this.currentPage === 2) ||
          (subcategory === 'pet-car-mat' && this.currentPage === 2) ||
          subcategory === 'pet-toy') {
        return 'display-image-wrapper-large'
      }
      
      return 'display-image-wrapper'
    },
    shouldDisableClick() {
      const subcategory = this.$route.params.subcategory
      
      // Disable click for second page and beyond, and pet-toy
      if ((subcategory === 'pet-leash' && this.currentPage === 2) || 
          (subcategory === 'pet-collar' && this.currentPage > 1) ||
          (subcategory === 'pet-harness' && this.currentPage === 2) ||
          (subcategory === 'pet-bed' && this.currentPage === 2) ||
          (subcategory === 'pet-backpack' && this.currentPage === 2) ||
          (subcategory === 'pet-car-mat' && this.currentPage === 2) ||
          subcategory === 'pet-toy') {
        return true
      }
      
      return false
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

.product-count {
  text-align: center;
  margin-bottom: 40px;
  font-size: 18px;
  color: #666;
  font-weight: 500;
}

/* CSS Grid Layout - Responsive */
.display-grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 50px;
  max-width: 100%;
}

.display-grid-item {
  width: 100%;
  height: auto;
}

/* Vertical Layout for Second Page - Large Size */
.display-grid-vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  margin-bottom: 50px;
  margin-top: -70px;
}

.display-vertical-item {
  width: 700px;
  height: auto;
}

.display-vertical-item.second-image {
  margin-top: -200px;
}

.display-grid {
  margin-bottom: 50px;
  margin-left: -5px;
  margin-right: -5px;
}

.display-item {
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.display-item.no-click {
  cursor: default;
}

.display-item.no-click:hover .display-image-wrapper,
.display-item.no-click:hover .display-image-wrapper-large {
  transform: none;
  box-shadow: none;
}

.display-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  transition: all 0.3s;
  overflow: hidden;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

/* Large Image Wrapper for Second Page - 700x700 Size */
.display-image-wrapper-large {
  position: relative;
  width: 700px;
  height: 700px;
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  transition: all 0.3s;
  overflow: hidden;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.display-item:hover .display-image-wrapper,
.display-item:hover .display-image-wrapper-large {
  transform: translateY(-5px);
  box-shadow: none;
}

.display-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  object-position: left center;
}

.product-model {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 5px;
  min-height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Pagination */
.pagination-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 30px;
}

.pagination {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 8px;
}

.pagination li {
  display: inline-block;
}

.pagination li a {
  display: block;
  padding: 12px 18px;
  background: #fff;
  border: 2px solid #ddd;
  color: #333;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s;
  font-weight: 500;
  font-size: 16px;
}

.pagination li a:hover {
  background: var(--primary-color);
  color: #333;
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 102, 204, 0.3);
}

.pagination li.active a {
  background: var(--primary-color);
  color: #333;
  border-color: var(--primary-color);
  box-shadow: 0 4px 8px rgba(0, 102, 204, 0.3);
}

.pagination li.disabled a {
  color: #ccc;
  cursor: not-allowed;
  pointer-events: none;
  background: #f8f9fa;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 32px;
  }
  
  .display-grid-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  .display-item {
    margin-bottom: 20px;
  }
  
  .pagination li a {
    padding: 10px 14px;
    font-size: 14px;
  }
  
  .pagination {
    gap: 5px;
  }
  
  .product-model {
    font-size: 12px;
    min-height: 40px;
  }
}

@media (max-width: 480px) {
  .display-grid-container {
    grid-template-columns: 1fr;
  }
  
  .pagination li a {
    padding: 8px 12px;
    font-size: 13px;
  }
}
</style>
