import type { Burger } from "./src/burger.type";
import burgerJSON from "./src/burgers.json";

/** Array of all available burgers */
const burgers = burgerJSON as Burger[];

export { burgers, type Burger };
