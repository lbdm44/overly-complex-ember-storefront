import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | item-meta', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{item-main$item-meta}}`);

    assert.ok(find('.shop-item__main'), 'main class is found');
    assert.ok(find('.shop-item-image'), 'Image is rendered');
    assert.notOk(
      find('.shop-item-image').hasAttribute('alt'),
      'alt attribute is not added when imgAlt is not passed'
    );

    await render(hbs`
      {{item-main$item-meta imgAlt="test-alt-id"}}
    `);

    assert.ok(find('.shop-item-image'), 'Image is rendered');
    assert.equal(
      find('.shop-item-image').getAttribute('alt'),
      'test-alt-id',
      'alt attribute renders correct value'
    );
  });
});
