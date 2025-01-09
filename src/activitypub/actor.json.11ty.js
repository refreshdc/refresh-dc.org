export default class {
  data() {
    return {
      permalink: "activitypub/actor.json",
    };
  }

  render({ app }) {
    /* eslint-disable sort-keys */
    return JSON.stringify({
      "@context": [
        "https://www.w3.org/ns/activitystreams",
        "https://w3id.org/security/v1",
        {
          discoverable: "http://joinmastodon.org/ns#discoverable",
          PropertyValue: "http://schema.org#PropertyValue",
          value: "http://schema.org#value",
        },
      ],
      id: app.start_url,
      type: "Organization",
      following: new URL("activitypub/following.json", app.start_url),
      followers: new URL("activitypub/followers.json", app.start_url),
      // inbox: "",
      outbox: new URL("activitypub/outbox.json", app.start_url),
      preferredUsername: "refreshdc",
      name: app.name,
      summary: `<p>${app.description}</p>`,
      url: app.start_url,
      discoverable: true,
      published: "2006-01-27T04:50:45Z",
      publicKey: {
        id: `${app.start_url}#main-key`,
        owner: app.start_url,
        // publicKeyPem: "",
      },
      attachment: [
        {
          type: "PropertyValue",
          name: "Website",
          value: `<a href="${app.start_url}" rel="me"><span class="invisible">https://</span>refresh-dc.org</a>`,
        },
        {
          type: "PropertyValue",
          name: "Newsletter",
          value: `<a href="${app.start_url}/newsletter" rel="me"><span class="invisible">https://</span>refresh-dc.org/newsletter</a>`,
        },
        {
          type: "PropertyValue",
          name: "LinkedIn",
          value: `<a href="https://www.linkedin.com/company/refresh-dc/" rel="me"><span class="invisible">https://</span>www.linkedin.com/company/refresh-dc/</a>`,
        },
      ],
      icon: {
        type: "Image",
        mediaType: "image/png",
        url: new URL(app.icons[0].src, app.start_url),
      },
      image: {
        type: "Image",
        mediaType: "image/jpeg",
        url: new URL("assets/images/cover.jpg", app.start_url),
      },
    }, null, 2);
    /* eslint-enable sort-keys */
  }
}
