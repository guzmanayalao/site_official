<template>
  <Layout @scroll="handleScroll">
    <Landing />
    <g-image
      id="landingCircle"
      src="../../static/uploads/gradientCircle.png"
      :style="{ transform: 'translateY(' + -translateVal / 2 + 'px)' }"
    ></g-image>
    <OurResults />
    <g-image
      id="resultsCircle"
      src="../../static/uploads/gradientCircle.png"
      :style="{ transform: 'translateY(' + -translateVal / 4 + 'px)' }"
    ></g-image>
    <div id="ourServicesAnchor" style="height: 1px"></div>
    <OurServices />
    <g-image
      id="servicesCircle"
      src="../../static/uploads/gradientCircle.png"
      :style="{ transform: 'translateY(' + -translateVal / 6 + 'px)' }"
    ></g-image>
    <OurMission />
    <section id="contactUs">
      <div class="maxWidthContainer">
        <h2 id="contact">Let's Get In Touch</h2>
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
            <label for="message">Message</label>
            <textarea name="message" v-model="formData.message"></textarea>
          </div>

          <button type="submit">Submit form</button>
        </form>
      </div>
    </section>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
  </Layout>
</template>

<page-query>
query Homepage {
  homepage(id: "1") {
    bio
  }
}
</page-query>
<script>
import Landing from "../components/Landing";
import OurResults from "../components/OurResults";
import OurServices from "../components/OurServices";
import OurMission from "../components/OurMission";
import OurTeam from "../components/OurTeam";
export default {
  data() {
    return {
      translateVal: 0,
      successMessage: null,
      messageColor: "#40db80",
      formData: {},
      ourResultsMobile: false
    };
  },
  metaInfo: {
    title: "Site | Chicago Web Development"
  },
  methods: {
    handleScroll(event) {
      this.translateVal = window.scrollY;
    },
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
    window.addEventListener("scroll", this.handleScroll);
  },
  components: {
    Landing,
    OurResults,
    OurServices,
    OurMission,
    OurTeam
  }
};
</script>

<style>
/* rubik-regular - latin */
@font-face {
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  src: url("../../static/fonts/rubik-v9-latin-regular.eot"); /* IE9 Compat Modes */
  src: local("Rubik"), local("Rubik-Regular"),
    url("../../static/fonts/rubik-v9-latin-regular.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("../../static/fonts/rubik-v9-latin-regular.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("../../static/fonts/rubik-v9-latin-regular.woff") format("woff"),
    /* Modern Browsers */ url("../../static/fonts/rubik-v9-latin-regular.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("../../static/fonts/rubik-v9-latin-regular.svg#Rubik") format("svg"); /* Legacy iOS */
}
/* rubik-500 - latin */
@font-face {
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  src: url("../../static/fonts/rubik-v9-latin-500.eot"); /* IE9 Compat Modes */
  src: local("Rubik Medium"), local("Rubik-Medium"),
    url("../../static/fonts/rubik-v9-latin-500.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("../../static/fonts/rubik-v9-latin-500.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("../../static/fonts/rubik-v9-latin-500.woff") format("woff"),
    /* Modern Browsers */ url("../../static/fonts/rubik-v9-latin-500.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("../../static/fonts/rubik-v9-latin-500.svg#Rubik") format("svg"); /* Legacy iOS */
}
/* rubik-700 - latin */
@font-face {
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  src: url("../../static/fonts/rubik-v9-latin-700.eot"); /* IE9 Compat Modes */
  src: local("Rubik Bold"), local("Rubik-Bold"),
    url("../../static/fonts/rubik-v9-latin-700.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("../../static/fonts/rubik-v9-latin-700.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("../../static/fonts/rubik-v9-latin-700.woff") format("woff"),
    /* Modern Browsers */ url("../../static/fonts/rubik-v9-latin-700.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("../../static/fonts/rubik-v9-latin-700.svg#Rubik") format("svg"); /* Legacy iOS */
}
/* rubik-900 - latin */
@font-face {
  font-family: "Rubik";
  font-style: normal;
  font-weight: 900;
  src: url("../../static/fonts/rubik-v9-latin-900.eot"); /* IE9 Compat Modes */
  src: local("Rubik Black"), local("Rubik-Black"),
    url("../../static/fonts/rubik-v9-latin-900.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("../../static/fonts/rubik-v9-latin-900.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("../../static/fonts/rubik-v9-latin-900.woff") format("woff"),
    /* Modern Browsers */ url("../../static/fonts/rubik-v9-latin-900.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("../../static/fonts/rubik-v9-latin-900.svg#Rubik") format("svg"); /* Legacy iOS */
}
.maxWidthContainer {
  max-width: 1400px;
  margin: auto;
}
#landingCircle {
  left: 120px;
  position: absolute;
  z-index: -20;
  height: 50px;
  width: auto;
}

#resultsCircle {
  bottom: -400px;
  left: 100px;
  height: 20px;
  width: 20px;
  position: absolute;
  z-index: -20;
}
@media screen and (max-width: 640px) {
  #landingCircle {
    left: 300px;
    position: absolute;
    z-index: -20;
  }
  #resultsCircle {
    left: 150px;
    height: 20px;
    width: 20px;
    position: absolute;
    z-index: -20;
  }
  #servicesCircle {
    top: 2000px;
    right: 40px;
    height: 30px;
    width: auto;
    position: absolute;
    z-index: -20;
  }
}
#servicesCircle {
  right: 100px;
  height: 30px;
  width: auto;
  position: absolute;
  z-index: -20;
}

button {
  padding: 17px 24px;
  font-family: "Rubik";
  font-weight: 700;
  color: white;
  background: rgb(14, 167, 255);
  font-size: 18px;
  border: none;
  border-radius: 20px;
}
button.m1 {
  margin-right: 1rem;
}
.cardHidden {
  visibility: hidden;
}

#contactUs {
  margin-top: 2rem;
  background: rgb(14, 22, 29);
  padding: 2rem;
}
#contactUs .maxWidthContainer {
  display: flex;
  flex-direction: column;
  text-align: center;
}
#contactUs .maxWidthContainer .sender-info div {
  margin-bottom: 1rem;
}
#contactUs form {
  margin-top: 2rem;
}
#contactUs .maxWidthContainer textarea {
}
#contactUs .maxWidthContainer label {
  display: block;
}
#contactUs .maxWidthContainer input,
#contactUs .maxWidthContainer textarea {
  background: none;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  padding: 1rem;
  margin-bottom: 2rem;
  resize: none;
  transition: all 0.3s;
  outline: none;
  width: 50%;
}
@media screen and (max-width: 640px) {
  #contactUs .maxWidthContainer input,
  #contactUs .maxWidthContainer textarea {
    width: 100%;
  }
}
#contactUs .maxWidthContainer input:focus,
#contactUs .maxWidthContainer textarea:focus {
  border-bottom: 1px solid rgb(255, 0, 234);
  outline: none;
  transition: outline 0.3s;
}
</style>
