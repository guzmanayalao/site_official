<template>
  <section id="consultationsBanner">
    <div class="maxWidthWrapper">
      <p>Our consultations are 100% free. Hablamos espanol. 👉</p>
      <button><a href="#contactUs">Schedule Consultation</a></button>
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

<style lang="scss">

$yellow: #FFC700;
$blue: #5751FE;
$purple: #A25AFF;
$purpleLight: #C5B9FF;
$red: #F24F1F; 
$green: #0FAA58; 

#consultationsBanner {
  background: #000;
  padding: 2rem;
  margin: 0 45px;
  @media screen and (max-width: 700px) {
    margin: 0;
    padding: 0 0 1rem 0;
  }
}

#consultationsBanner .maxWidthWrapper {
  display: flex;
  justify-content: space-between;
  color: #fff; 
  align-items: center;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
}
#consultationsBanner button {
  background: $purpleLight;
  box-shadow: 5px 5px 0 0 #fff;
  &:hover {
    box-shadow: 10px 10px 0 0 #fff;
    
  }
  @media screen and (max-width: 700px) {
    margin-top: 2rem;
  }
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
