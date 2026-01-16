<template>
  <header>
    <div class="top_menu">
      <div class="container">
        <span class="top_name">
          <p class="left_h1">
            <a href="mailto:info@ace-hkltd.com">
              <i class="fa fa-envelope"></i> Email: info@ace-hkltd.com
            </a>
            <span><i class="fa fa-phone"></i> Tel: +852 6711 3894</span>
          </p>
        </span>
      </div>
    </div>
    
    <nav id="top_nav" class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" @click="toggleMenu">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="logo-container">
            <a href="#"><img src="/logo.png" class="logo" alt="ACE Electrical Limited"></a>
          </div>
        </div>
        <div id="navbar" class="navbar-collapse" :class="{ collapse: !menuOpen }">
          <ul class="nav navbar-nav navbar-nav-e">
            <li><router-link to="/" @click="closeMenu">Home</router-link></li>
            <li><router-link to="/about" @click="closeMenu">About Us</router-link></li>
            <li><router-link to="/culture" @click="closeMenu">Corporate Culture</router-link></li>
            <li class="dropdown mega-dropdown">
              <a href="#" class="dropdown-toggle">
                Products <span class="caret"></span>
              </a>
              <ul class="dropdown-menu mega-menu">
                <!-- Smart Feeding -->
                <li class="dropdown-submenu">
                  <a href="#" class="submenu-title" @click.prevent>
                    Smart Feeding
                    <i class="fa fa-angle-right"></i>
                  </a>
                  <ul class="dropdown-menu submenu">
                    <li>
                      <router-link to="/products/smart-feeding/smart-pet-feeder" @click="closeMenu">
                        Smart Pet Feeder
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/products/smart-feeding/smart-water-dispenser" @click="closeMenu">
                        Smart Water Dispenser
                      </router-link>
                    </li>
                  </ul>
                </li>

                <!-- Anti-Loss Device -->
                <li class="dropdown-submenu">
                  <a href="#" class="submenu-title" @click.prevent>
                    Anti-Loss Device
                    <i class="fa fa-angle-right"></i>
                  </a>
                  <ul class="dropdown-menu submenu">
                    <li>
                      <router-link to="/products/anti-loss-device/bluetooth-anti-loss" @click="closeMenu">
                        Bluetooth Anti Loss Device
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/products/anti-loss-device/apple-locator" @click="closeMenu">
                        Apple Locator
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/products/anti-loss-device/google-locator" @click="closeMenu">
                        Google Locator
                      </router-link>
                    </li>
                  </ul>
                </li>

                <!-- Pet Supplies -->
                <li class="dropdown-submenu">
                  <a href="#" class="submenu-title" @click.prevent>
                    Pet Supplies
                    <i class="fa fa-angle-right"></i>
                  </a>
                  <ul class="dropdown-menu submenu">
                    <li>
                      <router-link to="/products/pet-essentials/pet-grooming" @click="closeMenu">
                        Pet Grooming
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/products/pet-essentials/pet-leash" @click="closeMenu">
                        Pet Leash
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/products/pet-essentials/pet-collar" @click="closeMenu">
                        Pet Collar
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/products/pet-essentials/pet-harness" @click="closeMenu">
                        Pet Harness
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/products/pet-essentials/pet-bed" @click="closeMenu">
                        Pet Bed
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/products/pet-essentials/pet-backpack" @click="closeMenu">
                        Pet Backpack
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/products/pet-essentials/pet-car-mat" @click="closeMenu">
                        Pet Car Mat
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/products/pet-essentials/pet-toy" @click="closeMenu">
                        Pet Toy
                      </router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><router-link to="/application-cases" @click="closeMenu">Application Cases</router-link></li>                                                    
            <li><a href="#inquiry" @click="scrollToSection('inquiry')">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menuOpen: false
    }
  },
  mounted() {
    // 为移动端添加子菜单点击展开功能
    if (window.innerWidth <= 768) {
      this.setupMobileMenu()
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    },
    scrollToSection(id) {
      this.menuOpen = false
      // 如果不在首页，先跳转到首页
      if (this.$route.path !== '/') {
        this.$router.push('/').then(() => {
          setTimeout(() => {
            const element = document.getElementById(id)
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }, 100)
        })
      } else {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    },
    setupMobileMenu() {
      // 移动端子菜单展开功能
      this.$nextTick(() => {
        const submenuTitles = document.querySelectorAll('.dropdown-submenu > .submenu-title')
        submenuTitles.forEach(title => {
          title.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
              e.preventDefault()
              const parent = title.parentElement
              parent.classList.toggle('open')
            }
          })
        })
      })
    }
  }
}
</script>
