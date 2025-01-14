import actor from "./activitypub/actor.js";

const { icon, id, preferredUsername, url } = actor;

const subject = `acct:${preferredUsername}@${url.hostname}`;

const aliases = [
  "mailto:contact@refresh-dc.org",
  url,
  new URL("@refreshdc", url),
  id,
];

const links = [
  {
    href: icon.url,
    rel: "http://webfinger.net/rel/avatar",
    type: icon.mediaType,
  },
  {
    href: url,
    rel: "http://webfinger.net/rel/profile-page",
    type: "text/html",
  },
  {
    href: id,
    rel: "self",
    type: "application/activity+json",
  },
];

/* eslint-disable-next-line sort-keys */
export default { subject, aliases, links };
