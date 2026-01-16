<template>
  <div class="application-case-page">
    <div class="page-header">
      <div class="container">
        <h1>Application Cases</h1>
      </div>
    </div>

    <div class="container" style="padding: 50px 15px;">
      <div class="row">
        <div class="col-xs-12">
          <p class="page-intro">
            Discover how our smart pet care solutions are being used in real-world scenarios. 
            From home environments to outdoor settings, our products provide reliable and innovative solutions for pet owners worldwide.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-3">
          <ProductSidebar />
        </div>

        <div class="col-xs-12 col-md-9">
          <div class="case-gallery">
            <div 
              v-for="(caseItem, index) in cases" 
              :key="index"
              class="col-xs-12 col-sm-6 col-md-4"
            >
              <div class="case-item" @click="openLightbox(index)">
                <div class="case-image-wrapper">
                  <img :src="caseItem.image" :alt="`Application Case ${index + 1}`" class="case-image">
                  <div class="case-overlay">
                    <i class="fa fa-search-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
      <span class="lightbox-close">&times;</span>
      <img :src="cases[currentImageIndex].image" class="lightbox-content" @click.stop>
      <a class="lightbox-prev" @click.stop="prevImage">&#10094;</a>
      <a class="lightbox-next" @click.stop="nextImage">&#10095;</a>
    </div>
  </div>
</template>

<script>
import ProductSidebar from '../components/ProductSidebar.vue'

export default {
  name: 'ApplicationCasePage',
  components: {
    ProductSidebar
  },
  data() {
    return {
      lightboxOpen: false,
      currentImageIndex: 0,
      cases: [
        { image: '/applicationCaseImages/image.png' },
        { image: '/applicationCaseImages/image copy 4.png' },
        { image: '/applicationCaseImages/image copy 5.png' },
        { image: '/applicationCaseImages/image copy 3.png' },
        { image: '/applicationCaseImages/image copy.png' },
        { image: '/applicationCaseImages/image copy 2.png' },
        { image: '/applicationCaseImages/image copy 6.png' },
        { image: '/applicationCaseImages/image copy 8.png' },
        { image: '/applicationCaseImages/image copy 7.png' }
      ]
    }
  },
  methods: {
    openLightbox(index) {
      this.currentImageIndex = index
      this.lightboxOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeLightbox() {
      this.lightboxOpen = false
      document.body.style.overflow = 'auto'
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.cases.length
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.cases.length) % this.cases.length
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
  display: none;
}

.breadcrumb a {
  color: #333;
  text-decoration: underline;
}

.breadcrumb a:hover {
  color: #555;
}

.page-intro {
  font-size: 18px;
  line-height: 1.8;
  color: #666;
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.case-gallery {
  display: flex;
  flex-wrap: wrap;
}

.case-item {
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform 0.3s;
  padding: 0 10px;
}

.case-item:hover {
  transform: translateY(-5px);
}

.case-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  background: #fff;
  padding: 5px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.case-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s;
  display: block;
}

.case-item:hover .case-image {
  transform: scale(1.05);
}

.case-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(52, 152, 219, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.case-item:hover .case-overlay {
  opacity: 1;
}

.case-overlay i {
  color: #fff;
  font-size: 40px;
}

.lightbox {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  max-width: 90%;
  max-height: 80%;
  object-fit: contain;
  animation: zoom 0.3s;
}

@keyframes zoom {
  from {transform: scale(0)}
  to {transform: scale(1)}
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 40px;
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
  z-index: 10000;
}

.lightbox-close:hover {
  color: #bbb;
}

.lightbox-prev,
.lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  padding: 16px;
  user-select: none;
  background: rgba(0,0,0,0.5);
  border-radius: 5px;
}

.lightbox-prev:hover,
.lightbox-next:hover {
  background: rgba(0,0,0,0.8);
}

.lightbox-prev {
  left: 20px;
}

.lightbox-next {
  right: 20px;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 32px;
  }
  
  .lightbox-prev,
  .lightbox-next {
    font-size: 30px;
    padding: 10px;
  }
}
</style>
