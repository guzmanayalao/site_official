<template>
    <section id="ourTeam">
      <div class="maxWidthWrapper">
        <g-image src="../../static/uploads/figma/team.png"></g-image>
        <div id="ourTeamContent">
          <h2 class="large underline underline--red">Team</h2>
          <p class="large">We are a latino founded agency born and raised here in Chicago. Chicago and the Latino community at large produce a great amount of business for our cities. Our mission is to make sure local businesses like those in Chicago are able to compete in the forever evolving world of the web. Our team has offices located in Little Village and Streeterville in Chicago.  </p>
          <button>Learn More</button>
        </div>
      </div>
      
    </section>
</template>
<style scoped>
#ourTeam {
  margin-top: 8rem;
}
.maxWidthContainer {
  width: 1280px;
  margin: 0 auto;
}



@media screen and (max-width: 1024px) {
  #ourTeam .maxWidthContainer:first-of-type {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 0px 30px;
  }
  #ourTeamImage img{
    max-width: 310px;
  }
   #ourTeam .maxWidthContainer #ourTeamDescriptions{
    grid-template-columns: 1fr;
    padding: 0px 30px;

    }
 
}
@media screen and (max-width: 640px) {
  
   #ourTeamContent {
    margin-top: 45px;

  }

}
@media screen and (max-width: 400px){
  #ourTeam #ourTeamContent h1 {
    font-size: 30px;
    line-height: 37px;

  }
}
#ourTeamImage img{
  width: 100%;
}

.descriptionItem {
    max-width: 300px;
    margin-right: 20px; 
}
.descriptionItem {
 
    max-width: 300px;
    margin-right: 20px; 
}

@media screen and (max-width: 1024px) {
    .descriptionItem {
    max-width: 100%; 
    margin-right: 0; 
    }

}

#description_webDevelopment svg, #description_marketing svg{
    color: #FF00BB;
    margin-right: .25rem; 

}
#description_webDesign svg{
    color: #00FFF6;
    margin-right: .25rem; 

}
</style>
<script>
export default {
    data() {
        return {
        

        }
    },

    methods: { 

    },
    mounted () {
    },
}
</script>