import mongoose from "mongoose"

const urlschema = mongoose.Schema({
    shortId:{
        type: String,
        required: true,
        unique: true
    },
    redirectURL:{
        type: String,
        required: true,
    },
    visitHistory:  [ { timestamp: {type:Number} } ],

    createdBy: {
        type: String,
        ref: "users",
    },
},{timestamps: true})

const URL = mongoose.model('url',urlschema);

export default URL;