import mongoose from "mongoose";
import express from "express";

mongoose.connect('mongodb+srv://nayankatiyara:Nayan@2003@Cluster-Blog-website.9iulijo.mongodb.net/Blog-website?retryWrites=true&w=majority')
    .then(() => {
        console.log("DB is connected");
    }).catch(err => {
        console.log(err);
    })

const app = express();

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})