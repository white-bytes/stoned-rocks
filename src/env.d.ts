/// <reference types="astro/client" />

type Runtime = import("@astrojs/cloudflare").Runtime<{
  DB: D1Database;
  KV: KVNamespace;
}>;

declare namespace App {
  interface Locals extends Runtime {}
}
