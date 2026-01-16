<template>
  <div class="message-form-box">
    <div class="message-header radius-top" @click="toggleForm">
      <span class="label"><i class="fa fa-commenting-o"></i></span>
      <b>Leave a message</b>
      <span class="arrow-toggle">
        <i class="fa" :class="formOpen ? 'fa-angle-down' : 'fa-angle-up'"></i>
      </span>
    </div>
    <div class="message-form" v-show="formOpen">
      <div class="wpcf7">
        <form @submit.prevent="submitForm">
          <p>
            <input 
              v-model="formData.name"
              type="text" 
              class="wpcf7-form-control" 
              placeholder="Your Name (required)"
              required
            >
          </p>
          <p>
            <input 
              v-model="formData.phone"
              type="tel" 
              class="wpcf7-form-control" 
              placeholder="Your Phone"
            >
          </p>
          <p>
            <input 
              v-model="formData.email"
              type="email" 
              class="wpcf7-form-control" 
              placeholder="Your Email (required)"
              required
            >
          </p>
          <p>
            <textarea 
              v-model="formData.message"
              class="wpcf7-form-control" 
              rows="5"
              placeholder="Please fill in the details"
              required
            ></textarea>
          </p>
          <p class="btn-submit">
            <input type="submit" value="Submit" class="wpcf7-form-control wpcf7-submit">
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageForm',
  data() {
    return {
      formOpen: false,
      formData: {
        name: '',
        phone: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    toggleForm() {
      this.formOpen = !this.formOpen
    },
    submitForm() {
      alert('Thank you for your message! We will contact you soon.')
      this.formData = {
        name: '',
        phone: '',
        email: '',
        message: ''
      }
      this.formOpen = false
    }
  }
}
</script>
