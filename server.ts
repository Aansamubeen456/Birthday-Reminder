import { resolve, sep } from "node:path";

const root = resolve("dist");

Bun.serve({
  hostname: "0.0.0.0",
  port: Number(process.env.PORT || 3000),

  async fetch(request) {
    const pathname = decodeURIComponent(new URL(request.url).pathname);
    const filePath = resolve(root, "." + pathname);

    if (filePath !== root && !filePath.startsWith(root + sep)) {
      return new Response("Forbidden", { status: 403 });
    }

    const file = Bun.file(filePath);

    if (filePath !== root && await file.exists()) {
      return new Response(file);
    }

    return new Response(Bun.file(resolve(root, "index.html")));
  },
});