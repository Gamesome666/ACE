<template>
  <div class="about-detail-page">
    <div class="page-header">
      <div class="container">
        <h1>About Us</h1>
      </div>
    </div>

    <div class="container" style="padding: 80px 15px;">
      <div class="row">
        <div class="col-xs-12 col-md-10 col-md-offset-1">
          <div class="about-simple-content">
            <p>
              ACE Electrical Limited was established in 2008 and has been committed to becoming a global leader in smart care and pet needs solutions. We strive to weave a safe, convenient, and heartwarming protective network for families and their loved ones worldwide. With stringent quality control standards and user-centric innovative designs, our products have been exported to numerous countries and regions, serving families across diverse locations.
            </p>
            
            <h3>Our Core Product Lines</h3>
            <p>
              We focus on three core product lines, fully covering daily needs and pet care requirements:
            </p>
            
            <h4>Smart Pet Feeder & Water Dispenser</h4>
            <p>
              Supporting remote feeding control and real-time status monitoring. They allow owners to accurately take care of their pets' diets even when away, eliminating "feeding anxiety" and providing all-day intimate care for beloved pets.
            </p>
            
            <h4>Bluetooth Anti-Lost Device & Global Locator</h4>
            <p>
              Used for locating and tracking pets, the elderly, mobile phones, as well as valuable items such as bicycles. With all-terrain precise positioning and powerful capabilities, these devices are widely applicable and completely put an end to "loss worries".
            </p>
            
            <h4>Pet Supplies Series</h4>
            <p>
              Covering pet leashes, collars, harnesses, comfortable pet beds, backpacks, and professional grooming tools. Designed for both functionality and comfort, they enhance daily pet care experiences—making it easier to keep your pets happy, healthy, and well-groomed while deepening the bond between you and your furry friends.
            </p>
            
            <p>
              With the vision of <strong>"Guard the Precious, Accompany Without Worry"</strong>, we transform professional technology into heartwarming products. We look forward to improving the quality of life for families worldwide, ensuring every concern is addressed, and every companionship becomes more reassuring and long-lasting.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutDetail'
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
}

.breadcrumb a {
  color: #333;
  text-decoration: underline;
}

.breadcrumb a:hover {
  color: #555;
}

.about-simple-content {
  background: #fff;
  padding: 0;
}

.about-simple-content p {
  font-size: 16px;
  line-height: 2;
  color: #333;
  margin-bottom: 25px;
  text-align: justify;
}

.about-simple-content h3 {
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
  margin-top: 30px;
  margin-bottom: 15px;
}

.about-simple-content h4 {
  font-size: 18px;
  font-weight: bold;
  color: #654321;
  margin-top: 20px;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 32px;
  }
  
  .about-simple-content p {
    font-size: 14px;
  }
}
</style>
