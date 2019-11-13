import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [...Array(4)].map((_, i) => {
      return {
        itemName: `Some Rando Item #${i + 1}`,
        imgAlt: `some-rando-item-${i + 1}`,
      };
    });
  },
});
