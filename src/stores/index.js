import { defineStore } from 'pinia';

export const useWikiStore = defineStore('wikiStore', {
  state: () => ({
    searchResults: []
  }),
  actions: {
    setSearchResults(results) {
      this.searchResults = results;
    }
  }
});
