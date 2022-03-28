const app = require("./index");

const connect = require("./configs/db");



app.listen(5566, async () => {
    try {
        await connect();
        console.log("listening on port 5566");

    } catch (error) {
        console.log('error:', error)
        
    }
})