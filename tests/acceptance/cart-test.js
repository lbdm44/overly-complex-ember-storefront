import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | cart', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /cart', async function(assert) {
    assert.expect(4);

    await visit('/cart');

    assert.dom('.checkout').exists({ count: 1 }, 'checkout button exists');
    assert.dom('.cart-items').exists({ count: 1 }, 'cart item list exsts');
    assert
      .dom('.shop-item')
      .exists({ count: 2 }, 'cart has the correct amount of items');
    assert
      .dom('.nav-actions__cart-count')
      .hasText('2', 'shopping card item count is correctly set');
  });
});
