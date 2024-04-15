// src/env.mjs
import { createEnv } from "@t3-oss/env-nextjs/dist";
import { z } from "zod";

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {},
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    HASHNODE_ENDPOINT: z.string().url(),
    HASHNODE_PUBLICATION_ID: z.string().min(1),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    HASHNODE_ENDPOINT: process.env.NEXT_PUBLIC_HASHNODE_ENDPOINT,
    HASHNODE_PUBLICATION_ID:
      process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_ID,
  },
});
