<template>
  <div id="products" class="our_service" style="padding: 30px 0;">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="product_index">
            <div class="product_head">
              <h2>Our Products</h2>
            </div>
            <div class="product_list">
              <div class="col-xs-12 col-md-12">
                <div 
                  v-for="(product, index) in products" 
                  :key="index"
                  class="col-sm-12 col-md-6 col-lg-4"
                >
                  <div class="index-pro">
                    <div class="cl">
                      <a href="#" @click.prevent="showProductDetail(product)">
                        <img :src="product.image" class="product-pic" :alt="product.name">
                      </a>
                    </div>
                    <div class="pro-dec">
                      <p class="product_title">
                        <a href="#" @click.prevent="showProductDetail(product)">{{ product.name }}</a>
                      </p>
                      <p class="product_desc">{{ product.shortDesc }}</p>
                      <div class="pro-btn">
                        <a class="buttons" href="#" @click.prevent="showProductDetail(product)">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Detail Modal -->
    <div v-if="selectedProduct" class="product-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="closeModal">&times;</span>
        <h2>{{ selectedProduct.name }}</h2>
        <img :src="selectedProduct.image" :alt="selectedProduct.name" style="max-width: 100%; margin: 20px 0;">
        <div class="product-features">
          <ul>
            <li v-for="(feature, index) in selectedProduct.features" :key="index">{{ feature }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      selectedProduct: null,
      products: [
        {
          name: 'ACE-Q21 SMART VISUAL PET FEEDER',
          image: '/images/imagesDisplay/Smart Pet Feeder/image.png',
          shortDesc: '3MP Full HD Camera with 2K resolution, 4L/6L customizable capacity, real-time video and voice interaction.',
          features: [
            '3MP FULL HD Camera, 2K resolution',
            'Build in 3.6mm lens 130°wide view',
            'Master Privacy Protection Mode',
            'Customizable feeder with 4L/6L capacity',
            'Recessed design prevents dogs/cats from bumping their heads',
            'Supports connection to power supply/installation of battery',
            'Real-time video and voice interaction with pets',
            'Support APP Remote Feeding',
            'Support Timer Feeding',
            'Supports viewing of feeding records',
            'Support TF-card Storage /cloud storage',
            'Power:DC5V 2A, DC Interface',
            'Working temperature:-20℃~+50℃'
          ]
        },
        {
          name: 'ACE-Q50 PORTABLE PET FEEDER WITH CAMERA',
          image: '/images/imagesDisplay/Smart Pet Feeder/image copy.png',
          shortDesc: '3MP Full HD pixels, 5L large-capacity storage, dual-band WiFi support, easy to remove and washable.',
          features: [
            '3MP FULL HD pixels, 2K pixels resolution',
            'Build in 3.6mm lens 130°wide view',
            'Master Privacy Protection Mode',
            '5L large-capacity cat food and dog food storage',
            'Recessed design prevents dogs/cats',
            '2.4GHz&5GHz WiFi,compatible with multiple routers',
            'Supports connection to power supply/Install battery-powered',
            'Real-time video and voice interaction with pets',
            'Easy to remove and washable',
            'Support APP Remote Feeding',
            'Snap-on design prevents tipping',
            'Designed to suit the habits of cats and dogs',
            'Support Timer Feeding',
            'Supports viewing of feeding records',
            'Support TF-card Storage /cloud storage',
            'Power:DC5V 2A, DC Interface',
            'Working temperature:-20℃~+50℃'
          ]
        },
        {
          name: 'ACE-Q39K SMART BIRD FEEDER',
          image: '/images/imagesDisplay/Smart Pet Feeder/image copy 2.png',
          shortDesc: 'AI recognizes 10,000+ species of birds, 5MP camera, solar charging support, IP65 waterproof.',
          features: [
            'PIR motion sensor with 110°detection angle for accurate bird detection',
            'Build in 4pcs white/IR light, Full color/IR dual light source night vision',
            'Low power consumption, Built-in 4000mA certified battery',
            'Supports insertion of Fruit Fork and Honey jar (Optional)',
            'AI recognizes 10,000+species of birds',
            '5MP FULL HD Camera, 2.5K resolution',
            'App message push after detecting birds',
            'Supports solar charging and power charging',
            'Supports installation of a bird bath or bird perch (Optional)',
            '1.5L Large Capacity Bird Feeder',
            'Support automatically repels squirrels',
            'Support Two-way Audio',
            'Support IP65 waterproof for outdoor use',
            'Support for bird video viewing and sharing',
            'Support TF-card Storage /cloud storage',
            'Power:DC5V 1A,Type-C Interface',
            'Working temperature:-20℃~+50℃'
          ]
        },
        {
          name: 'ACE-Q45A BAMBOO/WOODEN SMART BIRD FEEDER',
          image: '/images/imagesDisplay/Smart Pet Feeder/image copy 3.png',
          shortDesc: 'Customizable bamboo/wood design, AI bird recognition, solar charging, IP65 waterproof.',
          features: [
            'PIR motion sensor with 110°detection angle for accurate bird detection',
            'Build in 4pcs white/IR light, Full color/IR dual light source night vision',
            'Low power consumption,Built-in 4000mA certified battery',
            'AI recognizes 10,000+species of birds',
            'Customizable bamboo/wood',
            '5MP FULL HD Camera,2.5K resolution',
            'App message push after detecting birds',
            'Supports solar charging and power charging',
            'Build in 1.8mm/2.8mm lens',
            '1.5L Large Capacity Bird Feeder',
            'Support automatically repels squirrels',
            'Support Two-way Audio',
            'Support IP65 waterproof for outdoor use',
            'Support for bird video viewing and sharing',
            'Support TF-card Storage/cloud storage',
            'Power:DC5V 1A, Type-C Interface',
            'Working temperature:-20℃~+50℃'
          ]
        },
        {
          name: 'ACE-Q20 SMART BIRD FEEDER',
          image: '/images/imagesDisplay/Smart Pet Feeder/image copy 4.png',
          shortDesc: '2.5L large capacity, AI bird recognition, solar charging, fruit fork and honey jar support.',
          features: [
            'PIR motion sensor with 110°detection angle for accurate bird detection',
            'Build in 4pcs white/IR light, Fullcolor/IR dual light source night vision',
            'Low power consumption,Built-in 4000mA certified battery',
            'Supports insertion of Fruit Fork and Honey jar(Optional)',
            'AI recognizes 10,000+species of birds',
            '5MP FULL HD Camera, 2.5K resolution',
            'App message push after detecting birds',
            'Supports solar charging and power charging',
            'Build in 1.8mm/2.8mm lens',
            '2.5L Large Capacity Bird Feeder',
            'Support automatically repels squirrels',
            'Support Two-way Audio',
            'Support IP65 waterproof for outdoor use',
            'Support for bird video viewing and sharing',
            'Support TF-card Storage /cloud storage',
            'Power:DC5V 1A, Type-C Interface',
            'Working temperature:-20℃~+50℃'
          ]
        },
        {
          name: 'ACE-Q27 SMART BIRD FEEDER',
          image: '/images/imagesDisplay/Smart Pet Feeder/image copy 5.png',
          shortDesc: '2.5L capacity, AI bird species recognition, solar powered, two-way audio communication.',
          features: [
            'PIR motion sensor with 110°detection angle for accurate bird detection',
            'Build in 4pcs white/IR light, Full color/IR dual light source night vision',
            'Low power consumption, Built-in 4000mA certified battery',
            'Supports insertion of Fruit Fork and Honey jar(Optional)',
            'AI recognizes 10,000+species of birds',
            '5MP FULL HD Camera, 2.5K resolution',
            'App message push after detecting birds',
            'Supports solar charging and power charging',
            'Build in 1.8mm/2.8mm lens',
            '2.5L Large Capacity Bird Feeder',
            'Support automatically repels squirrels',
            'Support Two-way Audio',
            'Support IP65 waterproof for outdoor use',
            'Support for bird video viewing and sharing',
            'Support TF-card Storage /cloud storage',
            'Power:DC5V 1A,Type-C Interface',
            'Working temperature:-20℃~+50℃'
          ]
        },
        {
          name: 'ACE-Q31 4G SMART BIRD FEEDER',
          image: '/第一类产品images/q31.png',
          shortDesc: '4G connectivity (US/Europe versions), AI bird recognition, solar charging, IP65 waterproof.',
          features: [
            'US 4G version/Europe 4G version (Optional)',
            'PIR motion sensor with 110°detection angle for accurate bird detection',
            'Build in 4pcs white/IR light, Full color/IR dual light source night vision',
            'Low power consumption, Built-in 4000mA certified battery',
            'Supports insertion of Fruit Fork and Honey jar(Optional)',
            'AI recognizes 10,000+species of birds',
            '5MP FULL HD Camera, 2.5K resolution',
            'App message push after detecting birds',
            'Supports solar charging and power charging',
            'Build in 1.8mm/2.8mm lens',
            '2.5L Large Capacity Bird Feeder',
            'Support automatically repels squirrels',
            'Support Two-way Audio',
            'Support IP65 waterproof for outdoor use',
            'Support for bird video viewing and sharing',
            'Support TF-card Storage /cloud storage',
            'Power:DC5V 1A, Type-C Interface',
            'Working temperature:-20℃~+50℃'
          ]
        },
        {
          name: 'ACE-Q39 SMART BIRD FEEDER',
          image: '/第一类产品images/q39.png',
          shortDesc: '1.5L capacity, AI bird recognition, solar charging, fruit fork and honey jar optional.',
          features: [
            'PIR motion sensor with 110°detection angle for accurate bird detection',
            'Build in 4pcs white/IR light,Full color/IR dual light source night vision',
            'Low power consumption,Built-in 4000mA certified battery',
            'Supports insertion of Fruit Fork and Honey jar(Optional)',
            'AI recognizes 10,000+species of birds',
            '5MP FULL HD Camera,2.5K resolution',
            'App message push after detecting birds',
            'Supports solar charging and power charging',
            'Build in 1.8mm/2.8mm lens',
            '1.5L Large Capacity Bird Feeder',
            'Support automatically repels squirrels',
            'Support Two-way Audio',
            'Support IP65 waterproof for outdoor use',
            'Support for bird video viewing and sharing',
            'Support TF-card Storage /cloud storage',
            'Power:DC5V 1A,Type-C Interface',
            'Working temperature:-20℃~+50℃'
          ]
        },
        {
          name: 'ACE040 Pet Button Feeder',
          image: '/第一类产品images/ACE040 Pet Button Feeder.png',
          shortDesc: '4L capacity, button control, dual power supply, timed feeding, moisture-proof design.',
          features: [
            'Color: White, Black',
            'Material: 304 Stainless Steel + PC + ABS',
            'Capacity: 4L',
            'Style: Button Version',
            'Functions: Dual Power Supply [Plug-in and self-purchased 3 AA batteries]',
            'Timed and measured feeding',
            'Exclusive anti-jam feeding',
            'Moisture-proof and fresh-locking',
            '4 meals per day, up to 9 servings per meal',
            '6-10g per serving',
            'Product Gross Weight: 1.35kg'
          ]
        },
        {
          name: 'ACE040 Pet WiFi Feeder',
          image: '/第一类产品images/ACE040 Pet WiFi Feeder.png',
          shortDesc: '4L capacity, WiFi control, APP feeding, voice recording, moisture-proof design.',
          features: [
            'Color: White, Black',
            'Material: 304 Stainless Steel + PC + ABS',
            'Capacity: 4L',
            'Style: WiFi Version',
            'Functions: Dual Power Supply [Plug-in and self-purchased 3 AA batteries]',
            'Timed and measured feeding',
            'Exclusive anti-jam feeding',
            'APP-controlled feeding',
            'Voice recording',
            'Moisture-proof and fresh-locking',
            '4 meals per day, up to 9 servings per meal',
            '6-10g per serving',
            'Product Gross Weight: 1.35kg'
          ]
        },
        {
          name: 'ACE040 Pet Video Feeder',
          image: '/第一类产品images/ACE040 Pet Video Feeder.png',
          shortDesc: '4L capacity, 2MP HD camera, APP control, voice call, timed feeding.',
          features: [
            'Color: White, Black',
            'Material: 304 Stainless Steel + PC + ABS',
            'Capacity: 4L',
            'Style: Video Type',
            'Functions: Dual Power Supply [Plug-in and self-purchased 3 AA batteries]',
            'Timed and measured feeding',
            'Exclusive anti-jam feeding',
            'APP-controlled feeding',
            'Moisture-proof and fresh-locking',
            '2MP high-definition camera',
            'Voice call',
            '4 meals per day, up to 9 servings per meal',
            '6-10g per serving',
            'Product Gross Weight: 1.35kg'
          ]
        },
        {
          name: 'ACE5 Smart Water Dispenser',
          image: '/第一类产品images/ACE5 Smart Water Dispenser.png',
          shortDesc: '2.6L capacity, silent water pump, 4-stage filtration, 60 days battery life.',
          features: [
            'Environmental protection ABS material + 304 stainless steel drinking tray',
            'Capacity: 2.6L',
            'Silent water pump with anti-dry burning and power-off when disconnected from water',
            'Easy to disassemble, convenient for cleaning',
            '4-stage filtration system, softening water quality',
            'Powered by lithium battery (4000mAh), charging 5 hours',
            'Energy-saving mode with the longest battery life of 60 days',
            'Water flow modes: rotating water out, fountain water out, waterfall water out',
            'Filter element reminder for replacement',
            '3 working modes available',
            'Product dimensions: 190X190X139mm',
            'Net weight of the product: 600G'
          ]
        },
        {
          name: 'ACE10 Smart Water Dispenser with APP',
          image: '/第一类产品images/ACE10 Smart Water Dispenser with APP.png',
          shortDesc: '3.2L capacity, wireless water pump, Tuya App monitoring, health detection.',
          features: [
            'Environmental protection ABS material + 304 stainless steel drinking tray',
            'Capacity：3.2L',
            'Safe wireless water pump, completely isolated water from electricity',
            'Easy to disassemble，convenient for cleaning',
            '4-stage filtration system, softening water quality',
            'Built-in lithium battery, 3.7V/3000MAH',
            'Offline battery life for 10 days',
            'Water flow mode: automatic circulation water out',
            'High-level faucet water flow state',
            'Tuya App mobile monitoring, health detection',
            'Personalized settings',
            'Can check pet drinking data at any time',
            'Product dimensions: 208X185X189mm',
            'Net weight of the product: 700G'
          ]
        },
        {
          name: 'ACE12 Wireless Smart Water Dispenser',
          image: '/第一类产品images/ACE12 Wireless Smart Water Dispenser.png',
          shortDesc: '3.2L capacity, wireless design, 4-stage filtration, 60 days battery life.',
          features: [
            'Environmental protection ABS material + 304 stainless steel drinking tray',
            'Capacity:3.2L',
            'Silent water pump with anti-dry burning and power-off when disconnected from water',
            'Easy to disassemble, convenient for cleaning',
            '4-stage filtration system, softening water quality',
            'Powered by lithium battery (4000mAh), charging 5 hours',
            'Energy-saving mode with the longest battery life of 60 days',
            'Sensing controller can be detached separately for easy cleaning and charging as a backup',
            'Water flow mode: automatic circulation water out, high-level faucet water flow state',
            '3 working modes available',
            'Product dimensions: 208X185X132/165mm',
            'Net weight of the product: 700g'
          ]
        },
        {
          name: 'ACE18 Wireless Smart Water Dispenser',
          image: '/第一类产品images/ACE18 Wireless Smart Water Dispenser.png',
          shortDesc: '3.2L capacity, wireless design, continuous water flow, 60 days battery life.',
          features: [
            'Environmentally friendly ABS material',
            'Capacity:3.2L',
            'Silent water pump with anti-dry burning and power-off when disconnected from water',
            'Easy to disassemble, convenient for cleaning',
            '4-stage filtration system, softening water quality',
            'Powered by lithium battery (4000mAh), charging 5 hours',
            'Energy-saving mode with the longest battery life of 60 days',
            'Sensing controller can be detached separately for easy cleaning, charging and backup',
            'Water flow mode: automatic continuous water discharge',
            '3 working modes available',
            'Product dimensions: 208X185X165mm',
            'Net weight of the product: 700g'
          ]
        },
        {
          name: 'ACE02SP Inductive Water Dispenser',
          image: '/第一类产品images/ACE02SP Inductive Water Dispenser.png',
          shortDesc: '2.6L capacity, inductive control, 4-stage filtration, 60 days battery life.',
          features: [
            'Environmental protection ABS material + 304 stainless steel drinking tray',
            'Capacity: 2.6L',
            'Silent water pump with anti-dry burning and power-off when disconnected from water',
            'Easy to disassemble, convenient for cleaning',
            '4-stage filtration system, softening water quality',
            'Powered by lithium battery (4000mAh), charging 5 hours',
            'Energy-saving mode with the longest battery life of 60 days',
            'Water flow mode: spring-like water outflow, waterfall-like water outflow',
            '4 working modes available',
            'Product dimensions: 206X206X144mm',
            'Net weight of the product: 615G'
          ]
        },
        {
          name: 'ACE04SP Inductive Water Dispenser',
          image: '/第一类产品images/ACE04SP Inductive Water Dispenser.png',
          shortDesc: '2.8L capacity, inductive control, 4-stage filtration, 60 days battery life.',
          features: [
            'Environmental protection ABS material + 304 stainless steel drinking tray',
            'Capacity: 2.8L',
            'Silent water pump with anti-dry burning and power-off when disconnected from water',
            'Easy to disassemble, convenient for cleaning',
            '4-stage filtration system, softening water quality',
            'Powered by lithium battery (4000mAh), charging 5 hours',
            'Energy-saving mode with the longest battery life of 60 days',
            'Water flow mode: spring-like water outflow, waterfall-like water outflow',
            '4 working modes available',
            'Product dimensions: 210X215X147mm',
            'Net weight of the product: 625G'
          ]
        }
      ]
    }
  },
  methods: {
    showProductDetail(product) {
      this.selectedProduct = product
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.selectedProduct = null
      document.body.style.overflow = 'auto'
    }
  }
}
</script>

<style scoped>
.product-modal {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.7);
}

.modal-content {
  background-color: #fefefe;
  margin: 5% auto;
  padding: 30px;
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
}

.close {
  position: absolute;
  right: 20px;
  top: 20px;
  color: #aaa;
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: #000;
}

.product-features ul {
  list-style: none;
  padding: 0;
}

.product-features li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.product-features li:before {
  content: "✓ ";
  color: var(--primary-color);
  font-weight: bold;
  margin-right: 10px;
}
</style>
