import arcjet, { tokenBucket } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["userId"], // track req using userId
  rules: [
    tokenBucket({
      mode: "LIVE",
      refillRate: 100,
      interval: 3600,
      capacity: 100,
    }),
  ],
});

export default aj;
