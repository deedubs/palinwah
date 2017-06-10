import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/palinwah_test");

export { Message } from "./message";
export { User } from "./user";
