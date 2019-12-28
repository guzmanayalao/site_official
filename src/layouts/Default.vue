<template>
  <div>
    <nav @scroll="navShrink" v-if="!navIsMobile">
      <div class="maxWidthContainer" :style="{ height: navHeight + 'px' }">
        <g-link to="/">
          <g-image
            id="navLogo"
            src="../../static/uploads/site.png"
            alt="Site logo"
            :style="{ padding: navPadding + 'px', height: navHeight + 'px' }"
          >
          </g-image>
        </g-link>

        <a href="#ourResults" :style="{ opacity: navItemOpacity }">Results</a>
        <a href="#ourServicesAnchor" :style="{ opacity: navItemOpacity }"
          >Services</a
        >
        <a href="#ourMissionAnchor" :style="{ opacity: navItemOpacity }"
          >Testimonials</a
        >
        <!-- <div id="searchBarContainer" :style="{ opacity: navItemOpacity }">
          <input type="text" />
          <font-awesome :icon="['fas', 'search']" />
        </div> -->

        <!-- <div id="searchBarContainerMobile">
            <input type="text">
            <span class="icon"></span>
            <font-awesome :icon="['fas', 'search']"/>

          </div> -->
      </div>
    </nav>
    <transition name="fade" v-if="!navIsMobile">
      <div
        id="floatingMenu"
        class="floatMenuDefault"
        v-if="displayFloatingMenu"
        @click="hamburgerOpen = !hamburgerOpen"
      >
        <div id="nav-icon2-wrapper">
          <div id="nav-icon2" :class="{ open: hamburgerOpen }">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </transition>
    <div id="floatingMenu" class="floatMenuDefault" v-else>
      <div id="nav-icon2-wrapper">
        <div
          id="nav-icon2"
          :class="{ open: hamburgerOpen }"
          @click="hamburgerOpen = !hamburgerOpen"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <transition name="fullscreen">
      <div id="fullscreenMenu" v-if="hamburgerOpen">
        <nav>
          <a href="/" @click="hamburgerOpen = !hamburgerOpen">Home</a>
          <a href="#ourResults" @click="hamburgerOpen = !hamburgerOpen"
            >Results</a
          >
          <a href="#ourServicesAnchor" @click="hamburgerOpen = !hamburgerOpen"
            >Services</a
          >
          <a href="#ourMissionAnchor" @click="hamburgerOpen = !hamburgerOpen"
            >Testimonials</a
          >
        </nav>
      </div>
    </transition>
    <!-- a wrapper for slot is needed -->
    <slot />
    <!-- the content -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      navHeight: "",
      navItemOpacity: "",
      navPadding: "",
      lastScrollPos: window.pageYOffset,
      currScrollPos: "",
      displayFloatingMenu: false,
      navIsMobile: false,
      hamburgerOpen: false,
      fullscreenMenuIsOpen: false
    };
  },
  methods: {
    navShrink(event) {
      console.log("shrink");
      // this.currScrollPos = window.pageYOffset;

      // if(this.lastScrollPos < this.currScrollPos){
      //   this.navHeight = 0;
      // } else {
      //   this.navHeight = 100;
      // }
      // this.lastScrollPos = this.currScrollPos;
      if (window.pageYOffset >= 0 && window.pageYOffset <= 500) {
        this.navHeight = 100 - window.scrollY;
        this.navPadding = window.pageYOffset / 1;

        if (this.navHeight < 20) {
          this.navHeight = 0;
        }
        if (window.scrollY > 300) {
          this.navPadding = 0;
        }
      }
      if (this.fullscreenMenuIsOpen) {
        this.displayFloatingMenu = true;
      }
      if (
        (window.pageYOffset >= 100 && window.innerWidth >= 1024) ||
        this.hamburgerOpen
      ) {
        this.displayFloatingMenu = true;
      } else {
        this.displayFloatingMenu = false;
      }
      if (window.pageYOffset > 2) {
        this.navItemOpacity = 1 / (window.pageYOffset * 0.2);
        if (window.pageYOffset >= 49) {
          this.navItemOpacity = 0;
        }
      } else {
        console.log("2 or less");
        this.navItemOpacity = 1;
      }
    },
    checkScrollPos(event) {
      this.lastScrollPos = window.pageYOffset;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.navShrink, false);
    if (window.innerWidth <= 1024) {
      this.navIsMobile = true;
    }
  },
  created() {}
};
</script>

<style>
:root {
  --dark-blue: rgb(0, 32, 65);
}
* {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}

body {
  font-family: "Rubik";
  margin: 0;
  padding: 0;
  background: rgb(0, 32, 46);
  background: url("../../static/uploads/graphy-dark.png"),
    radial-gradient(circle, rgb(21, 32, 43) 0%, rgba(0, 0, 0, 1) 85%);
  color: white;
}
body p {
  font-size: 17px;
  line-height: 27px;
}
h2 {
  margin-bottom: 25px;
}
@media screen and (max-width: 1024px) {
  body {
    background: url("../../static/uploads/graphy-dark.png"),
      radial-gradient(circle, rgb(21, 32, 43) 60%, rgba(0, 0, 0, 1) 100%);
  }
}
#navLogo {
  max-width: 83px;
  max-height: 74px;
}
#app > nav {
  position: fixed;
  width: 100%;
  z-index: 10;
}
#app > nav .maxWidthContainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 2fr;
  grid-template-rows: 100%;
  align-items: center;
  justify-items: center;
  font-family: "Rubik";
  font-weight: bold;
  height: 100px;
}
#app > nav a {
  color: #fff;
  text-decoration: none;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#searchBarContainer > input {
  background: none;
  border: none;
  color: #fff;

  outline: none;
}
#searchBarContainer {
  padding: 0.5rem 1rem;
  border-radius: 10px;
}
#searchBarContainerMobile {
  display: none;
}
/* #menuButton {
  display: none; 
} */
.projectAnimation-enter-active {
  transition: opacity 5s;
}

.projectAnimation {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(calc(100% + 2rem));
}
.floatMenuDefault {
  position: fixed;
  right: 0;
  transition: all 0.3s;
  background: linear-gradient(
    0deg,
    rgba(0, 255, 246, 1) 0%,
    rgba(255, 0, 187, 1) 70%
  );
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  display: flex;
  margin: 2rem;
  z-index: 10;
  border-radius: 50%;
}

@media screen and (max-width: 1024px) {
  #app > nav > div > a {
    display: none;
  }
  #menuButton {
    display: initial;
  }
  #searchBarContainer {
    display: none;
  }
  #app > nav .maxWidthContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100%;
    align-items: center;
    font-family: "Rubik";
    font-weight: bold;
    height: 100px;
  }
}
/* Nav Icon */

#nav-icon2-wrapper {
  height: 40px;
  width: 80px;
  transform: scale(0.5);
}

#nav-icon2 span {
  display: block;
  position: absolute;
  height: 7px;
  width: 50%;
  background: #fff;
  opacity: 1;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#nav-icon2 span:nth-child(even) {
  left: 50%;
  border-radius: 0 9px 9px 0;
}

#nav-icon2 span:nth-child(odd) {
  left: 0px;
  border-radius: 9px 0 0 9px;
}

#nav-icon2 span:nth-child(1),
#nav-icon2 span:nth-child(2) {
  top: 0px;
}

#nav-icon2 span:nth-child(3),
#nav-icon2 span:nth-child(4) {
  top: 18px;
}

#nav-icon2 span:nth-child(5),
#nav-icon2 span:nth-child(6) {
  top: 36px;
}

#nav-icon2.open span:nth-child(1),
#nav-icon2.open span:nth-child(6) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon2.open span:nth-child(2),
#nav-icon2.open span:nth-child(5) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon2.open span:nth-child(1) {
  left: 5px;
  top: 8px;
}

#nav-icon2.open span:nth-child(2) {
  left: calc(50% - 5px);
  top: 8px;
}

#nav-icon2.open span:nth-child(3) {
  left: -50%;
  opacity: 0;
}

#nav-icon2.open span:nth-child(4) {
  left: 100%;
  opacity: 0;
}

#nav-icon2.open span:nth-child(5) {
  left: 5px;
  top: 25px;
}

#nav-icon2.open span:nth-child(6) {
  left: calc(50% - 5px);
  top: 25px;
}
#fullscreenMenu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 255, 246, 1) 0%,
    rgba(255, 0, 187, 1) 100%
  );
  z-index: 2;
}
#fullscreenMenu nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}
#fullscreenMenu nav a {
  font-family: "Rubik";
  font-size: 30px;
  font-weight: 700;
  color: white;
  text-decoration: none;
  border-bottom: 10px solid white;
  margin-bottom: 10px;
}
.fullscreen-enter-active,
.fullscreen-leave-active {
  transition: all 0.35s;
}
.fullscreen-enter, .fullscreen-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: scale(0);
  opacity: 0;
}

#loadingScreen {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes loadingAnimation {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.loadingAnimation {
  animation-name: loadingAnimation;
  animation-duration: 2s;
}
</style>
