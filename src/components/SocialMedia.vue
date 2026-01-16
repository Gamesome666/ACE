<template>
  <div class="live-chat live-chat-icon prt" @mouseenter="showBox = true" @mouseleave="showBox = false">
    <div class="live-chat-box live-chat-icon radius-lt" v-show="showBox">
      <p>
        <a href="https://www.facebook.com/share/1BXR4LC6Zy/?mibextid=wwXIfr" target="_blank" title="Facebook">
          <i class="fa fa-facebook"></i>
        </a>
        <span>Facebook</span>
      </p>
      <p>
        <a href="https://www.instagram.com/cjhronald?igsh=MW4zMXpsYjVvbWkxNg%3D%3D&utm_source=qr" target="_blank" title="Instagram">
          <i class="fa fa-instagram"></i>
        </a>
        <span>Instagram</span>
      </p>
      <p>
        <a href="https://youtube.com/@aceelectricallimited?si=HOe29k_zW7G0e-wH" target="_blank" title="YouTube">
          <i class="fa fa-youtube"></i>
        </a>
        <span>YouTube</span>
      </p>
      <p>
        <a href="tel:+85267113894" title="+852 6711 3894">
          <i class="fa fa-phone-square"></i>
        </a>
        <span>+852 6711 3894</span>
      </p>
      <p>
        <a href="https://wa.me/85267113894" title="WhatsApp" target="_blank">
          <i class="fa fa-whatsapp"></i>
        </a>
        <span>WhatsApp</span>
      </p>
      <p>
        <a href="mailto:info@ace-hkltd.com" title="Email">
          <i class="fa fa-envelope-o"></i>
        </a>
        <span>info@ace-hkltd.com</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialMedia',
  data() {
    return {
      showBox: false
    }
  }
}
</script>
