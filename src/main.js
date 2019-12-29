// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faBars,
  faCode,
  faPalette,
  faSearchDollar,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

library.add(
  faGithub,
  faTwitter,
  faSearch,
  faBars,
  faCode,
  faPalette,
  faSearchDollar,
  faTimes
);
export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component

  Vue.component("font-awesome", FontAwesomeIcon);

  Vue.component("Layout", DefaultLayout);
  head.script.push({
    src: "https://account.snatchbot.me/script.js",
    body: true
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Open+Sans:400,400i,800&display=swap"
  });
  head.meta.push({
    name: "title",
    content: "SITE | Chicago Web Development and Digital Marketing"
  });
  head.meta.push({
    name: "description",
    content:
      "SITE is a web development and digital marketing consultancy based in Chicago, IL. We offer web design, web development, branding, and digital marketing solutions for new and old businesses.  "
  });
  head.meta.push({
    name: "og:type",
    content: "website"
  });
  head.meta.push({
    name: "og:url",
    content: "https://sitefromchicago.com"
  });
  head.meta.push({
    name: "og:url",
    content: "https://sitefromchicago.com"
  });
  head.meta.push({
    name: "og:title",
    content: "SITE | Chicago Web Development and Digital Marketing"
  });
  head.meta.push({
    name: "og:description",
    content:
      "SITE is a web development and digital marketing consultancy based in Chicago, IL. We offer web design, web development, branding, and digital marketing solutions for new and old businesses."
  });
  head.meta.push({
    name: "og:image",
    content: "/assets/static/static/uploads/3d-Logo.png"
  });
  head.meta.push({
    name: "twitter:card",
    content: "summary_large_image"
  });
  head.meta.push({
    name: "twitter:url",
    content: "https://sitefromchicago.com"
  });
  head.meta.push({
    name: "twitter:title",
    content: "SITE | Chicago Web Development and Digital Marketing"
  });
  head.meta.push({
    name: "twitter:description",
    content:
      "SITE is a web development and digital marketing consultancy based in Chicago, IL. We offer web design, web development, branding, and digital marketing solutions for new and old businesses.  "
  });
  head.meta.push({
    name: "twitter:image",
    content: "/assets/static/3d-Logo.png"
  });
  // head.bodyAttrs = { class: "body-class" };
}
