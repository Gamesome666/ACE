<template>
  <div class="product-category-page" v-if="categoryInfo">
    <div class="page-header">
      <div class="container">
        <h1>{{ categoryInfo.title }}</h1>
      </div>
    </div>

    <div class="container" style="padding: 50px 0 50px 15px;">
      <div class="row">
        <div class="col-xs-12 col-md-3">
          <ProductSidebar />
        </div>

        <div class="col-xs-12 col-md-9">
          <div class="row">
            <div 
              v-for="subcategory in categoryInfo.subcategories" 
              :key="subcategory.id"
              class="col-xs-12 col-sm-6 col-md-6"
            >
              <router-link :to="`/products/${$route.params.category}/${subcategory.id}`" class="subcategory-card">
                <div class="subcategory-icon">
                  <i :class="subcategory.icon"></i>
                </div>
                <h3>{{ subcategory.name }}</h3>
                <p>{{ subcategory.description }}</p>
                <div class="view-products-btn">
                  View Products <i class="fa fa-arrow-right"></i>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSidebar from '../components/ProductSidebar.vue'

export default {
  name: 'ProductCategory',
  components: {
    ProductSidebar
  },
  data() {
    return {
      categories: {
        'smart-feeding': {
          title: 'Smart Feeding',
          subcategories: [
            {
              id: 'smart-pet-feeder',
              name: 'Smart Pet Feeder',
              description: 'Intelligent feeding solutions with remote control and monitoring',
              icon: 'fa fa-cutlery'
            },
            {
              id: 'smart-water-dispenser',
              name: 'Smart Water Dispenser',
              description: 'Automated water dispensing systems for pets',
              icon: 'fa fa-tint'
            }
          ]
        },
        'anti-loss-device': {
          title: 'Anti-Loss Device',
          subcategories: [
            {
              id: 'bluetooth-anti-loss',
              name: 'Bluetooth Anti Loss Device',
              description: 'Bluetooth-based tracking devices',
              icon: 'fa fa-bluetooth'
            },
            {
              id: 'apple-locator',
              name: 'Apple Locator',
              description: 'Apple AirTag compatible locators',
              icon: 'fa fa-apple'
            },
            {
              id: 'google-locator',
              name: 'Google Locator',
              description: 'Google Find My Device compatible',
              icon: 'fa fa-google'
            }
          ]
        },
        'pet-essentials': {
          title: 'Pet Essentials',
          subcategories: [
            {
              id: 'pet-grooming',
              name: 'Pet Grooming',
              description: 'Professional grooming tools and accessories',
              icon: 'fa fa-scissors'
            },
            {
              id: 'pet-leash',
              name: 'Pet Leash',
              description: 'Durable and comfortable pet leashes',
              icon: 'fa fa-link'
            },
            {
              id: 'pet-collar',
              name: 'Pet Collar',
              description: 'Stylish and safe pet collars',
              icon: 'fa fa-circle-o'
            },
            {
              id: 'pet-harness',
              name: 'Pet Harness',
              description: 'Comfortable and secure harnesses',
              icon: 'fa fa-shield'
            },
            {
              id: 'pet-bed',
              name: 'Pet Bed',
              description: 'Cozy and comfortable pet beds',
              icon: 'fa fa-bed'
            },
            {
              id: 'pet-backpack',
              name: 'Pet Backpack',
              description: 'Portable pet carriers and backpacks',
              icon: 'fa fa-shopping-bag'
            },
            {
              id: 'pet-car-mat',
              name: 'Pet Car Mat',
              description: 'Protective car mats for pets',
              icon: 'fa fa-car'
            },
            {
              id: 'pet-toy',
              name: 'Pet Toy',
              description: 'Fun and engaging pet toys',
              icon: 'fa fa-gamepad'
            }
          ]
        }
      },
      categoryInfo: null
    }
  },
  mounted() {
    this.loadCategory()
  },
  watch: {
    '$route.params.category'() {
      this.loadCategory()
    }
  },
  methods: {
    loadCategory() {
      const category = this.$route.params.category
      this.categoryInfo = this.categories[category] || null
    }
  }
}
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-hover) 100%);
  color: #fff;
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
  display: none;
}

.breadcrumb a {
  color: #fff;
  text-decoration: underline;
}

.breadcrumb a:hover {
  color: #f0f0f0;
}

.subcategory-card {
  display: block;
  background: #fff;
  border-radius: 10px;
  padding: 40px 30px;
  margin-bottom: 30px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: all 0.3s;
  text-decoration: none;
  color: inherit;
}

.subcategory-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  text-decoration: none;
}

.subcategory-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-hover) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.subcategory-icon i {
  font-size: 40px;
  color: #fff;
}

.subcategory-card h3 {
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 15px;
}

.subcategory-card p {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.view-products-btn {
  color: var(--primary-color);
  font-weight: bold;
  font-size: 16px;
}

.view-products-btn i {
  margin-left: 5px;
  transition: margin-left 0.3s;
}

.subcategory-card:hover .view-products-btn i {
  margin-left: 10px;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 32px;
  }
}
</style>
