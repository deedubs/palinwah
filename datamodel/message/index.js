import mongoose, { Schema } from "mongoose";

const messageSchema = Schema({
  owner: {
    type: Schema.ObjectId,
    ref: "User"
  },
  body: String,
  isPalindrome: {
    type: Boolean,
    default: false
  }
});

messageSchema.pre("save", function(next) {
  const reversedBody = this.body.split("").reverse().join("");

  if (this.body === reversedBody) {
    this.isPalindrome = true;
  }

  next();
});

export default mongoose.model("Message", messageSchema);
