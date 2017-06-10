import { Message } from "dm";

export function GetMessages(request, reply) {
  const query = {};

  Message.find(query).then(messages => {
    reply(messages);
  });
}

export function CreateMessage(request, reply) {
  const { payload } = request;

  Message.create(payload).then(message => {
    reply(message).header("Location", `/messages/${message._id}`).code(201);
  });
}

export function ShowMessage(request) {}

export function UpdateMessage(request, reply) {}
