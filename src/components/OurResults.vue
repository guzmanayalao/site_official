<template>
  <section id="ourResults">


    <div class="maxWidthWrapper">
      <h2 class="large underline underline--red">Case Studies</h2>
    </div>
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
                  ><button>Read More</button></g-link
                >
            </div>
            
          </article>
          
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
<style lang="scss">
#ourResults {
  /* overflow: auto; */
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
  margin: 0 0 2rem;
  padding: 1rem 0;
}

#ourResultsSlider {
  display: flex;
  flex-wrap: wrap;
}

#ourResultsSlider article {
  flex-basis: 50%;
  position: relative;
  cursor: pointer; 
  flex-grow: 1;
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    margin-bottom: 1rem;
  }
  &:hover {
    .content{
      opacity: 1;
      transition: opacity .2s;

    }
  }
}

#ourResultsSlider article img {
  height: 500px;
  width: 100%;
  object-fit: cover;
  object-position: top center;
}
#ourResultsSlider article .content{
  position: absolute;
  background: rgba(0, 0, 0, 0.85);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  margin: 0;
  justify-content: center;
  align-items: center;
  color: #fff;
  opacity: 0;
  transition: opacity 0.5s;
  @media screen and (max-width: 768px) {
    opacity: 1;
  }
}



#ourResultsSlider article h3 {
  font-size: 24px;
  margin-top: 0;
  margin-bottom: .25rem;
  font-family: "Inter", sans-serif;
  line-height: 28px;
  text-align: center;
}
#ourResultsSlider article p {
  font-size: 16px;
  line-height: 28px;
  margin-top: 10px;
  text-align: center;
  width: 80%;
}


</style>
