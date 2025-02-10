<template>
  <div class="search-box">
    <input
      v-model="query"
      @keyup.enter="search"
      type="text"
      placeholder="Search Wikipedia..."
    />
    <button @click="search">
      <i class="fa fa-search"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return { query: '' };
  },
  methods: {
    search() {
      if (this.query.trim()) {
        this.$emit('search', this.query);
      }
    }
  }
};
</script>
