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

    <section>
      <div class="maxWidthWrapper">
        <h2 class="large" id="contact">FAQ</h2>
        <div class="faqs">
          <p class="large">We are a web design company that believes in full transparency. Check out these frequently asked questions, if you have a specific question you don't see answered here please <a href="#contactUs">contact us</a>. </p>
          <div class="faq" v-for="(faq, i) in faqs" :key="i">
            <p class="faq--question" @click="faqActive = i">
              {{ faq.question }} 
              <font-awesome-icon>fas fa-caret-down</font-awesome-icon>
            
            </p>
            <p class="faq--answer" :style="[ faqActive == i ? { 'display': 'block' } : {'display': 'none'} ]">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </section>


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
      messageColor: '',
      successMessage: '',
      faqActive: null,
      faqs: [
        {
          question: "How much do you charge?",
          answer: "We charge between $50 and $100 per hour depending on what your project is. Our consultations are free, so contact us today for a quick quote! We also offer lots of promotions and incentives for refferals, new, or returning customers."
        }
      ],
      
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
.faq {
  background: #fff;
  border: 3px solid #000;
  padding: 0 1rem;
  box-shadow: 10px 10px 0 0 #000;
  margin-top: 2rem;
  max-width: 80%;
  cursor: pointer;
  transition: all .2s; 
}
.faq:hover {
  transform: translateY(-3px);
  box-shadow: 15px 15px 0 0px #000;
}
.faq .faq--answer {
  display: none;
  padding-right: 2rem;
  padding-top: 1rem;
  border-top: 2px solid #000;
}
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
