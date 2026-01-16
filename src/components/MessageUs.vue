<template>
  <div id="message" class="message-us-section" style="padding: 50px 0; background-color: #fff;">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="product_head">
            <h2>Message Us</h2>
          </div>
        </div>
      </div>

      <div class="row" style="margin-top: 40px;">
        <!-- Contact Us -->
        <div class="col-xs-12 col-md-8 col-md-offset-2">
          <div class="contact-section" id="contact">
            <h3><i class="fa fa-envelope"></i> Contact Us</h3>
            <div class="contact-content">
              <div class="contact-info">
                <div class="contact-item">
                  <i class="fa fa-envelope-o"></i>
                  <div>
                    <strong>Email:</strong>
                    <a href="mailto:info@ace-hkltd.com">info@ace-hkltd.com</a>
                  </div>
                </div>

                <div class="contact-item">
                  <i class="fa fa-phone"></i>
                  <div>
                    <strong>Tel:</strong>
                    <a href="tel:+85267113894">+852 6711 3894</a>
                  </div>
                </div>

                <div class="contact-item">
                  <i class="fa fa-whatsapp"></i>
                  <div>
                    <strong>WhatsApp:</strong>
                    <a href="https://wa.me/85267113894">+852 6711 3894</a>
                  </div>
                </div>

                <div class="contact-item">
                  <i class="fa fa-globe"></i>
                  <div>
                    <strong>Website:</strong>
                    <a href="http://www.ace-hkltd.com" target="_blank">www.ace-hkltd.com</a>
                  </div>
                </div>

                <div class="contact-item">
                  <i class="fa fa-map-marker"></i>
                  <div>
                    <strong>Address:</strong>
                    <p>Room 304C, Join-in Hang Sang Centre,<br>2-16 Kwai Fung Crescent, Kwai Chung,<br>Hong Kong</p>
                  </div>
                </div>
              </div>

              <div class="social-media-section">
                <h4>Follow Us</h4>
                <div class="social-links">
                  <a href="https://www.instagram.com/cjhronald?igsh=MW4zMXpsYjVvbWkxNg%3D%3D&utm_source=qr" target="_blank" class="social-link instagram">
                    <i class="fa fa-instagram"></i>
                    <span>Instagram</span>
                  </a>
                  <a href="https://www.facebook.com/share/1BXR4LC6Zy/?mibextid=wwXIfr" target="_blank" class="social-link facebook">
                    <i class="fa fa-facebook"></i>
                    <span>Facebook</span>
                  </a>
                  <a href="https://youtube.com/@aceelectricallimited?si=HOe29k_zW7G0e-wH" target="_blank" class="social-link youtube">
                    <i class="fa fa-youtube"></i>
                    <span>YouTube</span>
                  </a>
                </div>

                <div class="qr-code">
                  <img src="/youtubeQr.png" alt="YouTube QR Code" style="width: 150px; margin-top: 20px;">
                  <p style="text-align: center; margin-top: 10px; color: #666;">Scan to follow us on YouTube</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageUs'
}
</script>

<style scoped>
.culture-section,
.contact-section {
  background: #f8f9fa;
  padding: 50px 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  height: 100%;
}

.culture-section h3,
.contact-section h3 {
  color: #2c3e50;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 3px solid var(--primary-color);
  text-align: center;
}

.culture-section h3 i,
.contact-section h3 i {
  color: var(--primary-color);
  margin-right: 10px;
}

.culture-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 20px;
}

.culture-card {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.culture-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.culture-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 15px;
  background: linear-gradient(135deg, #ffc0cb 0%, #ffb6c1 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.culture-icon i {
  font-size: 28px;
  color: #e74c3c;
}

.culture-card h4 {
  color: #2c3e50;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.culture-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .culture-grid {
    grid-template-columns: 1fr;
  }
}

.contact-info {
  margin-bottom: 30px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  transition: all 0.3s;
}

.contact-item:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transform: translateX(5px);
}

.contact-item i {
  font-size: 28px;
  color: var(--primary-color);
  margin-right: 20px;
  min-width: 35px;
}

.contact-item strong {
  display: block;
  color: #2c3e50;
  margin-bottom: 8px;
  font-size: 18px;
}

.contact-item a {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 17px;
}

.contact-item a:hover {
  text-decoration: underline;
}

.contact-item p {
  margin: 0;
  color: #666;
  line-height: 1.8;
  font-size: 17px;
}

.social-media-section {
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  margin-top: 30px;
}

.social-media-section h4 {
  color: #2c3e50;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.social-links {
  display: flex
}

.social-link {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s;
  color: #fff;
}

.social-link i {
  font-size: 24px;
  margin-right: 15px;
}

.social-link span {
  font-size: 16px;
  font-weight: 500;
}

.social-link.instagram {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
}

.social-link.facebook {
  background: #1877f2;
}

.social-link.youtube {
  background: #ff0000;
}

.social-link:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.qr-code {
  text-align: center;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .culture-section,
  .contact-section {
    margin-bottom: 30px;
  }
}
</style>
