<template>
  <section id="ourResults">
    <div class="maxWidthContainer">
      <div class="sliderContainer">
        <div id="ourResultsContent">
          <h2>Our Results</h2>
          <p class="ourResultsHide">
            We practice what we preach. Anything we're doing to grow Site will
            be used to grow your business. (We bet you found us on social media
            or google ads? 😉) We're a new company and we're growing alongside
            you.
          </p>
        </div>

        <div id="ourResultsSlider">
          <article>
            <h3>Belniak Media</h3>
            <div class="projectImageWrapper">
              <g-image src="../../static/uploads/belniak.png"></g-image>
            </div>
            <p class="tags">Web Design &bull; Web Development</p>
            <p>
              As one of our main partners, Belniak Media has trusted us to
              deliver their front development and graphic design ...
            </p>
            <g-link class="readMoreLink" to="/partners/Belniak-Media/"
              >Read More</g-link
            >
          </article>
          <article>
            <h3>Benji</h3>
            <div class="projectImageWrapper">
              <g-image src="../../static/uploads/benji.png"></g-image>
            </div>
            <p class="tags">
              Branding &bull; Web Design &bull; Web Development &bull; Marketing
            </p>

            <p>
              As one of our main partners, Belniak Media has trusted us to
              deliver their front development and graphic design ...
            </p>
            <g-link class="readMoreLink" to="/partners/Benji/"
              >Read More</g-link
            >
          </article>
          <article>
            <h3>ACL, Inc. (B.M)</h3>
            <div class="projectImageWrapper">
              <g-image src="../../static/uploads/belniakProject.png"></g-image>
            </div>
            <p>
              (Contracted by Belniak Media) ACL needed a major website remake.
              Our sister company, Belniak Media, trusted us ...
            </p>
            <g-link class="readMoreLink" to="/partners/ACL/">Read More</g-link>
          </article>
          <article>
            <h3>Enhanced Report Writer (B.M)</h3>
            <div class="projectImageWrapper">
              <g-image src="../../static/uploads/erw.png"></g-image>
            </div>
            <p>
              As one of our main partners, Belniak Media has trusted us to
              deliver their front development and graphic design ...
            </p>
            <g-link class="readMoreLink" disabled>Coming Soon</g-link>
          </article>

          <article>
            <h3>Musella Brain Tumor Foundation</h3>
            <div class="projectImageWrapper">
              <g-image src="../../static/uploads/musella.png"></g-image>
            </div>
            <p>
              As one of our main partners, Belniak Media has trusted us to
              deliver their front development and graphic design ...
            </p>
            <g-link class="readMoreLink" disabled>Coming Soon</g-link>
          </article>
          <article>
            <h3>Great Lakes Lining</h3>
            <div class="projectImageWrapper">
              <g-image
                src="../../static/uploads/greatLakesLining.png"
              ></g-image>
            </div>
            <p>
              As one of our main partners, Belniak Media has trusted us to
              deliver their front development and graphic design ...
            </p>
            <g-link class="readMoreLink" disabled>Coming Soon</g-link>
          </article>

          <article class="cardHidden"></article>
          <article class="cardHidden"></article>
          <article class="cardHidden"></article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ourResultsMobile: false
    };
  },
  methods: {},
  mounted() {
    // window.addEventListener('scroll', this.handleScroll);
  }
};
</script>

<style>
#ourResults {
  overflow: hidden;
}
#ourResults p.tags {
  margin-bottom: 0;
  line-height: 15px;
  font-size: 11px;
}
@media screen and (max-width: 1024px) {
  #ourResults {
    overflow: auto;
  }
}
#ourResultsContent {
  background: #000d1a;
  border-radius: 16px;
  padding: 2rem;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex: 0 0 400px;
  font-family: "Rubik";
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.52);
  border: 1px solid rgb(0, 28, 53);
}
#ourResultsContent h2 {
  font-size: 40px;
}
#ourResultsContent p.ourResultsHide {
  line-height: 29px;
}
.readMoreLink {
  font-weight: bold;

  background: rgb(99, 246, 255);
  background: linear-gradient(
    90deg,
    rgba(99, 246, 255, 1) 0%,
    rgb(255, 0, 234) 50%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
@media screen and (max-width: 1024px) {
  #ourResultsContent {
    flex: 0;
    justify-content: flex-end;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    width: 110px;
  }
  #ourResultsContent h2 {
    margin: 0;
  }
  #ourResultsContent p.ourResultsHide {
    display: none;
  }
  #ourResults .maxWidthContainer {
    padding: 0px 30px !important;
  }
  #ourResults .maxWidthContainer .sliderContainer {
    display: flex;
    width: 100vw;
    padding: 2rem 0;
    max-width: unset;
    padding: 0px !important;
  }
}
#ourResultsContent p {
  margin-top: 0;
  line-height: 28px;
  font-size: 18px;
}

#ourResults .maxWidthContainer {
  display: flex;
  padding: 0px 75px 0 75px;
}

#ourResults .maxWidthContainer .sliderContainer {
  display: flex;
  width: 100vw;
  margin: 0 0 2rem;
  padding: 2rem 0;
  max-width: unset;
  padding: 95px 0px 0 0px;
}

#ourResultsSlider {
  padding: 3rem;
  display: flex;
  overflow-x: scroll;
}
@media screen and (max-width: 1024px) {
  #ourResultsSlider {
    overflow-x: initial;
  }
}
#ourResultsSlider::-webkit-scrollbar,
#ourResults::-webkit-scrollbar {
  height: 1em;
  color: #201c29;
}
#ourResultsSlider::-webkit-scrollbar-button,
#ourResults::-webkit-scrollbar-button {
  width: 20px;
}
#ourResultsSlider::-webkit-scrollbar-track,
#ourResults::-webkit-scrollbar-track {
  background: #000a0e;
  border-radius: 20px;
  margin-right: 400px;
}
@media screen and (max-width: 2000px) {
  #ourResultsSlider::-webkit-scrollbar-track,
  #ourResults::-webkit-scrollbar-track {
    background: #000a0e;
    border-radius: 20px;
    margin-left: 100px;
    margin-right: 100px;
  }
}
@media screen and (max-width: 1500px) {
  #ourResultsSlider::-webkit-scrollbar-track,
  #ourResults::-webkit-scrollbar-track {
    background: #000a0e;
    border-radius: 20px;
    margin-left: 100px;
    margin-right: 100px;
  }
}
#ourResultsSlider::-webkit-scrollbar-thumb,
#ourResults::-webkit-scrollbar-thumb {
  background-color: rgb(23, 43, 63);
  outline: 1px solid slategrey;
  border-radius: 20px;
}
@media screen and (max-width: 1024px) {
  #ourResultsSlider::-webkit-scrollbar-track,
  #ourResults::-webkit-scrollbar-track {
    margin-left: 50px;
    margin-right: 50px;
  }
  #ourResultsSlider::-webkit-scrollbar-button,
  #ourResults::-webkit-scrollbar-button {
    margin-left: 100px;
    margin-right: 100px;
  }
  .sliderContainer #ourResultsSlider article {
    min-width: 230px;
  }
}
#ourResultsSlider article {
  min-width: 330px;
  min-height: 350px;
  padding: 1.5rem;
  border-radius: 16px;
  background: #000d1a;
  border: 1px solid rgb(1, 34, 63);
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.52);
  display: flex;
  flex-direction: column;
  transition: 0.2s;
  margin: 0;
  justify-content: space-between;
}

#ourResultsSlider article:hover {
  transform: translate(0, -1rem);
  transition: 0.2s;
}
#ourResultsSlider article:hover ~ article {
  transform: translateX(130px);
}
#ourResultsSlider article:not(:first-child) {
  margin-left: -130px;
}
#ourResultsSlider article h3 {
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: "Rubik";
  line-height: 24px;
}
#ourResultsSlider article p {
  font-size: 16px;
  line-height: 26px;
  color: #bbbbbb;
  margin-top: 10px;
}
#ourResultsSlider .projectImageWrapper {
  max-height: 150px;
  overflow: hidden;
}
#ourResultsSlider img {
  width: 100%;
  height: auto;
}
</style>
