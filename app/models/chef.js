import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  available: DS.attr('boolean'),
  student_number: DS.attr('number',{ defaultValue:0  })
});
