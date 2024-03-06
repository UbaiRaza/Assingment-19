const express = require('express');

const app = express();


// --- Methods ----
// GET
// POST
// PUT
// DELETE

// app.use(express.json());


app.get("/task", (req, res) => {
    return res.json({ ubaid: "raza" });
})

app.post("/task", (req, res) => {
    return res.json({ Zain: "raza" });

});
app.put("/task", (req, res) => {
    return res.json({ Mohtashim: "raza" });

});
app.delete("/task", (req, res) => {
    return res.json({ Mohtashim: "raza" });

});
app.patch("/task", (req, res) => {
    return res.json({ Hamid: "raza" });

});










app.listen(3000, () => {
    console.log('Server is running on port 3000');
});