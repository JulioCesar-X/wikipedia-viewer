<template>
  <button @click="openRandomArticle" class="random-btn">
    <i class="fa fa-random"></i> Random Article
  </button>
</template>

<script>
export default {
  methods: {
    openRandomArticle() {
      window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
    }
  }
};
</script>
