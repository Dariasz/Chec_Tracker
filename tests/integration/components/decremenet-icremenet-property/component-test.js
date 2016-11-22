import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('decremenet-icremenet-property', 'Integration | Component | decremenet icremenet property', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{decremenet-icremenet-property}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#decremenet-icremenet-property}}
      template block text
    {{/decremenet-icremenet-property}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
