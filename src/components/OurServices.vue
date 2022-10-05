<template>
  <section id="ourServices">
    
    <div class="maxWidthWrapper">
      <h2 class="large underline underline--green">Services</h2>
      <div id="ourServicesDescriptions">
        <g-image id="shapesBlue" src="../../static/uploads/figma/shapesBlue.svg"></g-image>
        <div class="descriptionItem" id="description_webDevelopment" v-for="(edge, i) in $static.allServices.edges" :key="i">
          <h3> {{ edge.node.service_headline }} </h3>
          <p>
            {{ edge.node.service_content }} 
          </p>
        </div>
            
        <!-- <div class="descriptionItem" id="description_webDevelopment">
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
           <button>See How</button> 
        </div> -->
      </div> 
      <!-- <button>See A List of All Services</button> -->
    </div>
  </section>
</template>
<static-query>
query {
  allServices: allServices(sortBy: "service_order", order: ASC) {
    edges {
      node {
        service_headline
        service_content
      }
    }
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
    // console.log(this.$static)
    // window.addEventListener('scroll', this.handleScroll);
  }
};
</script>

<style lang="scss">
#shapesBlue {
  position: absolute;
  top: 0px;
  left: -260px;
  z-index: -1;
}
#ourServices {
  margin: 135px 0;
  @media screen and (max-width: 600px) {
    margin: 50px 0;
  }
}
#ourServices .maxWidthWrapper {
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
  padding: 1.25rem 1.5rem;
  margin-right: 4rem;
  gap: 30px;
  flex-grow: 1;
  flex-basis: calc( (100% - 12rem) / 3 ); 
  margin-bottom: 3rem;
  box-sizing: border-box;
  button {
    margin-bottom: 2rem !important;
  }
  h3 {
    margin-top: 0;
  }
  @media screen and (max-width: 700px) {
      flex-basis: 100%;
      margin-bottom: 3rem;
      margin-right: 1rem;
  }
}
// .descriptionItem:last-of-type {
//   flex-grow: 3;
//   flex-basis: 100%; 
   
//   @media screen and (max-width: 700px) {
//     margin-top: 0;
//   }
// }
#ourServices .maxWidthWrapper > button {
  margin: 4rem auto 0 auto !important;
  display: block;
  @media screen and (max-width: 700px) {
    margin-top: 1rem;
  }

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
