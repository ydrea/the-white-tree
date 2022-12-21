const Nexti18 = require("next-i18next").default;

module.exports = new Nexti18({
  otherLanguages: ["hr"],
  defaultNS: "common",
  localeSubpaths: {
    hr: "hr",
  },
  localePath: "public/static/locales",
});
