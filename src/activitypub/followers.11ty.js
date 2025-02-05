export default class {
  render({ activitypub }) {
    const orderedItems = [];

    return {
      "@context": "https://www.w3.org/ns/activitystreams",
      id: activitypub.followers,
      orderedItems,
      totalItems: orderedItems.length,
    };
  }
}
