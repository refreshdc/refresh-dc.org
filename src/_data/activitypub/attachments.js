import actor from "./actor.js";

const { url } = actor;

export default [
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
];
