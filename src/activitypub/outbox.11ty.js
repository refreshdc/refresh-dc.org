export default class {
  render({ activitypub }) {
    const orderedItems = [];

    return {
      "@context": "https://www.w3.org/ns/activitystreams",
      id: activitypub.outbox,
      orderedItems,
      totalItems: orderedItems.length,
    };
  }
}
