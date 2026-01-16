<template>
  <div id="news" class="our_service" style="padding: 30px 15px;">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="product_index">
            <div class="product_head">
              <h2>Latest News</h2>
            </div>
            <div class="product_list">
              <div 
                v-for="(news, index) in newsList" 
                :key="index"
                class="col-xs-12 col-md-12" 
                style="padding: 10px 0; border-bottom: 1px solid #c5c5c5;"
              >
                <div class="col-xs-6 col-md-3 index-time">
                  <p>{{ news.date }}</p>
                  <a href="#"><i class="fa fa-angle-right"></i></a>
                </div>
                <div class="col-xs-12 col-md-6 new_cont">
                  <a href="#">{{ news.title }}</a>
                  <p>{{ news.excerpt }}</p>
                </div>
                <div class="col-xs-12 col-md-3 new_img">
                  <a href="#"><img :src="news.image" width="100%"></a>
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
  name: 'News',
  data() {
    return {
      newsList: [
        {
          date: '2024-12-15',
          title: 'ACE Launches New AI-Powered Bird Feeder Series',
          excerpt: 'Our latest bird feeder series features advanced AI technology that can recognize over 10,000 bird species, providing bird enthusiasts with unprecedented wildlife observation experiences...',
          image: '/images/news1.jpg'
        },
        {
          date: '2024-12-10',
          title: 'Smart Pet Care: The Future of Pet Ownership',
          excerpt: 'As technology continues to evolve, smart pet care devices are revolutionizing how we care for our beloved companions. ACE Electrical Limited leads the way in innovative solutions...',
          image: '/images/news2.jpg'
        },
        {
          date: '2024-12-05',
          title: 'ACE Expands Global Market Presence',
          excerpt: 'ACE Electrical Limited announces expansion into new international markets, bringing our smart pet care solutions to families worldwide. Our commitment to quality and innovation continues...',
          image: '/images/news3.jpg'
        }
      ]
    }
  }
}
</script>
