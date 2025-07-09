const mongoose = require("mongoose");

const urlSchemea = new mongoose.Schema(
    {
        username:{
            type: String,
        },
        redirectUrl:{
            type: String,
            require: true,
        },
    },
    { timestamps:true }
);

const URL = mongoose.model("url", urlSchemea);

module.exports = URL;