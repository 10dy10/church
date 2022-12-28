<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item">
        <button
          type="button"
          @click="onClickFirstPage"
          :disabled="isInFirstPage"
          aria-label="Go to the first page"
        >
          &lt;&lt;
        </button>
      </li>
      <li class="page-item">
        <button
          class="page-link"
          :disabled="isInFirstPage"
          @click="onClickPreviousPage"
        >
          &lt;
        </button>
      </li>
      <li v-for="page in pages" :key="page">
        <button
          class="page-link page-num"
          @click="onClickPage(page.name)"
          :disabled="page.isDisaled"
          :class="{ active: isPageActive(page.name) }"
        >
          {{ page.name }}
        </button>
      </li>
      <li class="page-item">
        <button
          class="page-link"
          :disabled="isInLastPage"
          @click="onClickNextPage"
        >
          &gt;
        </button>
      </li>
      <li>
        <button
          type="button"
          @click="onClickLastPage"
          :disabled="isInLastPage"
          aria-label="Go to the last page"
        >
          &gt;&gt;
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data(){
    return {
      currentPage: 1,
      totalPages: 5,
    }
  },
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 5,
    },
    // total: {
    //   type: Number,
    //   required: true,
    // },
  },
  computed: {
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }
      return this.currentPage - 1;
    },
    endPage() {
      if (this.totalPages > this.maxVisibleButtons) {
        return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages)
      }
      return this.totalPages
    },
    pages() {
      const range = [];
      for (let i = 1; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }
      return range;
    },
  },
  methods: {
    onClickFirstPage() {
      this.currentPage = 1;
    },
    onClickPreviousPage() {
      this.currentPage = this.currentPage - 1;
    },
    onClickPage(page) {
      this.currentPage = page
    },
    onClickNextPage() {
      this.currentPage = this.currentPage + 1;
    },
    onClickLastPage() {
      this.currentPage = this.totalPages
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
    onPageChange(page){
      this.currentPage = page
    }
  },
};
</script>

<style scoped>
button {
  font-family: 'Be Vietnam Pro', sans-serif;
  background-color: var(--white);
  font-size: 1.6rem;
  color: #B7B7B7;
}
button:disabled {
  color: #e6e1e1;
}
button.active { 
  background-color: #E7F2F2;
}
.page-num {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #484848;
}
nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
</style>
