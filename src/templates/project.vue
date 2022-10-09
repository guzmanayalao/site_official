<template>
  <Layout>

    <Landing :alt="true" :altData="$context.node.title"></Landing>

    <div class="maxWidthWrapper colDetails">
      <div class="colLeft">
        <h4>Services &amp; Technology:</h4>
        <p v-html="$context.node.scope"></p>
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
      <div class="wireframes"  v-if="$context.node.short_image || $context.node.image">
        <h4>Final Design</h4>

        <g-image class="imgPrev" :src="$context.node.short_image" v-if="$context.node.short_image"></g-image>
        <g-image class="imgPrev" :src="$context.node.image" v-if="$context.node.image"></g-image>

      </div>
    </div>
    <g-link class="goback" to="/#ourResults"><button>Go Back</button></g-link>

    <ContactForm></ContactForm>

  </Layout>
</template>
<script src="https://player.vimeo.com/api/player.js"></script>
<script>
import Landing from "../components/Landing.vue"
import ContactForm from "../components/ContactForm.vue"


export default {
  data() {
    return {

    };
  },
  components: {
    Landing,
    ContactForm
  },
  methods: {
    
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
    margin: 0 0 2rem 0;
    border: 1px solid #efefef;
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
