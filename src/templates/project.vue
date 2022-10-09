<template>
  <Layout>

    <Landing :alt="true" :altData="$context.node.title"></Landing>


    <!-- <div class="banner " :style="$context.node.banner || 'background: #5751FE'">
      <h1 class="maxWidthContainer">{{ $context.node.title }}</h1>
    </div> -->
    <!-- <div class="frameWrapper">
      <div id="frameContainer" v-if="$context.node.vimeo">
        <div v-html="$context.node.vimeo"></div>
      </div>
      <div id="frameContainer" class="alt" v-else> 
        <g-image id="imgPrev" :src="$context.node.image"></g-image>

      </div>
    </div> -->

    <div class="maxWidthWrapper colDetails">
      <div class="colLeft">
        <h4>Services &amp; Technology:</h4>
        <p v-html="$context.node.scope"></p>
        <!-- <h4>TLDR;</h4>
        <p>
          {{ $context.node.tldr }}
        </p> -->
      </div>
      <div class="colRight">
        <h4>
          The Goal:
        </h4>
        <p>
          {{ $context.node.goal }}
        </p>
        <h4>
          How We Did It:
        </h4>
        <p v-html="$context.node.how"></p>

      </div>
      
    </div>
    <div class="colImage">
      <div class="wireframes"  v-if="$context.node.wireframes">
        <h4>Wireframe Process</h4>
        <g-image class="imgPrev" :src="$context.node.wireframes"></g-image>

      </div>
      <div class="wireframes"  v-if="$context.node.short_image">
        <h4>Final Design</h4>

        <g-image class="imgPrev" :src="$context.node.short_image"></g-image>

      </div>
    </div>
    <g-link class="goback" to="/#ourResults"><button>Go Back</button></g-link>

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
  </Layout>
</template>
<script src="https://player.vimeo.com/api/player.js"></script>
<script>
import Landing from "../components/Landing.vue"


export default {
  data() {
    return {
      formData: {},
      successMessage: null,
      messageColor: null
    };
  },
  components: {
    Landing
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
  metaInfo() {
    return {
      title: this.$context.node.meta_title
    };
  }
};
</script>
<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
$yellow: #FFC700;
$blue: #5751FE;
$purple: #A25AFF;
$red: #F24F1F; 
$green: #0FAA58; 
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
.maxWidthWrapper {
  max-width: 1280px;
  margin: 0 auto;
  @media screen and (max-width: 1600px) {
    padding: 1.5rem;
  }
  box-sizing: border-box; 
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
.wireframes {
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-direction: column;
  h4 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100%;
    object-position: top center;
    object-fit: contain;
    margin: 0;
  }
}
.imgPrev {
  width: 100%;
  margin: 0 auto;
  display: block;
}
.maxWidthWrapper {
  max-width: 1400px;
  margin: auto;
}
.banner {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding-bottom: 3rem;
  padding-top: 10rem;
  padding-left: 2rem;
  margin: 0 auto;
}
.goback {
  text-align: center;
  display: block;
  width: auto;
  margin: auto;
  font-family: "Rubik", sans-serif;
  color: #fff;
}

.frameWrapper {
  background: black;
}
.banner h1 {
  font-size: 45px;
  text-align: left;
  width: 100%;
}
.colLeft p,
.colRight p {
  font-size: 18px;
  line-height: 33px;
}
.colDetails {
  display: flex;
  flex-direction: row;
  padding: 3rem 0;
}
.colLeft {
  padding: 0 2rem;
  box-sizing: border-box;

}
.colRight {
  padding: 0 2rem;
  box-sizing: border-box;
}
.colRight ul {
  list-style-type: none;
  padding-left: 0.5rem;
  margin: 2rem 0;
}
.colRight ul li {
  font-size: 16px;
  margin-top: 0.5rem;
  line-height: 27px;
}
@media screen and (max-width: 1180px) {
  .colRight {
    width: 50%;
  }
}
@media screen and (max-width: 800px) {
  .colRight,
  .colLeft {
    width: 100%;
    padding: 0 2rem;
  }
  .colDetails {
    display: flex;
    flex-direction: column;
  }
}
.colLeft h4,
.colRight h4 {
  margin-bottom: 0.5rem;
  font-size: 24.48px;
  font-weight: bold;
}
#frameContainer {
  max-width: 1000px;
  margin: auto;

}
#frameContainer.alt {
    height: 500px;
    overflow-y: auto;

}

@media screen and (max-width: 960px) {
  .banner h1 {
    font-size: 38px;
    text-align: left;
    width: 100%;
  }
  .banner {
    padding-bottom: 3rem;
    padding-top: 8rem;
    padding-left: 2rem;
  }
}
</style>
