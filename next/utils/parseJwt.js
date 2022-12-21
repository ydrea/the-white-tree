export const parseJwt = (token) => {
  let jt = token.split(".")[1];
  try {
    return JSON.parse(Buffer.from(jt, "base64"));
  } catch (e) {
    return null;
  }
};

const tester = parseJwt(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjcwNDkwNDAzLCJleHAiOjE2NzMwODI0MDN9.prGqOnPPllGx_nmP2KL4zSYwq2Ir3JIrtlRVh4alqpM"
);

console.log(tester);
