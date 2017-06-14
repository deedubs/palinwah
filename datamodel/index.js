import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/palinwah_test");

export { default as Message } from "./message";
export { default as User } from "./user";
