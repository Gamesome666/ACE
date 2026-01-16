<template>
  <div class="culture-page">
    <div class="page-header">
      <div class="container">
        <h1>Corporate Culture</h1>
      </div>
    </div>

    <div class="container" style="padding: 60px 15px;">
      <div class="culture-grid">
        <div class="culture-card">
          <div class="culture-icon">
            <i class="fa fa-file-text-o"></i>
          </div>
          <h3>POLICY</h3>
          <p>Quality First, Customer First</p>
        </div>

        <div class="culture-card">
          <div class="culture-icon">
            <i class="fa fa-rocket"></i>
          </div>
          <h3>MISSION</h3>
          <p>Improving Social Productivity</p>
        </div>

        <div class="culture-card">
          <div class="culture-icon">
            <i class="fa fa-eye"></i>
          </div>
          <h3>VISION</h3>
          <p>Grant whatever is requested</p>
        </div>

        <div class="culture-card">
          <div class="culture-icon">
            <i class="fa fa-star"></i>
          </div>
          <h3>VALUE</h3>
          <p>Customer is God</p>
        </div>

        <div class="culture-card">
          <div class="culture-icon">
            <i class="fa fa-line-chart"></i>
          </div>
          <h3>MANAGEMENT</h3>
          <p>Innovation and Openness</p>
        </div>

        <div class="culture-card">
          <div class="culture-icon">
            <i class="fa fa-users"></i>
          </div>
          <h3>PERSONNEL</h3>
          <p>Fair competition</p>
        </div>

        <div class="culture-card">
          <div class="culture-icon">
            <i class="fa fa-heart-o"></i>
          </div>
          <h3>SPIRIT</h3>
          <p>Hospitality is like friendship</p>
        </div>

        <div class="culture-card">
          <div class="culture-icon">
            <i class="fa fa-handshake-o"></i>
          </div>
          <h3>TEAM</h3>
          <p>Unity, cooperation and progress</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CorporateCulture'
}
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-hover) 100%);
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

.culture-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.culture-card {
  background: #fff;
  padding: 40px 20px;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.culture-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.culture-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.culture-icon i {
  font-size: 36px;
  color: #fff;
}

.culture-card h3 {
  color: #2c3e50;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  text-transform: uppercase;
}

.culture-card p {
  color: #666;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 992px) {
  .culture-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .culture-grid {
    grid-template-columns: 1fr;
  }
  
  .page-header h1 {
    font-size: 32px;
  }
}
</style>
