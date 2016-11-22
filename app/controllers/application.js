import Ember from 'ember';

export default Ember.Controller.extend({
  newChef: null,
  message: null,
  cos: 'green',
  menuLength: Ember.computed.alias('model.chefs.length'),
  availableChefs: Ember.computed.filterBy('model.chefs', 'available', true),
  actions: {
    change(chef) {
      chef.toggleProperty('available');
      chef.save();
    },

    chat(message) {
      this.store.createRecord('message', {
        content: this.get('message')
      }).save()
      this.set('message', '');

    },

    deletemessage(message) {
      message.destroyRecord().save();
    },


    savenewChef() {
      this.store.createRecord('chef', {
        available: false,
        name: this.get('newChef')
      }).save()
      this.set('newChef', "")
    },

    destroyChef(chef) {
      chef.destroyRecord().save();
    }



  }
});
