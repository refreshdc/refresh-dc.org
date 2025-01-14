export default class {
  render({ activitypub }) {
    const { actor, collections, attachments: attachment } = activitypub;

    return JSON.stringify({
      "@context": [
        "https://www.w3.org/ns/activitystreams",
        "https://w3id.org/security/v1",
        {
          "schema": "https://schema.org/",
          "toot": "http://joinmastodon.org/ns#",

          "attributionDomains": { "@id": "toot:attributionDomains", "@type": "@id" },
          "discoverable": "toot:discoverable",
          "PropertyValue": "schema:PropertyValue",
          "value": "schema:value",
        }
      ],
      ...actor,
      ...collections,
      attachment
    }, null, 2);
  }
}
