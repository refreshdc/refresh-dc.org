export default class {
  data() {
    return {
      layout: false,
      permalink: ".well-known/webfinger.json",
    };
  }

  render({ app }) {
    const subject = "acct:refreshdc@refresh-dc.org";
    const aliases = [app.start_url, new URL("activitypub/actor.json", app.start_url)];
    const links = [
      {
        href: new URL(app.icons[0].src, app.start_url),
        rel: "http://webfinger.net/rel/avatar",
        type: "image/png",
      },
      {
        href: app.start_url,
        rel: "http://webfinger.net/rel/profile-page",
        type: "text/html",
      },
      {
        href: new URL("activitypub/actor.json", app.start_url),
        rel: "self",
        type: "application/activity+json",
      },
    ];

    /* eslint-disable-next-line sort-keys */
    return JSON.stringify({ subject, aliases, links }, null, 2);
  }
}
