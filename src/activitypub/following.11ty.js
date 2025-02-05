export default class {
  render({ activitypub }) {
    const orderedItems = [];

    return {
      "@context": "https://www.w3.org/ns/activitystreams",
      id: activitypub.following,
      orderedItems,
      totalItems: orderedItems.length,
    };
  }
}
