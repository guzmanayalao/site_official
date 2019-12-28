<template>
  <section id="ourServices">
    <div class="maxWidthContainer">
      <div id="ourServicesContent">
        <h2>Our Services</h2>
        <p>
          We specialize in results-driven branding, web development, and digital
          marketing. Let's make sure your business's online needs and campaigns
          are met with intention and strategy.
        </p>
      </div>
    </div>
    <div class="maxWidthContainer">
      <div id="ourServicesDescriptions">
        <div class="descriptionItem" id="description_webDevelopment">
          <h3><font-awesome icon="code" />Web Development</h3>
          <p>
            We understand compatibility and SEO. Yes, we use the latest and
            greatest in tech, but we never put that ahead of your potential
            customers. We offer compatible, modern, and fast solutions.
          </p>
        </div>
        <div class="descriptionItem" id="description_webDesign">
          <h3>
            <font-awesome icon="palette" />
            Web Design &amp; Branding
          </h3>
          <p>
            Your business needs quality design and branding that communicates
            your message appropriately. Whether you need a logo or an E-Commerce
            website design, we can help you.
          </p>
        </div>
        <div class="descriptionItem" id="description_marketing">
          <h3>
            <font-awesome icon="search-dollar" />
            Digital Marketing
          </h3>
          <p>
            A website isn't any good if people can't find it. We offer E-mail,
            Google Ads (Search and Display), Facebook, Instagram, Twitter, and
            SnapChat marketing with advanced analytics.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
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

<style>
#ourServices {
  margin: 6rem auto;
}
#ourServices .maxWidthContainer:first-of-type {
  text-align: center;
  max-width: 1000px;
  padding: 0px 75px 0 75px;
}

#ourServices .maxWidthContainer #ourServicesDescriptions {
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0px 75px 0 75px;
  justify-items: center;
}
#ourServicesContent {
  font-family: "Rubik";
}
#ourServicesContent h2 {
  font-size: 40px;
}
#ourServicesContent p {
  font-size: 18px;
  line-height: 32px;
}
.descriptionItem p {
  line-height: 27px;
}
@media screen and (max-width: 1024px) {
  #ourServices .maxWidthContainer:first-of-type {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 0px 30px;
  }
  #ourServicesImage img {
    max-width: 310px;
  }
  #ourServices .maxWidthContainer #ourServicesDescriptions {
    grid-template-columns: 1fr;
    padding: 0px 30px;
  }
}
@media screen and (max-width: 640px) {
  #ourServicesContent {
    margin-top: 45px;
  }
  #ourServicesContent p {
    text-align: left;
  }
  #ourServices {
    margin: 4rem auto;
  }
}
@media screen and (max-width: 400px) {
  #ourServices #ourServicesContent h1 {
    font-size: 30px;
    line-height: 37px;
  }
}
#ourServicesImage img {
  width: 100%;
}

.descriptionItem {
  max-width: 300px;
}

@media screen and (max-width: 1024px) {
  .descriptionItem {
    max-width: 100%;
    margin-right: 0;
  }
}

#description_webDevelopment svg,
#description_marketing svg {
  color: #ff00bb;
  margin-right: 0.25rem;
}
#description_webDesign svg {
  color: #00fff6;
  margin-right: 0.25rem;
}
</style>
