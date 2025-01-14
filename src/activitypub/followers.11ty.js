export default class {
  render({ activitypub }) {
    const orderedItems = [];

    return JSON.stringify({
      "@context": "https://www.w3.org/ns/activitystreams",
      id: activitypub.collections.followers,
      orderedItems,
      totalItems: orderedItems.length,
    }, null, 2);
  }
}
