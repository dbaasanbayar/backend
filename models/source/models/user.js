import { Mongoose, Schema, model } from "mongoose";

const userSchemas = new Schema(
    {
        email: {type: String, required: true},
        username: {},
        password: {},
    }, {
        timestamps: true
    }
)

export const user = Mongoose.model("User", userSchemas)