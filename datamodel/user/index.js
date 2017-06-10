import mongoose, { Schema } from "mongoose";

const userSchema = Schema({
  name: String
});

export default mongoose.model("User", userSchema);
