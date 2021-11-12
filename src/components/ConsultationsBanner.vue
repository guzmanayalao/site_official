<template>
  <section id="consultationsBanner">
    <div class="maxWidthWrapper">
      <p>Our consultations are 100% free. Hablamos espanol. 👉</p>
      <button>Schedule Consultation</button>
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
#consultationsBanner {
  background: #000;
  padding: 2rem;
  margin: 0 45px;
}

#consultationsBanner .maxWidthWrapper {
  display: flex;
  justify-content: space-between;
  color: #fff; 
  align-items: center;

}
#consultationsBanner p {
  font-size: 24px;
}
#partnersBanner img{
  height: 50px; 
  width: auto;
  filter: grayscale(1);
}
</style>
