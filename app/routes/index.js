import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [...Array(4)].map((_, i) => {
      return {
        itemName: `Some Rando Item #${i + 1}`,
        className: `some-rando-item-${i + 1}`,
      };
    });
  },
});
