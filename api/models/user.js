
import mongoose from "mongoose"
import uniqueValidator from "mongoose-unique-validator"
const Schema = mongoose .Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password: {
        type : String,
        required: true
    },
    photo: {
        type: String
    },
    userName:{
        type: String,
        unique: true,
        required: true
    },
    description:{
        type: String
    }
});

UserSchema.plugin(uniqueValidator,{message: "{PATH} must be unique"})

export const User = mongoose.model("User",UserSchema)
