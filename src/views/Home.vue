<template>
  <div class="home-container">
    <!-- Hero Section -->
    <div :class="['hero', { shrink: showResults }]">
      <h1>Wikipedia Viewer</h1>
      <p class="lead">Search for articles or explore random topics.</p>
    </div>

    <!-- Search Box & Random Article -->
    <div :class="['search-container', { shrink: showResults }]">
      <SearchBox @search="searchWiki" />
      <RandomArticle />
    </div>

    <!-- Search Results -->
    <div v-if="searchResults.length" :class="['results-container', { show: searchResults.length > 0 }, 'hero']"  ref="resultsSection">
      <h1 class="hero">Search Results</h1>
      <ul class="list-group">
        <li v-for="(result, index) in searchResults" :key="index" class="list-group-item" :class="{ show: showResults }">
          <a :href="'https://en.wikipedia.org/wiki/' + result.title" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png" alt="Wikipedia Logo" class="wiki-logo" />
            <div class="text-content">
              <h3>{{ result.title }}</h3>
              <p>{{ result.snippet.replace(/<[^>]+>/g, '') }}...</p>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <!-- Scroll to Top Button -->
    <button v-show="showScrollButton" @click="scrollToTop" class="scroll-top-btn show">⬆</button>
  </div>
</template>

<script>
import SearchBox from '../components/SearchBox.vue';
import RandomArticle from '../components/RandomArticle.vue';
import axios from 'axios';

export default {
  components: { SearchBox, RandomArticle },
  data() {
    return {
      searchResults: [],
      showResults: false,
      showScrollButton: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    async searchWiki(query) {
      try {
        if (!query) return;

        const response = await axios.get(`https://en.wikipedia.org/w/api.php`, {
          params: {
            action: 'query',
            format: 'json',
            list: 'search',
            srsearch: query,
            origin: '*'
          }
        });

        if (response.data.query && response.data.query.search.length > 0) {
          this.searchResults = response.data.query.search;
          this.showResults = true;

          // Aguarda atualização do DOM e rola até os resultados
          this.$nextTick(() => {
            document.querySelectorAll('.list-group-item').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('show');
              }, index * 100);
            });
          });
        } else {
          this.searchResults = [];
          this.showResults = false;
          console.warn("No results found.");
        }
      } catch (error) {
        console.error('Error fetching Wikipedia results:', error);
      }
    },
    scrollToResults() {
      if (this.$refs.resultsSection) {
        this.$refs.resultsSection.scrollIntoView({ behavior: "smooth" });
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleScroll() {
      this.showScrollButton = window.scrollY > 300;
    }
  }
};
</script>
