<template>
  <section id="ideas">
    
    <div class="maxWidthWrapper">
      <h2 class="large">Ideas + Posts</h2>
      <div id="ideasDescriptions">
        <div class="descriptionItem" id="description_webDevelopment">
          <h3>Web Development</h3>
          <p>
            We understand compatibility and SEO. Yes, we use the latest and
            greatest in tech, but we never put that ahead of your potential
            customers. We offer compatible, modern, and fast solutions.
          </p>
          <button>See All Services</button>
        </div>
        <div class="descriptionItem" id="description_webDesign">
          <h3>
            Web Design &amp; Branding
          </h3>
          <p>
            Your business needs quality design and branding that communicates
            your message appropriately. Whether you need a logo or an E-Commerce
            website design, we can help you.
          </p>
          <button>See All Services</button>
        </div>
        <div class="descriptionItem" id="description_marketing">
          <h3>
            Digital Marketing
          </h3>
          <p>
            A website isn't any good if people can't find it. We offer E-mail,
            Google Ads (Search and Display), Facebook, Instagram, Twitter, and
            SnapChat marketing with advanced analytics.
          </p>
          <button>See All Services</button>
        </div>
        <div class="descriptionItem" id="description_marketing">
          <h3>
            Digital Marketing
          </h3>
          <p class="large" style="max-width: unset">
            Committing to a new website, logo, or marketing campaign can be frightening and expensive. We promise to make your experience with Site as affordable and as comforting as possible. By keeping a small but highly experienced team, we are able to produce premium quality work thats affordable to our clients and partners.
          </p>
          <button>See How</button>
        </div>
      </div>
      <g-link style="display: flex; justify-content: center; margin-top: 4rem;"><button>See All Posts</button></g-link>
      
    </div>


  </section>
</template>
<script>
export default {
  data() {
    return {
      ideasMobile: false
    };
  },
  methods: {},
  mounted() {
    // window.addEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
#ideas {
  margin: 135px 0;
}
#ideasDescriptions {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2;
  align-items: flex-start;
  justify-content: flex-start;
}
.descriptionItem {
  position: relative;
  background: #fff;
  border: 4px solid #000;
  padding: 1rem 2rem;
  flex-basis: 50%; 
  flex-shrink: 1;
  margin-top: 4rem;

}
.descriptionItem:last-of-type {
  margin-top: 4rem; 
  flex-basis: 20%; 
  flex-shrink: 1;

  
}
.descriptionItem button {
  margin-top: 4rem;
  margin-bottom: 2rem;
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
