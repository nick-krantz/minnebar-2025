import { $ } from "bun";

await Promise.all([$`bun api:dev`, $`bun web:dev`]);
