<template>
  <div>
    <div v-for="(edge, i) in $page.posts.edges" :key="i">
      <h2>{{ edge.node.title }}</h2>
    </div>
  </div>
</template>

<page-query>
query Posts {
  posts: allPost {
      edges {
          node {
              title
          }
      }
  }
}
</page-query>