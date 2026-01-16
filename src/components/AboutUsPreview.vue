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
                  ACE Electrical Limited was established in 2008 and has been committed to becoming a global leader in smart care and pet needs solutions. We strive to weave a safe, convenient, and heartwarming protective network for families and their loved ones worldwide. With stringent quality control standards and user-centric innovative designs, our products have been exported to numerous countries and regions, serving families across diverse locations....
                </p>
                <div class="text-center" style="margin-top: 30px;">
                  <router-link to="/about" class="btn btn-info btn-lg about_but">
                    <i class="fa fa-arrow-right"></i> READ MORE
                  </router-link>
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
  name: 'AboutUsPreview'
}
</script>

<style scoped>
.about_but {
  padding: 15px 40px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 50px;
  transition: all 0.3s;
}

.about_but:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 20px rgba(0,0,0,0.3);
}

.about_but i {
  margin-left: 10px;
}
</style>
