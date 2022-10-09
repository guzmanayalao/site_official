<template>
  <section id="contactUs" >
      <div class="maxWidthWrapper">
        <h2 class="large" id="contact">Let's Get In Touch</h2>
        <p>
          Let's figure out how we can help you create and/or manage your online
          presence. (Our consultations are totally free.)
          <br />
        </p>
        <div class="successBanner" :style="{ color: messageColor }" v-if="successMessage" @click="successMessage = null">{{
            successMessage
          }} <font-awesome icon="times" style="color: #000"></font-awesome></div>
        <form
          name="contact"
          method="post"
          v-on:submit.prevent="handleSubmit"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label> Don’t fill this out: <input name="bot-field" /> </label>
          </p>
          <div class="sender-info">
            <div>
              <label for="name" class="label">Your name</label>
              <input type="text" name="name" v-model="formData.name" />
            </div>
            <div>
              <label for="email">Your email</label>
              <input type="email" name="email" v-model="formData.email" />
              <label for="phoneNumber">Your Phone Number</label>
              <input type="phoneNumber" name="phoneNumber" v-model="formData.phoneNumber" />
            </div>
          </div>

          <div class="message-wrapper">
            <label for="message">Message
            <textarea name="message" v-model="formData.message" style="resize:none"></textarea>
            </label>
          </div>

          <button type="submit">Submit form</button>
        </form>
      </div>
    </section> 

</template>
<script>
export default {
  name: "ContactForm",
  data() {
    return {
      ourServicesMobile: false,
      messageColor: '',
      successMessage: '',
      formData: {},

    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      if (this.formData.name && this.formData.email && this.formData.message && this.formData.phoneNumber) {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: this.encode({
            "form-name": e.target.getAttribute("name"),
            ...this.formData
          })
        })
          .then(() => {
            this.messageColor = "green";
            this.successMessage = "Thank you for contacting Site, a team member will reach out to you today.";
          })
          .catch(error => {
            this.messageColor = "#db4040";

            this.successMessage = error;
            this.formData = {};
          });
      } else {
        this.successMessage = "Please fill out all of the form fields.";
        this.messageColor = "#db4040";
      }
    }
  },
  mounted() {
    // window.addEventListener('scroll', this.handleScroll);
  }
};
</script>

<style lang="scss">
.maxWidthWrapper {
  max-width: 1280px;
  margin: 0 auto;
  @media screen and (max-width: 1600px) {
    padding: 1.5rem;
  }
  box-sizing: border-box; 
}
#contactUs {
  background: #C5B9FF;
  margin: 45px;
  padding: 100px 0;
  box-sizing: border-box; 
  @media screen and (max-width: 700px) {
    margin: 50px 0;
    padding: 30px 0;
  }
}
label {
  font-weight: 800;
  margin-bottom: .5rem;
  margin-top: 2rem;
  display: block;
}
input,textarea {
  border: 4px solid #000;
  padding: 1rem;
  box-shadow: 10px 10px 0 0 #000;
  width: 100%;
  box-sizing: border-box;
  
}
button {
  margin-top: 4rem;
}
form button {
  margin-top: 2rem !important; 
}
.successBanner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff; 
  border: 3px solid rgb(0, 0, 0);
  box-shadow: 10px 10px 0 0 #000;
  max-width: 80%;
  padding: 1rem; 
  font-size: 22px; 
  margin: 0 auto 2rem auto;
  z-index: 100;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
