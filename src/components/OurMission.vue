<template>
  <section id="ourMission">
    <div class="maxWidthWrapper">
      <div id="ourMissionContent">
        <h2 class="large underline underline--yellow">Testimonials</h2>
        <div class="testimonialCards">
          
          <!-- <div class="card">
            <div class="avatar">
              <g-image src="../../static/uploads/gary.jpg"></g-image>
            </div>
            <div class="cardContent">
              <h3>Belniak Media</h3>
              <p>
                &ldquo;We've trusted Site as one of our design and development
                contractors for over half a year now. Site brings fresh
                solutions to old problems, and they've been able to handle any
                problem we've thrown their way.&rdquo;
              </p>
              <div class="cardSig">
                <p>Gary Belniak</p>
                <p>CEO, Belniak Media</p>
              </div>
            </div>
          </div> -->
          <div class="card">
            <div class="avatar">
              <g-image src="../../static/uploads/jimmy.jpg"></g-image>
            </div>
            <div class="cardContent">
              <h3>Great Lakes Lining</h3>
              <p>
                &ldquo;Site made sure we were able to get up and running with
                logo work, web design, web development, and even some video
                editing. We know we can trust Site to deliver when we need
                something done quickly, and they're always willing to help us
                find solutions.&rdquo;
              </p>
              <div class="cardSig">
                <p>Jimmie Eloff</p>
                <p>President, Great Lakes Lining</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="avatar">
              <g-image src="../../static/uploads/christ.jpg"></g-image>
            </div>
            <div class="cardContent">
              <h3>50Fifth Realty Group, LLC</h3>
              <p>
                &ldquo;Site has helped us with various design projects over the
                years. We turn to them whenever we need any design related work,
                because we know they can deliver premium work at a competitive
                rate.&rdquo;
              </p>
              <div class="cardSig">
                <p>Christopher Morales</p>
                <p>President, 50Fifth Realty Group, LLC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#ourMissionContent {
  font-family: "Inter", sans-serif;
}


#ourMission {
  margin: 8rem auto;
}
.testimonialCards {
  margin-top: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  grid-column-gap: 20px;
}
.card {
  background: #fff;
  color: #000;
  max-width: 350px;
  font-size: 17px;
  padding: 2rem;
  position: relative;
  padding-top: 80px;
}
.cardContent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.cardSig {
  display: flex;
  flex-direction: column;
}

.cardSig p {
  margin-bottom: 0;
  font-weight: bold;
  font-size: 14.18px;
}
.avatar {
  width: 120px;
  height: 120px;
  overflow: hidden;
  position: absolute;
  top: -60px;
  left: 0;
  right: 0;
  margin: auto;
}
.avatar img {
  width: auto;
  height: 100%;
}
.card p {
  margin-top: 0;
}

@media screen and (max-width: 1024px) {
  #ourMission .maxWidthContainer:first-of-type {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 0px 15px;
  }
  #ourMissionImage img {
    max-width: 310px;
  }
  #ourMissionContent {
    margin: 0 auto;
  }
  .testimonialCards {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 100px;
  }
}
@media screen and (max-width: 800px) {
  .testimonialCards {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 100px;
    padding: 0px 0px;
  }
}
@media screen and (max-width: 640px) {
  #ourMission {
    margin: 4rem auto 6rem auto;
  }

  #ourMissionContent p {
    text-align: left;
  }
}
@media screen and (max-width: 400px) {
  #ourMission #ourMissionContent h1 {
    font-size: 30px;
    line-height: 37px;
  }
}
#ourMissionImage img {
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

#description_webDevelopment svg,
#description_marketing svg {
  color: #ff00bb;
  margin-right: 0.25rem;
}
#description_webDesign svg {
  color: #00fff6;
  margin-right: 0.25rem;
}
</style>
<script>
export default {
  data() {
    return {};
  },

  methods: {},
  mounted() {}
};
</script>
