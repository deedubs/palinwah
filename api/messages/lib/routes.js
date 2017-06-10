import * as handlers from "./handlers";

export const index = {
  path: "/",
  method: "GET",
  config: {
    description: "List available messages",
    tags: ["api"],
    handler: handlers.GetMessages
  }
};
