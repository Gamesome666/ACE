<template>
  <div class="banner-wrapper">
    <div id="home" class="flash">
      <div class="banner-slider">
        <div 
          v-for="(image, index) in banners" 
          :key="index"
          class="banner-slide"
          :class="{ active: currentSlide === index }"
        >
          <img :src="image" :alt="`Banner ${index + 1}`">
        </div>
      </div>
      <div class="banner-controls">
        <button 
          v-for="(_, index) in banners" 
          :key="index"
          @click="goToSlide(index)"
          :class="{ active: currentSlide === index }"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      currentSlide: 0,
      banners: [
        './public/images/banner/image.png',
        '/public/images/banner/image copy.png',
        '/public/images/banner/image copy 2.png',
        '/public/images/banner/image copy 3.png',
        '/public/images/banner/image copy 4.png',
        '/public/images/banner/image copy 5.png',
        '/public/images/banner/image copy 6.png'
      ],
      timer: null
    }
  },
  mounted() {
    this.startAutoPlay()
  },
  beforeUnmount() {
    this.stopAutoPlay()
  },
  methods: {
    goToSlide(index) {
      this.currentSlide = index
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.banners.length
    },
    startAutoPlay() {
      this.timer = setInterval(() => {
        this.nextSlide()
      }, 5000)
    },
    stopAutoPlay() {
      if (this.timer) {
        clearInterval(this.timer)
      }
    }
  }
}
</script>

<style scoped>
.banner-wrapper {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background-color: #f8f9fa;
}

.flash {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 350px;
  z-index: 1;
  border-radius: 8px;
}

.banner-slider {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.banner-slide {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  z-index: 1;
}

.banner-slide.active {
  opacity: 1;
  z-index: 2;
}

.banner-slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  background-color: #fff;
}

.banner-controls {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.banner-controls button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #fff;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
}

.banner-controls button.active {
  background: #fff;
}

@media (max-width: 768px) {
  .banner-wrapper {
    padding: 15px 0;
  }

  .flash {
    width: 95%;
    height: 200px;
  }
}
</style>
