<template>
  <Layout>
    
    <Landing v-scroll-reveal="{ distance: '200px' }"></Landing>
    <Introduction v-scroll-reveal="{ distance: '200px' }"></Introduction>
    <PartnersBanner v-scroll-reveal="{ distance: '200px' }"></PartnersBanner>
    <OurServices v-scroll-reveal="{ distance: '200px' }"></OurServices>
    <OurResults v-scroll-reveal="{ distance: '200px' }"></OurResults>
    <OurTeam v-scroll-reveal="{ distance: '200px' }"></OurTeam>
    <OurMission v-scroll-reveal="{ distance: '200px' }"></OurMission>
    <ConsultationsBanner v-scroll-reveal="{ distance: '200px' }"></ConsultationsBanner>
    <Ideas v-scroll-reveal="{ distance: '200px' }"></Ideas>
    <section id="contactUs" >
      <div class="maxWidthWrapper" v-scroll-reveal="{ distance: '200px', interval: 30 }">
        <h2 class="large" id="contact">Let's Get In Touch</h2>
        <p>
          Let's figure out how we can help you create and/or manage your online
          presence. (Our consultations are totally free.)
          <br /><span :style="{ color: messageColor }">{{
            successMessage
          }}</span>
        </p>
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
            </div>
          </div>

          <div class="message-wrapper">
            <label for="message">Message
            <textarea name="message" v-model="formData.message"></textarea>
            </label>
          </div>

          <button type="submit">Submit form</button>
        </form>
      </div>
    </section> 

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
  </Layout>
</template>



<script>
import Landing from "../components/Landing";
import OurResults from "../components/OurResults";
import OurServices from "../components/OurServices";
import OurMission from "../components/OurMission";
import PartnersBanner from "../components/PartnersBanner";
import ConsultationsBanner from "../components/ConsultationsBanner";
import OurTeam from "../components/OurTeam";
import Introduction from '../components/Introduction.vue';
import Ideas from '../components/Ideas.vue';
import VueScrollReveal from 'gridsome-scroll-reveal';

export default {
  data() {
    return {
      formData: {},
    };
  },
  metaInfo: {
    title: "Site | Chicago Web Development"
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
      if (this.formData.name && this.formData.email && this.formData.message) {
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
            this.successMessage = "Thank you for contacting Site!";
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
  },
  components: {
    Landing,
    PartnersBanner,
    OurResults,
    Introduction,
    OurServices,
    OurMission,
    ConsultationsBanner,
    OurTeam,
    Ideas
  }
}
</script>

<style>
.maxWidthWrapper {
  max-width: 1280px;
  margin: 0 auto;
}
#contactUs {
  background: #C5B9FF;
  margin: 45px;
  padding: 100px 0;
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
  
}
button {
  margin-top: 4rem;
}
</style>
