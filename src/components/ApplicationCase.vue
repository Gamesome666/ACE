<template>
  <div id="case" class="application-case" style="padding: 50px 0; background-color: #f8f9fa;">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="product_index">
            <div class="product_head">
              <h2>Application Cases</h2>
              <p style="text-align: center; color: #666; margin-top: 10px;">
                Real-world applications of our smart pet care solutions
              </p>
            </div>
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
    </div>

    <!-- Lightbox -->
    <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
      <span class="lightbox-close">&times;</span>
      <img :src="cases[currentImageIndex].image" class="lightbox-content" @click.stop>
      <a class="lightbox-prev" @click.stop="prevImage">&#10094;</a>
      <a class="lightbox-next" @click.stop="nextImage">&#10095;</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplicationCase',
  data() {
    return {
      lightboxOpen: false,
      currentImageIndex: 0,
      cases: [
        { image: '/applicationCaseImages/image.png' },
        { image: '/applicationCaseImages/image copy 4.png' },
        { image: '/applicationCaseImages/image copy 2.png' },
        { image: '/applicationCaseImages/image copy 3.png' },
        { image: '/applicationCaseImages/image copy.png' },
        { image: '/applicationCaseImages/image copy 5.png' },
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
.case-gallery {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 20px;
  justify-content: center;
}

.case-item {
  margin-bottom: 0;
  cursor: pointer;
  transition: transform 0.3s;
  flex: 0 1 calc(33.333% - 14px);
  max-width: 400px;
}

.case-item:hover {
  transform: translateY(-5px);
}

.case-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 0;
  box-shadow: none;
  border: none;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.case-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s;
  display: block;
  padding: 20px;
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

/* Lightbox */
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
  .case-item {
    flex: 0 1 calc(50% - 10px);
  }
  
  .case-image-wrapper {
    aspect-ratio: 1;
  }
  
  .lightbox-prev,
  .lightbox-next {
    font-size: 30px;
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .case-item {
    flex: 0 1 100%;
  }
}
</style>
