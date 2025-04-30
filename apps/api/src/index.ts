import { Elysia } from "elysia";
import { burgers } from "@minnebar-2025/burgers";
import { cors } from "@elysiajs/cors";

const app = new Elysia({ prefix: "/api" })
	.use(cors())
	.get("/burgers", () =>
		burgers.filter((b) => !b.kitchen_floor).sort((a, b) => a.rank - b.rank),
	)
	.listen(3000);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
