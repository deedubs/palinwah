import * as handlers from "./handlers";

export const getMessages = {
  path: "/",
  method: "GET",
  config: {
    description: "List available messages",
    tags: ["api"],
    handler: handlers.GetMessages
  }
};

export const showMessage = {
  path: "/{messageId}",
  method: "GET",
  config: {
    description: "Show a message",
    tags: ["api"],
    handler: handlers.ShowMessage
  }
};

export const deleteMessage = {
  path: "/{messageId}",
  method: "DELETE",
  config: {
    description: "Delete a message",
    tags: ["api"],
    handler: handlers.DeleteMessage
  }
};
