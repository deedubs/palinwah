import { Message } from "dm";

export function GetMessages(request, reply) {
  const query = {};

  Message.find(query).then(reply);
}

export function CreateMessage(request, reply) {
  const { payload } = request;

  Message.create(payload).then(message => {
    reply(message).header("Location", `/${message._id}`).code(201);
  });
}

export function ShowMessage(request, reply) {
  const { messageId } = request.params;

  Message.findOne({ _id: messageId }).then(reply);
}

export function DeleteMessage(request, reply) {
  const { messageId } = request.params;

  Message.remove(messageId).then(() => reply().code(204));
}
