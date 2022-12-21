const strArray = [
  "Build",
  "Ecommerce",
  "with",
  "NextJS",
  "Magic",
  "Strapi",
  "Stripe",
];
function joIn(straray, i, acc) {
  console.log(i, acc);
  return straray.length === i ? acc : joIn(straray, i + 1, acc + straray[i]);
}
joIn(strArray, 1, " ");
