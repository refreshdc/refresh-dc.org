export default class {
  data() {
    return {
      layout: false,
      permalink: ".well-known/webfinger.json",
    };
  }

  render({ app }) {
    return JSON.stringify({
      subject: "acct:@refreshdc@refresh-dc.org",
      aliases: [app.start_url],
      links: [
        {
          rel: "http://webfinger.net/rel/avatar",
          type: "image/png",
          href: new URL(app.icons[0].src, app.start_url),
        },
        {
          rel: "http://webfinger.net/rel/profile-page",
          type: "text/html",
          href: app.start_url,
        },
        {
          rel: "self",
          type: "application/activity+json",
          href: new URL("activitypub/actor.json", app.start_url),
        },
      ],
    }, null, 2);
  }
}
