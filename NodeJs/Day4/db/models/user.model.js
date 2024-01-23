import mongoose from 'mongoose';
const UserSchema = mongoose.Schema(
    {
      userName: String,
      age: Number,
      email: String,
      password: String
    },
    {
      timestamps: true,
    }
  );

  const UserModel = mongoose.model('User', UserSchema);
  export default UserModel