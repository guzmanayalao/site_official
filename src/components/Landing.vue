<template>
  <section id="landing" :class="[ alt ? 'alt' : '']">
    <div class="maxWidthWrapper">
      <div class="landing--content">
        <h1 v-if="alt">Case Study: {{ altData }} </h1>
        <h1 v-else>{{ $static.homepage.headline }}</h1>

        <button>contact us</button>
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

<style>
button {
  background: #fff;
  box-shadow: 7px 7px 0 0px #000;
  padding: .2rem 1rem;
  font-weight: 800;
  letter-spacing: -.5px;
  cursor: pointer;
  transition: all .2s;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  margin-top: 0 !important;
}
button:hover {
  transform: translateY(-3px);
  box-shadow: 10px 10px 0 0px #000;
}
#landingShapes {
  margin-bottom: -95px;
  z-index: 0;
  position: relative;
}
h1 {
  font-family: "Inter", sans-serif;
  font-weight: 800;
  font-size: 36px;
  max-width: 685px;
  letter-spacing: -.5px;
  color: #fff;
  line-height: 50px;
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
