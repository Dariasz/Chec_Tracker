import Ember from 'ember';

export default Ember.Component.extend({

actions:{  subtract() {

    if (this.model.get('student_number') > 0) {
      this.model.decrementProperty('student_number', 1);
      // chef.save();
    }
  },
  add() {
    this.model.incrementProperty('student_number', 1);
    // chef.save();
  }



}
});
