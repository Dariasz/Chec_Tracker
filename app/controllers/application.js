import Ember from 'ember';

export default Ember.Controller.extend({
  newChef: null,
  message: null,
  actions: {
    change(chef) {
      chef.toggleProperty('available');
      chef.save();
    },

    chat(message) {
      this.store.createRecord('message', {
      content: this.get('message')
      });
      this.set('message', '');
    },



    savenewChef() {
      this.store.createRecord('chef', {
        available: false,
        name: this.get('newChef')
      }).save()
      this.set('newChef', "")
    }


  }
});
