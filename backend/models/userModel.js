import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//middleware to hash password before saving to DB
userSchema.pre("save", async function (next) {
  //the `this` keyword refers to the object we're sending to the DB
  if (!this.isModified("password")) {
    next();
  }

  //10 is the number of salt rounds to hash the password with
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.matchPasswords = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
