<template>
  <div class="results-container">
    <h2>Search Results</h2>
    <ul class="list-group">
      <li v-for="result in results" :key="result.pageid" class="list-group-item">
        <a :href="`https://en.wikipedia.org/?curid=${result.pageid}`" target="_blank">
          <img class="wiki-icon" src="https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png" alt="Wiki Icon">
          <div>
            <strong>{{ result.title }}</strong>
            <p class="snippet">{{ result.snippet.replace(/<\/?[^>]+(>|$)/g, "") }}...</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['results']
};
</script>

<style scoped>
.wiki-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
