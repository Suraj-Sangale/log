const mongoose = require ("mongoose");
// const express = require("express");
// const app = express();


mongoose.connect("mongodb://localhost:3000",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateindex:true  //to avoid defecreaion warning these 3 lines
}).then(() => {
    console.log(`connection succesfull`);
}).catch((e) => {
    console.log(`no connection`)
});