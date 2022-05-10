<template>
  <section id="partnersBanner">
    <div class="maxWidthWrapper-large">
      <g-image style="filter: invert(1)" src="../../static/uploads/figma/aaii.png" alt=""></g-image>
      <!-- <g-image src="../../static/uploads/figma/acl.svg" alt=""></g-image> -->
      <g-image src="../../static/uploads/figma/gll.svg" alt=""></g-image>
      <!-- <g-image style="filter: invert(1)"  src="../../static/uploads/figma/belniak.png" alt=""></g-image> -->
      <g-image src="../../static/uploads/figma/SSR.png" alt=""></g-image>
      <g-image src="../../static/uploads/LOGO@2x.png" alt=""></g-image>

      <g-image src="../../static/uploads/figma/DI.png" alt=""></g-image>

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
#partnersBanner {
  background: #fff;
  padding: 2rem;
}
#partnersBanner .maxWidthWrapper-large {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  overflow-x: auto;

}
#partnersBanner img{
  height: auto; 
  max-width: 100px;
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
