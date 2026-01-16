<template>
  <footer id="footer">
    <div class="footer container">
      <div class="row footer-content">
        <div class="col-md-4 col-sm-6 footer-column">
          <div class="footer-section">
            <h3 class="footer-title">Navigation</h3>
            <ul class="footer-links">
              <li><router-link to="/"><i class="fa fa-angle-right"></i> Home</router-link></li>                                                                 
              <li><router-link to="/about"><i class="fa fa-angle-right"></i> About Us</router-link></li>                                                        
              <li><router-link to="/products/smart-feeding"><i class="fa fa-angle-right"></i> Products</router-link></li>                                       
              <li><router-link to="/application-cases"><i class="fa fa-angle-right"></i> Application Cases</router-link></li>
            </ul>
          </div>
        </div>

        <div class="col-md-4 col-sm-6 footer-column">
          <div class="footer-section">
            <h3 class="footer-title">Contact Info</h3>
            <ul class="footer-contact">
              <li>
                <i class="fa fa-phone"></i>
                <span>+852 6711 3894</span>
              </li>
              <li>
                <i class="fa fa-whatsapp"></i>
                <span>+852 6497 8684</span>
              </li>
              <li>
                <i class="fa fa-envelope"></i>
                <span>info@ace-hkltd.com</span>
              </li>
              <li>
                <i class="fa fa-globe"></i>
                <span>www.ace-hkltd.com</span>
              </li>
              <li>
                <i class="fa fa-map-marker"></i>
                <span>Room 304C, Join-in Hang Sang Centre,<br>Kwai Chung, Hong Kong</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-4 col-sm-12 footer-column">
          <div class="footer-section">
            <h3 class="footer-title">Follow Us</h3>
            <div class="footer-social">
              <a href="https://www.instagram.com/cjhronald?igsh=MW4zMXpsYjVvbWkxNg%3D%3D&utm_source=qr" target="_blank" class="social-link">
                <i class="fa fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a href="https://www.facebook.com/share/1BXR4LC6Zy/?mibextid=wwXIfr" target="_blank" class="social-link">
                <i class="fa fa-facebook"></i>
                <span>Facebook</span>
              </a>
              <a href="https://youtube.com/@aceelectricallimited?si=HOe29k_zW7G0e-wH" target="_blank" class="social-link">
                <i class="fa fa-youtube"></i>
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bar">
      <div class="container">
        <p>Copyright © 2008-2025 ACE Electrical Limited. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
#footer {
  background: var(--primary-color);
  color: #333;
  padding: 60px 0 0;
  margin-top: 80px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.footer-column {
  margin-bottom: 40px;
}

.footer-section {
  padding: 0 15px;
}

.footer-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 2px solid #333;
  display: inline-block;
}

/* Navigation Links */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #333;
  text-decoration: none;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
}

.footer-links a i {
  margin-right: 8px;
  color: #333;
  font-size: 14px;
}

.footer-links a:hover {
  color: #0066cc;
  padding-left: 5px;
}

.footer-links a:visited {
  color: #333;
}

.footer-links a:active {
  color: #0066cc;
}

.footer-links a:visited:hover {
  color: #0066cc;
}

.footer-links a.router-link-active,
.footer-links a.router-link-exact-active {
  color: #333 !important;
}

.footer-links a.router-link-active:hover,
.footer-links a.router-link-exact-active:hover {
  color: #0066cc !important;
}

/* Contact Info */
.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-contact li {
  margin-bottom: 15px;
  display: flex;
  align-items: flex-start;
  color: #333;
  font-size: 15px;
  line-height: 1.6;
}

.footer-contact i {
  color: #333;
  margin-right: 12px;
  font-size: 16px;
  min-width: 20px;
  margin-top: 3px;
}

.footer-contact span {
  flex: 1;
}

/* Social Media */
.footer-social {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
  transition: all 0.3s;
  font-size: 15px;
  padding: 8px 12px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.05);
  font-weight: 500;
}

.social-link i {
  font-size: 20px;
  margin-right: 12px;
  min-width: 25px;
  color: #333;
}

.social-link:hover {
  background: rgba(0, 102, 204, 0.15);
  color: #0066cc;
  transform: translateX(5px);
}

.social-link:hover i {
  color: #0066cc;
}

.social-link:visited {
  color: #333;
}

.social-link:active {
  color: #0066cc;
}

.social-link:visited:hover {
  color: #0066cc;
}

.social-link:visited:hover i {
  color: #0066cc;
}

/* Footer Bar */
.footer-bar {
  background: var(--primary-hover);
  padding: 20px 0;
  margin-top: 40px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.footer-bar p {
  margin: 0;
  color: #333;
  font-size: 14px;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  #footer {
    padding: 40px 0 0;
  }
  
  .footer-column {
    margin-bottom: 30px;
  }
  
  .footer-title {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  .footer-section {
    padding: 0 10px;
  }
}

@media (max-width: 480px) {
  .footer-contact li {
    font-size: 14px;
  }
  
  .footer-links a,
  .social-link {
    font-size: 14px;
  }
}
</style>
