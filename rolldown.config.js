import { defineConfig } from "rolldown";
import { dts } from "rolldown-plugin-dts";
export default defineConfig({
  input: {
    main: "main.ts",
  },
  output: {
    dir: "dist",
  },
  plugins: [dts()],
});
