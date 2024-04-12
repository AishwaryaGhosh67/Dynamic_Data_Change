const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_CONN)
    .then(() => {
        console.log('Connected to MongoDB WebAppByExpMong_Dur');
    })
    .catch((e) => {
        console.log(e);
    });

