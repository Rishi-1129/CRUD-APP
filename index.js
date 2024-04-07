new Vue({
    el: '#app',
    data: {
      newItem: '',
      items: []
    },
    methods: {
      addItem: function() {
        if (this.newItem.trim() !== '') {
          this.items.push(this.newItem.trim());
          this.newItem = '';
        }
      },
      editItem: function(index) {
        const updatedItem = prompt('Edit item:', this.items[index]);
        if (updatedItem !== null) {
          this.$set(this.items, index, updatedItem.trim());
        }
      },
      deleteItem: function(index) {
        const confirmDelete = confirm('Are you sure you want to delete this item?');
        if (confirmDelete) {
          this.items.splice(index, 1);
        }
      }
    }
  });