<template>
  <div>
    <div class="maxWidthWrapper-large">
      <h2 class="large underline underline--blue">Trusted By:</h2>
    </div>
    <section id="partnersBanner">
      
      <div class="maxWidthWrapper-large">
        <g-image src="../../static/uploads/LOGO@2x.png" alt=""></g-image>
        <g-image src="../../static/uploads/figma/gll.svg" alt=""></g-image>
        <p class="textImg" style="font-weight: 900; text-transform: uppercase; color: gray">Dedicated Runners</p>

        <g-image style="filter: invert(1)" src="../../static/uploads/figma/aaii.png" alt=""></g-image>
        <!-- <g-image style="filter: invert(1)"  src="../../static/uploads/figma/belniak.png" alt=""></g-image> -->
        <g-image src="../../static/uploads/figma/SSR.png" alt=""></g-image>

        <g-image src="../../static/uploads/figma/DI.png" alt=""></g-image>

      </div>
      
    </section>
  </div>

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

<style lang="scss">
#partnersBanner {
  background: #fff;
  padding: 2rem;
}

 .maxWidthWrapper-large {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 1.5rem;
  @media screen and (max-width: 1000px) {
    justify-content: center;
    img, p.textImg {
      flex-basis: 50%;
      margin-bottom: 2rem;
      text-align: center;
    }
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    img, p.textImg {
      flex-basis: 50%;
      margin-bottom: 2rem;
      text-align: center;
      margin-right: 0 !important;
    }
  }
}
#partnersBanner img{
  height: auto; 
  max-width: 150px;
  filter: grayscale(1);
  opacity: .7;
  object-fit: contain;
  margin-right: 2rem;
  
}
#partnersBanner img:hover{

  filter: grayscale(0);
  opacity: 1;
}
</style>
