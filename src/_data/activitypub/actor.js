import manifest from "../../manifest.webmanifest.json" with { type: "json" };

const { description, name, start_url } = manifest;

const url = new URL(start_url);

const id = new URL("activitypub/actor", url);
const type = "Organization";
const discoverable = true;

const attributionDomains = [url.hostname];
const preferredUsername = "refreshdc";
const published = "2006-01-27T04:50:45Z";
const summary = `<p>${description}</p>`;

const icon = {
  mediaType: "image/png",
  type: "Image",
  url: new URL(manifest.icons[0].src, url),
};

const image = {
  mediaType: "image/jpeg",
  type: "Image",
  url: new URL("assets/images/cover.jpg", url),
};

const publicKey = {
  id: `${url}#main-key`,
  owner: url,
  // publicKeyPem: "",
};

/* eslint-disable sort-keys */
export default {
  id,
  type,
  preferredUsername,
  name,
  summary,
  url,
  discoverable,
  published,
  attributionDomains,
  publicKey,
  icon,
  image,
};
/* eslint-enable sort-keys */
