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
}

#consultationsBanner .maxWidthWrapper {
  display: flex;
  justify-content: space-between;
  color: #fff; 
  align-items: center;

}
#consultationsBanner button {
  background: $purpleLight;
  box-shadow: 5px 5px 0 0 #fff;
  &:hover {
    box-shadow: 10px 10px 0 0 #fff;
    
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
