import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      chefs: this.store.findAll('chef'),
      messages: this.store.findAll('message')
    });
  }
});
