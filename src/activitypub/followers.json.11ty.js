export default class {
  data() {
    return {
      permalink: "activitypub/followers.json",
    };
  }

  render({ app, permalink }) {
    const orderedItems = [];

    return JSON.stringify({
      "@context": "https://www.w3.org/ns/activitystreams",
      id: new URL(permalink, app.start_url),
      totalItems: orderedItems.length,
      orderedItems,
    }, null, 2)
  }
}
