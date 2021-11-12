<template>
  <div class="maxWidthContainer">
    <h1>
      {{ $context.title }}
    </h1>
  </div>
 
</template>

<style >
.maxWidthContainer {
  max-width: 1400px;
  margin: auto;
}
/* rubik-regular - latin */
@font-face {
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  src: url("../../static/fonts/rubik-v9-latin-regular.eot"); /* IE9 Compat Modes */
  src: local("Rubik"), local("Rubik-Regular"),
    url("../../static/fonts/rubik-v9-latin-regular.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("../../static/fonts/rubik-v9-latin-regular.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("../../static/fonts/rubik-v9-latin-regular.woff") format("woff"),
    /* Modern Browsers */ url("../../static/fonts/rubik-v9-latin-regular.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("../../static/fonts/rubik-v9-latin-regular.svg#Rubik") format("svg"); /* Legacy iOS */
}
/* rubik-500 - latin */
@font-face {
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  src: url("../../static/fonts/rubik-v9-latin-500.eot"); /* IE9 Compat Modes */
  src: local("Rubik Medium"), local("Rubik-Medium"),
    url("../../static/fonts/rubik-v9-latin-500.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("../../static/fonts/rubik-v9-latin-500.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("../../static/fonts/rubik-v9-latin-500.woff") format("woff"),
    /* Modern Browsers */ url("../../static/fonts/rubik-v9-latin-500.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("../../static/fonts/rubik-v9-latin-500.svg#Rubik") format("svg"); /* Legacy iOS */
}
/* rubik-700 - latin */
@font-face {
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  src: url("../../static/fonts/rubik-v9-latin-700.eot"); /* IE9 Compat Modes */
  src: local("Rubik Bold"), local("Rubik-Bold"),
    url("../../static/fonts/rubik-v9-latin-700.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("../../static/fonts/rubik-v9-latin-700.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("../../static/fonts/rubik-v9-latin-700.woff") format("woff"),
    /* Modern Browsers */ url("../../static/fonts/rubik-v9-latin-700.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("../../static/fonts/rubik-v9-latin-700.svg#Rubik") format("svg"); /* Legacy iOS */
}
/* rubik-900 - latin */
@font-face {
  font-family: "Rubik";
  font-style: normal;
  font-weight: 900;
  src: url("../../static/fonts/rubik-v9-latin-900.eot"); /* IE9 Compat Modes */
  src: local("Rubik Black"), local("Rubik-Black"),
    url("../../static/fonts/rubik-v9-latin-900.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("../../static/fonts/rubik-v9-latin-900.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("../../static/fonts/rubik-v9-latin-900.woff") format("woff"),
    /* Modern Browsers */ url("../../static/fonts/rubik-v9-latin-900.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("../../static/fonts/rubik-v9-latin-900.svg#Rubik") format("svg"); /* Legacy iOS */
}
</style>