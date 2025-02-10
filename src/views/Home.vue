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
    <div v-if="searchResults.length" :class="['results-container', { show: searchResults.length > 0 }]">
      <h2>Search Results</h2>
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
      showResults: false
    };
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

          // Aplica animação nos resultados
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
    }
  }
};
</script>

<style scoped>
/* 📌 Search Results */
.results-container {
  margin-top: 40px;
  max-width: 900px;
  margin: auto;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-in-out, transform 0.5s ease-in-out;
}

.results-container.show {
  opacity: 1;
  transform: translateY(0);
}

.results-container h2 {
  color: var(--primary-color);
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}

/* 🏆 Search Result Cards */
.list-group {
  padding: 0;
  text-align: left;
}

.list-group-item {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  margin-bottom: 10px;
  padding: 15px;
  backdrop-filter: blur(8px);
  transition: transform 0.3s ease-in-out, opacity 0.4s ease-in-out, background 0.3s;
  opacity: 0;
  transform: translateX(-30px);
}

.list-group-item.show {
  opacity: 1;
  transform: translateX(0);
}

.list-group-item:hover {
  background: var(--hover-color);
  transform: scale(1.05);
}

/* 🎯 Links & Icons */
.list-group-item a {
  text-decoration: none;
  color: var(--link-color);
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  padding: 10px;
  border-radius: var(--border-radius);
}

.list-group-item a:hover {
  color: var(--primary-color);
  text-decoration: none;
}

/* 🖼️ Wikipedia Logo */
.wiki-logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 5px;
}

/* 📄 Text Content */
.text-content {
  display: flex;
  flex-direction: column;
}

.text-content h3 {
  font-size: 1.3rem;
  margin: 0;
  color: var(--primary-color);
}

.text-content p {
  font-size: 1rem;
  color: #333;
  margin: 5px 0 0;
  line-height: 1.4;
}

/* 📱 Responsividade */
@media (max-width: 768px) {
  .results-container h2 {
    font-size: 1.8rem;
  }

  .list-group-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .wiki-logo {
    width: 40px;
    height: 40px;
  }

  .text-content h3 {
    font-size: 1.2rem;
  }

  .text-content p {
    font-size: 0.9rem;
  }
}
</style>
