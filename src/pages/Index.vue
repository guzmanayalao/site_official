<template>
  <Layout>
    
    <Landing ></Landing>
    <Introduction ></Introduction>
    <ConsultationsBanner ></ConsultationsBanner>
    <OurServices ></OurServices>
    <OurResults ></OurResults>
    <OurMission ></OurMission>

    <ContactForm></ContactForm>
    <ConsultationsBanner ></ConsultationsBanner>

    <section>
      <div class="maxWidthWrapper">
        <h2 class="large underline underline--blue" id="contact">FAQ</h2>
        <div class="faqs">
          <p class="large">We are a design and marketing agency that believes in full transparency. Check out these frequently asked questions, if you have a specific question you don't see answered here please <a href="#contactUs">contact us</a>. </p>
          <div class="faq" v-for="(faq, i) in faqs" :key="i">
            <p class="faq--question" 
              @click="faqActive = i"  
              :style="[ faqActive === i ? { 'font-weight': '900' } : {'font-weight': '500'} ]">
              {{ faq.question }} 
              <font-awesome icon="caret-up" v-if="faqActive === i "></font-awesome>
              <font-awesome icon="caret-down" v-else></font-awesome>

            
            </p>
            <p class="faq--answer" :style="[ faqActive === i ? { 'display': 'block' } : {'display': 'none'} ]">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </section>


    <PartnersBanner ></PartnersBanner>
   

    <OurTeam ></OurTeam> 

    <!-- <Ideas ></Ideas> -->
    <ConsultationsBanner ></ConsultationsBanner>
    
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
import ContactForm from "../components/ContactForm.vue";

export default {
  data() {
    return {
      faqActive: null,
      faqs: [
        {
          question: "How much do you charge?",
          answer: "Each project is unique, but we have some of the most competitive prices in the entire Chicagoland area. This is because we have a small but talented team that can wear many hats at once. We are also fully remote so we don't have to waste money on a fancy office 😛. By the way, we NEVER out-source our work like a lot of our competitors, everything is done in-house! Use the contact form to get a same day quote!"
        },
        {
          question: "Do you design AND code websites?",
          answer: "Yes! We are a web design and web development company. We also do digital marketing."
        },
        {
          question: "Do you design logos?",
          answer: "Yes! We specialize in logos and branding in general. "
        },
        {
          question: "Do you do facebook/social media ads?",
          answer: "Yes! We offer social media and google advertising. "
        },
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
    this.successMessage = null;
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
    Ideas,
    ContactForm
}
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
$yellow: #FFC700;
$blue: #5751FE;
$purple: #A25AFF;
$red: #F24F1F; 
$green: #0FAA58; 

.faq {
  background: #fff;
  border: 3px solid #000;
  box-shadow: 10px 10px 0 0 #000;
  margin-top: 2rem;
  max-width: 55%;
  cursor: pointer;
  transition: all .2s; 
  @media screen and (max-width: 700px) {
    max-width: 100%;
  }
}
.faq:hover {
  transform: translateY(-3px);
  box-shadow: 15px 15px 0 0px #000;
}
.faq .faq--answer {
  display: none;
  padding: 1rem 1rem 1rem 1rem;
  margin: 0;
  border-top: 2px solid #000;
}
.faq .faq--question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0;

}
.maxWidthWrapper {
  max-width: 1280px;
  margin: 0 auto;
  @media screen and (max-width: 1600px) {
    padding: 1.5rem;
  }
  box-sizing: border-box; 
}


</style>
