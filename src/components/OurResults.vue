<template>
  <section id="ourResults">


    <div class="maxWidthWrapper">
      <h2 class="large underline underline--red">Case Studies</h2>
    </div>
   <div class="maxWidthContainer">
      <div class="sliderContainer">
        

        <div id="ourResultsSlider">
          <article v-for="(edge, i) in $static.allCaseStudies.edges.slice().reverse()" :key="i">
            <div class="projectImageWrapper">
              <g-image :src="edge.node.image"></g-image>
            </div>
            <div class="content">
              <h3>{{  edge.node.title }}</h3>
                <p class="tags">{{  edge.node.categories }}</p>
                <p>
                {{  edge.node.goal }}
                </p>
                <g-link class="readMoreLink" :to=" `/case-studies/${edge.node.slug}`"
                  style="margin-top: auto;"><button>Read More</button></g-link
                >
            </div>
            
          </article>
          

          <article class="cardHidden"></article>
          <article class="cardHidden"></article>
          <article class="cardHidden"></article>
        </div>
      </div>
    </div>
  </section>
</template>
<static-query>
query {
  allCaseStudies: allCaseStudies {
    edges {
      node {
        title,
        scope,
        goal,
        slug,
        image
      }
    }
  } 
}
</static-query>
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
<style scoped>
button {
  margin: 0 !important;
}
</style>
<style>
#ourResults {
  overflow: auto;
}
#ourResults p.tags {
  margin-bottom: 0;
  line-height: 15px;
  font-size: 11px;
}

#ourResultsContent {
  background: #fff;
  padding: 2rem;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex: 0 0 400px;
  font-family: "Inter", sans-serif;
  border: 4px solid #000;
}
#ourResultsContent h2 {
  font-size: 40px;
}
#ourResultsContent p.ourResultsHide {
  line-height: 29px;
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
    padding:  0;
    max-width: unset;
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
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
}

#ourResults .maxWidthContainer .sliderContainer {
  display: flex;
  width: 100vw;
  margin: 0 0 2rem;
  padding: 1rem 0;
  max-width: unset;
  position: relative;
  left: 0;
}

#ourResultsSlider {
  display: flex;
}
@media screen and (max-width: 1024px) {
  #ourResultsSlider {
    overflow-x: initial;
  }
}
#ourResultsSlider::-webkit-scrollbar,
#ourResults::-webkit-scrollbar {
  height: 1em;
  color: #fff;
}
#ourResultsSlider::-webkit-scrollbar-button,
#ourResults::-webkit-scrollbar-button {
  width: 20px;
}
#ourResultsSlider::-webkit-scrollbar-track,
#ourResults::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 20px;
  margin-right: 400px;
}
@media screen and (max-width: 2000px) {
  #ourResultsSlider::-webkit-scrollbar-track,
  #ourResults::-webkit-scrollbar-track {
    background: #ddd;
    border-radius: 20px;
    margin-left: 300px;
    margin-right: 100px;
  }
}
@media screen and (max-width: 1500px) {
  #ourResultsSlider::-webkit-scrollbar-track,
  #ourResults::-webkit-scrollbar-track {
    background: #ddd;
    border-radius: 20px;
    margin-left: 100px;
    margin-right: 100px;
  }
}
#ourResultsSlider::-webkit-scrollbar-thumb,
#ourResults::-webkit-scrollbar-thumb {
  background-color: rgb(90, 90, 90);
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
  margin-right: 3rem;
  width: 360px;

}

#ourResultsSlider article img {
  height: 400px;
  width: 100%;
  object-fit: cover;
  object-position: top center;
}
#ourResultsSlider article .content{
  max-width: 330px;
  padding: 1.5rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  transition: 0.2s;
  margin: 0;
  justify-content: flex-start;
  min-height: 30%;
  margin-bottom: 1rem;
}



#ourResultsSlider article h3 {
  font-size: 24px;
  margin-top: 0;
  margin-bottom: .25rem;
  font-family: "Inter", sans-serif;
  line-height: 28px;
}
#ourResultsSlider article p {
  font-size: 16px;
  line-height: 28px;
  color: #000;
  margin-top: 10px;
}


</style>
