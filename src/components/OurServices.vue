<template>
  <section id="ourServices">
    
    <div class="maxWidthWrapper">
      <h2 class="large underline underline--green">Services</h2>
      <div id="ourServicesDescriptions">
        <g-image id="shapesBlue" src="../../static/uploads/figma/shapesBlue.svg"></g-image>
        <div class="descriptionItem" id="description_webDevelopment">
          <h3> {{ $static.homepage.service1_headline }} </h3>
          <p>
            {{ $static.homepage.service1_content }} 
          </p>
        </div>
        <div class="descriptionItem" id="description_webDesign">
          <h3>
            {{ $static.homepage.service2_headline }} 
          </h3>
          <p>
            {{ $static.homepage.service2_content }} 
          </p>
        </div>
        <div class="descriptionItem" id="description_marketing">
          <h3>
            {{ $static.homepage.service3_headline }} 
          </h3>
          <p>
           {{ $static.homepage.service3_content }} 
          </p>
        </div>
        <div class="descriptionItem" id="description_marketing">
          <h3>
            {{ $static.homepage.service4_headline }} 
          </h3>
          <p class="large" style="max-width:unset">
            {{ $static.homepage.service4_content }} 
          </p>
          <!-- <button>See How</button> -->
        </div>
      </div>
      <button>See A List of All Services</button>
    </div>
  </section>
</template>
<static-query>
query {
  homepage(id: "1") {
    service1_headline
    service2_headline
    service3_headline
    service4_headline
    service1_content
    service2_content
    service3_content
    service4_content
  } 
}
</static-query>
<script>
export default {
  data() {
    return {
      ourServicesMobile: false
    };
  },
  methods: {},
  mounted() {
    // window.addEventListener('scroll', this.handleScroll);
  }
};
</script>

<style lang="scss">
#shapesBlue {
  position: absolute;
  top: 0px;
  left: -20px;
  z-index: -1;
}
#ourServices {
  margin: 135px 0;
  position: relative;
}
#ourServicesDescriptions {
  display: flex;
  flex-wrap: wrap;
}
.descriptionItem {
  position: relative;
  background: #fff;
  border: 4px solid #000;
  padding: 1rem 2rem;
  margin-right: 4rem;
  flex-grow: 1;
  flex-basis: calc( 100px / 3 ); 
  button {
    margin-bottom: 2rem !important;
  }
}
.descriptionItem:last-of-type {
  flex-grow: 3;
  flex-basis: 100%; 
  margin-top: 4rem; 
  
}
#ourServices .maxWidthWrapper > button {
  margin: 4rem auto 0 auto !important;
  display: block;

}
.descriptionItem::after {
  width: 20px;
  position: absolute;
  top: -4px;
  bottom: -4px;
  right: -24px;
  content: '';
  background-repeat: no-repeat;
  background: url("../../static/uploads/figma/Vector 6.svg")
}
.descriptionItem::before {
  height: 20px;
  position: absolute;
  bottom: -24px;
  right: -24px;
  left: -4px;
  content: '';
  background-repeat: no-repeat;
  background: url("../../static/uploads/figma/Vector 1.svg")
}

h3 {
  font-size: 24px;
  font-weight: 900;
  font-family: "Inter", sans-serif;
}
</style>
