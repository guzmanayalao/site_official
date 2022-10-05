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
          <span>Site | Web Design &amp; Marketing Agency</span>
        </g-link>
        <div class="desktopNav">
          <a href="/#ourServices" 
            >Services</a
          >
          <a href="/#ourResults">Results</a>
          
          <a href="/#ourMission" 
            >Testimonials</a
          >
          <a href="/#contactUs" 
            >Contact</a
          >
        </div>
        <div class="mobileNav">
          <font-awesome icon="bars" @click="mobileMenuOpen = true" v-if="!mobileMenuOpen"></font-awesome>
          <font-awesome icon="times" @click="mobileMenuOpen = false" v-else></font-awesome>
          <div class="mobileNav--content" :style="mobileMenuOpen ? 'display: flex' : 'display: none'">
            <a href="#ourServices" 
               @click="mobileMenuOpen = false">Services</a
            >
            <a href="#ourResults" @click="mobileMenuOpen = false">Results</a>
            
            <a href="#ourMission" 
               @click="mobileMenuOpen = false">Testimonials</a
            >
            <a href="/#contactUs" 
              >Contact</a
            >
          </div>
        </div>
      </div>
    </nav> 
  
   
    

    <transition name="fade" appear>
        <main> <!-- a wrapper for slot is needed -->
          <slot /> <!-- the content -->
        </main>
      </transition>
    <!-- the content -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

$yellow: #FFC700;
$blue: #5751FE;
$purple: #A25AFF;
$red: #F24F1F; 
$green: #0FAA58; 

html {
  scroll-behavior: smooth;
}
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
.desktopNav {
  @media screen and (max-width: 700px) {
    display: none;
  }
}
.mobileNav {
  &--content {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    z-index: -1;
    margin-top: 72px;
    padding: 2rem 2rem;
    display: flex;
    flex-direction: column;
    a {
      padding: 1rem;
      border-bottom: 1px solid #000;
    }
  }
  @media screen and (min-width: 700px) {
    display: none;
  }

}
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
  @media screen and (max-width: 1600px) {
    top: 15px;
    right: 15px;
    left: 15px;
    bottom: 15px;    
  }
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
nav span {
  @media screen and (max-width: 700px) {
    font-size: 12px;
  }
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
  @media screen and (max-width: 1600px) {
    padding: 1rem;
  }
}
p.large {
  font-size: 20px;
  line-height: 34px;
  max-width: 680px;
  @media screen and (max-width: 700px) {
    font-size: 17px;
    line-height: 30px;
  }
}
p {
  font-size: 16px;
  line-height: 28px;
}
h2.large {
  font-size: 64px;
  font-weight: 900;
  margin-bottom: 30px;
  letter-spacing: -2.2px;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
}
.underline {
  position: relative;
}
.underline::after {
  content: '';
  height: 18px;
  width: 65px;
  position: absolute;
  left: 0;
  bottom: 7px; 
  z-index: -1;
  @media screen and (max-width: 700px) {
    height: 10px;
    width: 20px;
    bottom: 3px;
  }
}
.underline.underline--yellow::after {
  background: $yellow;
}
.underline.underline--blue::after {
  background: $blue;
}
.underline.underline--red::after {
  background: $red;
}
.underline.underline--purple::after {
  background: $purple;
}
.underline.underline--green::after {
  background: $green;
}
</style>
