<template>
  <div id="about" style="background-image: url(/images/about-bg.jpg); background-size: cover; background-attachment: fixed;">
    <div class="about_index">
      <div class="container">
        <div class="row">
          <div class="about_head col-xs-12 col-md-12">
            <h2>About Us</h2>
            <div class="col-xs-12 col-md-12">
              <div class="about_content">
                <p class="about_contents">
                  ACE Electrical Limited was established in 2008 and has been committed to becoming a global leader in smart care and pet needs solutions. We strive to weave a safe, convenient, and heartwarming protective networks for families and their loved ones worldwide. With stringent quality control standards and user-centric innovative designs, our products have been exported to numerous countries and regions, serving families across diverse locations.
                </p>
                <p class="about_contents">
                  We focus on three core product lines, fully covering daily needs and pet care requirements:
                </p>
                <ul class="about-list">
                  <li>
                    <strong>Smart Pet Feeder & Water Dispenser:</strong> Supporting remote feeding control and real-time status monitoring. They allow owners to accurately take care of their pets' diets even when away, eliminating "feeding anxiety" and providing all-day intimate care for beloved pets.
                  </li>
                  <li>
                    <strong>Bluetooth Anti-Lost Device & Global Locator:</strong> Compact, portable, and powerful, these devices are widely used for locating and tracking pets, the elderly, children, as well as valuable items such as bicycles and mobile phones. With all-terrain precise positioning technology, they completely put an end to "loss worries" and guard every concern.
                  </li>
                  <li>
                    <strong>Pet Supplies Series:</strong> Covering pet leashes, collars, harnesses, backpacks, comfortable pet beds, and professional grooming tools. Designed for both functionality and comfort, they enhance daily pet care experiences—making it easier to keep your pets happy, healthy, and well-groomed while deepening the bond between you and your furry friends.
                  </li>
                </ul>
                <p class="about_contents">
                  With the vision of <strong>"Guard the Precious, Accompany Without Worry"</strong>, we transform professional technology into heartwarming products. We look forward to improving the quality of life for families worldwide, ensuring every concern is addressed, and every companionship becomes more reassuring and long-lasting.
                </p>
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
  name: 'AboutUs'
}
</script>

<style scoped>
.about-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.about-list li {
  padding: 15px 0;
  line-height: 1.8;
  color: #333;
}

.about-list li:before {
  content: "✓ ";
  color: var(--primary-color);
  font-weight: bold;
  margin-right: 10px;
  font-size: 18px;
}

.about-list strong {
  color: #2c3e50;
}
</style>
