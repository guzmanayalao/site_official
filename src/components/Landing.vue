<template>
  <section id="landing" :class="[ alt ? 'alt' : '']">
    <div class="maxWidthWrapper">
      <div class="landing--content">
        <h1 v-if="alt">Case Study: {{ altData }} </h1>
        <h1 v-else>{{ $static.homepage.headline }}</h1>

        <button><a href="#contactUs">Contact Us</a></button>
      </div>
      <g-image v-if="!alt" id="landingShapes" src="../../static/uploads/figma/landingShapes.svg"></g-image>
    </div>
  </section>
</template>
<static-query>
query {
  homepage(id: "1") {
    headline
  } 
}
</static-query>
<script>
export default {
  data() {
    return {
      translateVal: 0
    };
  },
  props: ['alt', 'altData'],
  methods: {},
  mounted() {
    // window.addEventListener('scroll', this.handleScroll);
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

$yellow: #FFC700;
$blue: #5751FE;
$purple: #A25AFF;
$red: #F24F1F; 
$green: #0FAA58; 
button {
  background: #fff;
  box-shadow: 7px 7px 0 0px #000;
  padding: .35rem 1rem;
  font-weight: 700;
  letter-spacing: -.5px;
  cursor: pointer;
  transition: all .2s;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  margin-top: 0 !important;
  &--yellow {
    background: $yellow;
  }
  a {
    &:link, &:hover, &:visited {
      text-decoration: none;
      color: #000;
    }

  }
}
button:hover {
  transform: translateY(-3px);
  box-shadow: 10px 10px 0 0px #000;
}
#landingShapes {
  margin-bottom: -95px;
  z-index: 0;
  position: relative;
  width: 50%;
}
h1 {
  font-family: "Inter", sans-serif;
  font-weight: 800;
  font-size: 36px;
  max-width: 685px;
  letter-spacing: -.5px;
  color: #fff;
  line-height: 50px;
  @media screen and (max-width: 600px) {
    font-size: 22px; 
    letter-spacing: -.2px;
    line-height: 30px;
  }
}
#landing {
  background: #5751fe;
  height: 485px;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  background-image: url('../../static/uploads/figma/grid.svg');
  background-repeat: no-repeat;
  margin-top: 4rem; 
  
}
@media screen and (max-width: 600px) {
  section#landing {
    margin: 2rem 3rem -1rem .5rem;
  } 
  section#landing::before {
    right: -29px;
  }
  section#landing::after {
    width: 30px !important;
    right: -30px !important;
    bottom: -5px !important;

  }
  
}
@media screen and (max-width: 1600px) {
  #landing {
    padding: 1rem .5rem;
    box-sizing: border-box;
    margin: 2rem 4rem 0 2rem;

  }
  #landing::after {
    bottom: -10px !important;
  }
}

@media screen and (max-width: 1200px) {
  #landingShapes {
    margin-bottom: 0;
  }
}
@media screen and (max-width: 1000px) {
  #landingShapes {
    display: none;
  }
}
#landing.alt {
  height: 290px; 
  padding: 0 3rem;
  margin-bottom: 6rem;
}
#landing .maxWidthWrapper {
  display: flex;
  align-items: flex-end;
  height: 100%;
}
#landing::after {
  content: '';
  background: url('../../static/uploads/figma/Vector 6.svg');
  width: 35px;
  bottom: -39px;
  top:0;
  position: absolute;
  background-repeat: no-repeat;
  right: -35px;
}
#landing::before {
  content: '';
  background: url('../../static/uploads/figma/Vector 1.svg');
  height: 40px;
  bottom: -40px;
  position: absolute;
  right: -35px;
  left: 0;
  background-repeat: no-repeat;
  background-size: 100%;
}
.landing--content {
  margin-bottom: 2rem;
}
</style>
