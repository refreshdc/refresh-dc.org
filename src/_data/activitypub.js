export default ({ app }) => {
  const { description, icons, name, start_url } = app;

  const url = new URL(start_url);

  /* eslint-disable sort-keys */
  return {
    id: new URL("activitypub/actor", url),
    type: "Organization",
    following: new URL("activitypub/following", url),
    followers: new URL("activitypub/followers", url),
    inbox: new URL("activitypub/inbox", url),
    outbox: new URL("activitypub/outbox", url),
    preferredUsername: "refreshdc",
    name,
    summary: `<p>${description}</p>`,
    url,
    discoverable: true,
    published: "2006-01-27T04:50:45Z",
    attributionDomains: [url.hostname],
    publicKey: {
      id: `${url}#main-key`,
      owner: url,
      // publicKeyPem: "",
    },
    icon: {
      mediaType: icons[0].type,
      type: "Image",
      url: new URL(icons[0].src, url),
    },
    image: {
      mediaType: "image/jpeg",
      type: "Image",
      url: new URL("assets/images/cover.jpg", url),
    },
    attachment: [
      {
        name: "Website",
        type: "PropertyValue",
        value: `<a href="${url}" rel="me"><span class="invisible">https://</span>${url.hostname}</a>`,
      },
      {
        name: "Newsletter",
        type: "PropertyValue",
        value: `<a href="${new URL("newsletter", url)}" rel="me"><span class="invisible">https://</span>${url.hostname}/newsletter</a>`,
      },
      {
        name: "LinkedIn",
        type: "PropertyValue",
        value: `<a href="https://www.linkedin.com/company/refresh-dc/" rel="me"><span class="invisible">https://</span>www.linkedin.com/company/refresh-dc/</a>`,
      },
    ],
  };
  /* eslint-enable sort-keys */
};
