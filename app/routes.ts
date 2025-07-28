import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/Home.tsx"),
    route("/contact","routes/Contact.tsx"),
    route("/prices","routes/Prices.tsx")
] satisfies RouteConfig;
