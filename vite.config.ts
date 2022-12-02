import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import svgLoader from "vite-svg-loader";
import { VitePluginFonts } from "vite-plugin-fonts";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Layouts(),
    Pages({
      onRoutesGenerated(routes) {
        const transformRoute = (route) => ({
          ...route,
          path: route.path.replace("/:@", "/@:"),
          children: route.children?.map(transformRoute) ?? [],
        });

        return routes.map(transformRoute);
      },
    }),
    svgLoader({
      svgoConfig: {
        multipass: true,
      },
    }),
    VitePluginFonts({
      google: {
        families: ["Public Sans"],
      },
    }),
    Components({
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts",
    }),
  ],
});
