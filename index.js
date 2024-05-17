import app from "./app/server.js"

const port = 5252


app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});
