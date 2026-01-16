<template>
  <div class="container" style="padding: 30px 15px;">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="product_index">
          <div class="product_head">
            
          </div>
          <div class="advantage-image-container">
            <img src="/images/advantage.png" alt="Our Advantages" class="advantage-image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Advantage'
}
</script>

<style scoped>
.advantage-image-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
}

.advantage-image {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .advantage-image-container {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>
