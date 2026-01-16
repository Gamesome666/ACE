<template>
  <div class="products-preview" style="padding: 60px 0; background-color: #f8f9fa;">
    <div class="container">
      <div class="product_head">
        <h2>Products</h2>
      </div>

      <div class="row" style="margin-top: 40px;">
        <!-- Smart Feeding Products -->
        <div class="col-xs-12 col-sm-6 col-md-4" v-for="(product, index) in products" :key="index">
          <div class="product-card">
            <div class="product-image-wrapper">
              <img :src="product.image" :alt="product.title">
            </div>
            <div class="product-info">
              <h4>{{ product.title }}</h4>
              <router-link :to="product.link" class="btn-view">View Details</router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Products Row 1 -->
      <div class="row" style="margin-top: 40px;">
        <div class="col-xs-12 col-sm-6 col-md-4" v-for="(product, index) in additionalProducts.slice(0, 3)" :key="'add1-' + index">
          <div class="product-card">
            <div class="product-image-wrapper">
              <img :src="product.image" :alt="product.title">
            </div>
            <div class="product-info">
              <h4>{{ product.title }}</h4>
              <router-link :to="product.link" class="btn-view">View Details</router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Products Row 2 -->
      <div class="row" style="margin-top: 40px;">
        <div class="col-xs-12 col-sm-6 col-md-4" v-for="(product, index) in additionalProducts.slice(3, 6)" :key="'add2-' + index">
          <div class="product-card">
            <div class="product-image-wrapper">
              <img :src="product.image" :alt="product.title">
            </div>
            <div class="product-info">
              <h4>{{ product.title }}</h4>
              <router-link :to="product.link" class="btn-view">View Details</router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Inquiry Form -->
      <div id="inquiry" class="inquiry-section" style="margin-top: 60px;">
        <div class="inquiry-header">
          <h3>INQUIRY:</h3>
        </div>
        <div class="inquiry-form">
          <form @submit.prevent="submitInquiry">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Your Name:</label>
                  <input type="text" v-model="form.name" class="form-control" placeholder="Name" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Tel:</label>
                  <input type="tel" v-model="form.phone" class="form-control" placeholder="Phone" required>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>Email:</label>
              <input type="email" v-model="form.email" class="form-control" placeholder="Email" required>
            </div>
            <div class="form-group">
              <label>Content:</label>
              <textarea v-model="form.content" class="form-control" rows="5" placeholder="Your message..." required></textarea>
            </div>
            <div class="form-buttons">
              <button type="submit" class="btn btn-send">Send</button>
              <button type="reset" class="btn btn-reset" @click="resetForm">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsPreview',
  data() {
    return {
      products: [
        {
          title: 'Smart Pet Feeder',
          image: '/images/imagesDisplay/Smart Pet Feeder/image.png',
          link: '/products/smart-feeding/smart-pet-feeder'
        },
        {
          title: 'Smart Water Dispenser',
          image: '/images/imagesDisplay/Smart Water Dispenser/image.png',
          link: '/products/smart-feeding/smart-water-dispenser'
        },
        {
          title: 'Bluetooth Anti Loss Device',
          image: '/images/imagesDisplay/Bluetooth Anti Loss Device/image.png',
          link: '/products/anti-loss-device/bluetooth-anti-loss'
        },
        {
          title: 'Apple Locator',
          image: '/images/imagesDisplay/Apple Locator/image.png',
          link: '/products/anti-loss-device/apple-locator'
        },
        {
          title: 'Pet Grooming',
          image: '/images/imagesDisplay/Pet Grooming/image.png',
          link: '/products/pet-essentials/pet-grooming'
        },
        {
          title: 'Pet Grooming',
          image: '/images/imagesDisplay/Pet Grooming/image copy 5.png',
          link: '/products/pet-essentials/pet-grooming'
        }
      ],
      additionalProducts: [
        {
          title: 'Pet Leash',
          image: '/images/imagesDisplay/Pet Leash First/image copy 7.png',
          link: '/products/pet-essentials/pet-leash'
        },
        {
          title: 'Pet Collar',
          image: '/images/imagesDisplay/Pet Collar First/image copy.png',
          link: '/products/pet-essentials/pet-collar'
        },
        {
          title: 'Pet Harness',
          image: '/images/imagesDisplay/Pet Harness First/image copy.png',
          link: '/products/pet-essentials/pet-harness'
        },
        {
          title: 'Pet Backpack',
          image: '/images/imagesDisplay/Pet Backpack First/image.png',
          link: '/products/pet-essentials/pet-backpack'
        },
        {
          title: 'Pet Car Mat',
          image: '/images/imagesDisplay/Pet Car Mat/image.png',
          link: '/products/pet-essentials/pet-car-mat'
        },
        {
          title: 'Pet Bed',
          image: '/images/imagesDisplay/Pet Bed First/image.png',
          link: '/products/pet-essentials/pet-bed'
        }
      ],
      form: {
        name: '',
        phone: '',
        email: '',
        content: ''
      }
    }
  },
  methods: {
    submitInquiry() {
      alert('Thank you for your inquiry! We will contact you soon.')
      this.resetForm()
    },
    resetForm() {
      this.form = {
        name: '',
        phone: '',
        email: '',
        content: ''
      }
    }
  }
}
</script>

<style scoped>
.product-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: all 0.3s;
  margin-bottom: 30px;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.product-image-wrapper {
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.product-image-wrapper img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-info {
  padding: 20px;
  text-align: center;
}

.product-info h4 {
  font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 15px;
}

.btn-view {
  display: inline-block;
  padding: 10px 30px;
  background-color: var(--primary-color);
  color: #333;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s;
  font-weight: 500;
}

.btn-view:hover {
  background-color: var(--primary-hover);
  transform: scale(1.05);
}

.inquiry-section {
  background: #fff;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.inquiry-header {
  background: #5a5a5a;
  color: #fff;
  padding: 15px 30px;
  margin: -40px -40px 30px -40px;
  border-radius: 10px 10px 0 0;
}

.inquiry-header h3 {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
}

.form-control {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  transition: all 0.3s;
}

.form-control:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 5px rgba(215, 207, 188, 0.3);
}

.form-buttons {
  text-align: center;
  margin-top: 30px;
}

.btn {
  padding: 12px 40px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  margin: 0 10px;
}

.btn-send {
  background: #5a5a5a;
  color: #fff;
}

.btn-send:hover {
  background: #404040;
}

.btn-reset {
  background: #e0e0e0;
  color: #333;
}

.btn-reset:hover {
  background: #d0d0d0;
}

@media (max-width: 768px) {
  .inquiry-section {
    padding: 20px;
  }
  
  .inquiry-header {
    margin: -20px -20px 20px -20px;
    padding: 12px 20px;
  }
}
</style>
