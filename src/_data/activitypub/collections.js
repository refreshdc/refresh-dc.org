import actor from "./actor.js";

const { url } = actor;

const following = new URL("activitypub/following", url);
const followers = new URL("activitypub/followers", url);
const inbox = new URL("activitypub/inbox", url);
const outbox = new URL("activitypub/outbox", url);

/* eslint-disable-next-line sort-keys */
export default { following, followers, inbox, outbox };
