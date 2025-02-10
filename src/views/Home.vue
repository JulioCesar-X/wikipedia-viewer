<template>
  <div class="home-container">
    <div class="hero">
      <h1>Wikipedia Viewer</h1>
      <p class="lead">Search for articles or explore random topics.</p>
    </div>

    <div class="search-container">
      <SearchBox @search="searchWiki" />
      <RandomArticle />
    </div>

    <SearchResults :results="searchResults" v-if="searchResults.length" />
  </div>
</template>

<script>
import SearchBox from '../components/SearchBox.vue';
import RandomArticle from '../components/RandomArticle.vue';
import SearchResults from '../components/SearchResults.vue';
import axios from 'axios';

export default {
  components: { SearchBox, RandomArticle, SearchResults },
  data() {
    return {
      searchResults: []
    };
  },
  methods: {
    async searchWiki(query) {
      try {
        const response = await axios.get(`https://en.wikipedia.org/w/api.php`, {
          params: {
            action: 'query',
            format: 'json',
            list: 'search',
            srsearch: query,
            origin: '*'
          }
        });
        this.searchResults = response.data.query.search;
      } catch (error) {
        console.error("Error fetching Wikipedia results", error);
      }
    }
  }
};
</script>
