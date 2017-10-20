Vue.component('app-hobby', {
  props: ['hobby'],
  template: '<li v-on:click="removeHobby">{{ hobby }}</li>',
  methods: {
    removeHobby: function() {
      this.$emit('hobbyremoved', this.hobby);
    }
  }
});

new Vue({
  el: '#app',
  data: {
    hobbies: ['Sports', 'Reading', 'Cooking'],
    hobbyDeleted: false,
    newHobbyName: ''
  },
  methods: {
    addNewHobby: function() {
      this.hobbies.push(this.newHobbyName);
      this.newHobbyName = '';
    },
    removeHobby: function(hobbyName) {
      var index = this.hobbies.indexOf(hobbyName);
      this.hobbies.splice(index, 1);
      this.hobbyDeleted = true;
    }
  }
});
