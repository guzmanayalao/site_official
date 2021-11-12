<template>
  <div>

    <nav>
      <div class="maxWidthWrapper-lg">
        <g-link class="siteLogo" to="/">
          <g-image
            id="navLogo"
            src="../../static/uploads/figma/siteSmall.svg"
            alt="Site logo"
          >
          </g-image> 
          <span>Site, LLC</span>
        </g-link>
        <div>
          <a href="/#ourResults">Results</a>
          <a href="/#ourServicesAnchor" 
            >Services</a
          >
          <a href="/#ourMission" 
            >Testimonials</a
          >
        </div>
        
      </div>
    </nav>
  
   
    

    <!-- a wrapper for slot is needed -->
    <slot />
    <!-- the content -->
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  methods: {
      
  },
  mounted() {
    // window.sntchChat.Init(86171);
  },
  created() {}
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

body {
  overflow-x: hidden;
  font-family: 'Inter', sans-serif;
  letter-spacing: -.5px;
  margin: 0;
  position: relative;
}
body::before {
  content: '';
  background: #f9f9f9;
  position: absolute;
  top: 45px;
  right: 45px;
  left: 45px;
  bottom: 45px;
  height: 100%;
  z-index: -100;
}
.siteLogo {
  display: flex;
  align-items: center;
}
.siteLogo img {
  margin-right: .5rem;
}
nav {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 1;
}
nav a {
  margin-right: 1rem;
  font-weight: 800;
} 
nav a, nav a:link {
  text-decoration: none;
  color: #000;
}
.maxWidthWrapper-lg {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  align-items: center;
}
p.large {
  font-size: 20px;
  line-height: 34px;
  max-width: 680px;
}
p {
  font-size: 16px;
  line-height: 28px;
}
h2.large {
  font-size: 64px;
  font-weight: 900;
  margin-bottom: 30px;
  letter-spacing: -1px;
}
.underline {
  position: relative;
}
.underline::after {
  content: '';
  height: 18px;
  width: 70px;
  position: absolute;
  left: 0;
  bottom: 15px; 
  z-index: -1;
}
.underline.underline--yellow::after {
  background: #FFC700;
}
</style>
