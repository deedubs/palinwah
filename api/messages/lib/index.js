import pkg from "../package.json";
import * as routes from "./routes";

export function register(server, options, ready) {
  Object.keys(routes).forEach(r => {
    server.route(routes[r]);
  });
  ready();
}

register.attributes = { pkg };
