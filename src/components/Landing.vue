<template>
  <section id="landing">
    <div class="maxWidthContainer">
      <div id="landingContent">
        <h1>We'll create and manage your business's online&nbsp;presence.</h1>
        <div class="buttonWrapper">
          <g-link to="/#ourServicesAnchor"
            ><button class="m1">View Services</button></g-link
          >
          <g-link to="/#contact"><button>Contact Us</button></g-link>
        </div>
      </div>
      <div id="landingImage">
        <g-image src="../../static/uploads/3d-Logo.png"></g-image>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      translateVal: 0
    };
  },
  methods: {},
  mounted() {
    // window.addEventListener('scroll', this.handleScroll);
  }
};
</script>

<style>
section {
  position: relative;
}
a,
button {
  cursor: pointer;
}
#landing .maxWidthContainer {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  align-items: center;
  padding: 195px 75px 0 75px;
}
@media screen and (max-width: 1024px) {
  #landing .maxWidthContainer {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 100px 30px;
  }

  #landingImage img {
    max-width: 310px;
  }
}
@media screen and (max-width: 640px) {
  #landingImage {
    margin: auto;
  }
  #landingContent {
    margin-top: 45px;
    text-align: center;
  }
}
@media screen and (max-width: 400px) {
  #landing #landingContent h1 {
    font-size: 30px;
    line-height: 37px;
  }
}
#landingContent h1 {
  font-size: 40px;
  line-height: 47px;
  font-family: "Rubik";
}
#landingImage img {
  width: 100%;
}
@media screen and (max-width: 400px) {
  .buttonWrapper button.m1 {
    margin-right: 0;
    margin-bottom: 1rem;
  }
  .buttonWrapper {
    display: flex;
    flex-direction: column;
  }
}
</style>
