<template>
    <section id="ourTeam">
      <div class="maxWidthContainer">
        <div id="ourTeamContent">
          <h2>Our Team</h2>
          <p>Our team is located in "The Mexico of the Midwest". Little Village, Chicago and the Latino community at large produces a great amount of business for our communities. Our mission is to make sure local businesses like those in Little Village are able to compete in the forever evolving world of the web. </p>
          
        </div>
      </div>
      
    </section>
</template>
<style scoped>
#ourTeam .maxWidthContainer:first-of-type {
  padding: 0px 75px 0 75px;
}

#ourTeamContent  {
    font-family: "Rubik";
    margin: 10rem auto;
    text-align: center;

}
#ourTeamContent h2 {
        font-size: 40px; 

}
#ourTeamContent p {
    font-size: 18px;
    line-height: 36px;
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