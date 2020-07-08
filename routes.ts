import { Router } from "https://deno.land/x/oak/mod.ts";
const router = new Router();

router.get("/api/v1/products", ({ response }: { response: any }) => {
  response.body = "Hello world";
});

export default router;
