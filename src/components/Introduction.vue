<template>
  <section id="ourServices">
    <div class="maxWidthWrapper">
      <h2 class="large underline underline--yellow">What We Do</h2>
      <p class="large">{{ $static.homepage.introduction }}</p>
    </div>
    
  </section>
</template>
<static-query>
query {
  homepage(id: "1") {
    introduction
  } 
}
</static-query>
<script>
export default {
  data() {
    return {
      ourServicesMobile: false
    };
  },
  methods: {},
  mounted() {
    // window.addEventListener('scroll', this.handleScroll);
  }
};
</script>

<style>
#ourServices {
  margin: 185px 0;
}
</style>
