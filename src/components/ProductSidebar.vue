<template>
  <div class="sidebar">
    <div class="sidebar-section">
      <h3 class="sidebar-title">PRODUCTS</h3>
      <ul class="sidebar-menu">
        <li v-for="(category, catKey) in categories" :key="catKey" class="dropdown-item">
          <a href="#" class="dropdown-toggle" @click.prevent="toggleCategory(catKey)">
            {{ category.title }}
            <span class="caret" :class="{ expanded: expandedCategories[catKey] }"></span>
          </a>
          <ul v-if="expandedCategories[catKey]" class="submenu">
            <li v-for="(subcategory, subKey) in category.subcategories" :key="subKey">
              <router-link 
                :to="`/products/${catKey}/${subKey}`"
                @click="closeMenu"
              >
                {{ subcategory.title }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="sidebar-section">
      <h3 class="sidebar-title">Contact Info</h3>
      <div class="contact-info">
        <p>
          <i class="fa fa-phone"></i>
          <a href="tel:+85267113894">+852 6711 3894</a>
        </p>
        <p>
          <i class="fa fa-whatsapp"></i>
          <a href="https://wa.me/85264978684">+852 6497 8684</a>
        </p>
        <p>
          <i class="fa fa-envelope"></i>
          <a href="mailto:info@ace-hkltd.com">info@ace-hkltd.com</a>
        </p>
        <p>
          <i class="fa fa-globe"></i>
          <a href="http://www.ace-hkltd.com" target="_blank">www.ace-hkltd.com</a>
        </p>
        <p>
          <i class="fa fa-map-marker"></i>
          <span>Room 304C, Join-in Hang Sang Centre, Kwai Chung, Hong Kong</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductSidebar',
  data() {
    return {
      expandedCategories: {},
      categories: {
        'smart-feeding': {
          title: 'Smart Feeding',
          subcategories: {
            'smart-pet-feeder': { title: 'Smart Pet Feeder' },
            'smart-water-dispenser': { title: 'Smart Water Dispenser' }
          }
        },
        'anti-loss-device': {
          title: 'Anti-Loss Device',
          subcategories: {
            'bluetooth-anti-loss': { title: 'Bluetooth Anti Loss Device' },
            'apple-locator': { title: 'Apple Locator' },
            'google-locator': { title: 'Google Locator' }
          }
        },
        'pet-essentials': {
          title: 'Pet Supplies',
          subcategories: {
            'pet-grooming': { title: 'Pet Grooming' },
            'pet-leash': { title: 'Pet Leash' },
            'pet-collar': { title: 'Pet Collar' },
            'pet-harness': { title: 'Pet Harness' },
            'pet-bed': { title: 'Pet Bed' },
            'pet-backpack': { title: 'Pet Backpack' },
            'pet-car-mat': { title: 'Pet Car Mat' },
            'pet-toy': { title: 'Pet Toy' }
          }
        }
      }
    }
  },
  mounted() {
    this.initializeExpandedState()
  },
  watch: {
    '$route.params': {
      handler() {
        this.initializeExpandedState()
      },
      deep: true
    }
  },
  methods: {
    toggleCategory(catKey) {
      this.expandedCategories[catKey] = !this.expandedCategories[catKey]
    },
    closeMenu() {
      // 关闭所有分类
      Object.keys(this.expandedCategories).forEach(key => {
        this.expandedCategories[key] = false
      })
    },
    initializeExpandedState() {
      const currentCategory = this.$route.params.category
      if (currentCategory) {
        this.expandedCategories[currentCategory] = true
      }
    }
  }
}
</script>

<style scoped>
.sidebar {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 0;
  margin-bottom: 30px;
  margin-left: -200px;
  max-width: calc(100% );
}

.sidebar-section {
  padding: 25px;
  border-bottom: 1px solid #e0e0e0;
}

.sidebar-section:last-child {
  border-bottom: none;
}

.sidebar-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 0 0 20px 0;
  padding: 10px 15px;
  background: #333;
  color: #fff;
  margin: -25px -25px 20px -25px;
  padding: 12px 25px;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-menu li {
  margin-bottom: 0;
}

.dropdown-item {
  position: relative;
}

.dropdown-toggle {
  display: block;
  padding: 10px 15px;
  color: #333;
  text-decoration: none;
  border-left: 3px solid transparent;
  transition: all 0.3s;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
}

.dropdown-toggle:hover {
  color: var(--primary-color);
  border-left-color: var(--primary-color);
  background: #fff;
  padding-left: 20px;
}

.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 8px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  transition: transform 0.3s;
}

.caret.expanded {
  transform: rotate(180deg);
}

.submenu {
  list-style: none;
  padding: 0;
  margin: 0;
  background: #fff;
  border-left: 3px solid var(--primary-color);
}

.submenu li {
  margin: 0;
}

.submenu a {
  display: block;
  padding: 8px 15px 8px 25px;
  color: #666;
  text-decoration: none;
  transition: all 0.3s;
  font-size: 13px;
  border-left: 3px solid transparent;
}

.submenu a:hover,
.submenu a.router-link-active {
  color: var(--primary-color);
  border-left-color: var(--primary-color);
  background: #f0f7ff;
  padding-left: 30px;
}

.contact-info {
  margin: 0;
}

.contact-info p {
  margin: 0 0 15px 0;
  font-size: 14px;
  color: #666;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.contact-info p:last-child {
  margin-bottom: 0;
}

.contact-info i {
  color: var(--primary-color);
  min-width: 20px;
  margin-top: 2px;
}

.contact-info a {
  color: #333;
  text-decoration: none;
  transition: all 0.3s;
}

.contact-info a:hover {
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .sidebar {
    margin-bottom: 20px;
  }

  .sidebar-section {
    padding: 20px;
  }

  .sidebar-title {
    font-size: 14px;
    margin: -20px -20px 15px -20px;
    padding: 10px 20px;
  }

  .dropdown-toggle {
    font-size: 13px;
    padding: 8px 12px;
  }

  .submenu a {
    font-size: 12px;
    padding: 6px 12px 6px 22px;
  }

  .contact-info p {
    font-size: 13px;
    margin-bottom: 12px;
  }
}
</style>
