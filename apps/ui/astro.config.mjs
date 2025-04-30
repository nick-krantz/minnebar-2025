// @ts-check
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
	env: {
		schema: {
			API_URL: envField.string({ context: "client", access: "public" }),
			MAPBOX_KEY: envField.string({ context: "client", access: "public" }),
			MAPBOX_STYLE_KEY_LIGHT: envField.string({
				context: "client",
				access: "public",
			}),
			MAPBOX_STYLE_KEY_DARK: envField.string({
				context: "client",
				access: "public",
			}),
		},
	},
	devToolbar: {
		enabled: false,
	},
});
