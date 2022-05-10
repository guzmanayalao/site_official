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
        <h4>TLDR;</h4>
        <p>
          {{ $context.node.tldr }}
        </p>
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
        <g-link class="goback" to="/#ourResults"><button>Go Back</button></g-link>

      </div>
    </div>
  </Layout>
</template>
<script src="https://player.vimeo.com/api/player.js"></script>
<script>
import Landing from "../components/Landing.vue"


export default {
  data() {
    return {};
  },
  components: {
    Landing
  },
  metaInfo() {
    return {
      title: this.$context.node.meta_title
    };
  }
};
</script>
<style scoped>
#imgPrev {
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
}
.colRight {
  padding: 0 2rem;
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
