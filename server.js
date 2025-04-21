const express = require('express');
const app = express();
app.use(express.json);

const users = [
    {email: "alice@example.com", password:"alice123"},
    {email: "bob@example.com", password:"bob123"},
    {email: "charlie@example.com", password:"char123"},
];

app.put('/', async(req, res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message: "Email not found"});
    }

    const index = users.findIndex((user)=>{email,password});

    users[index] = password;
    return res.status(200).json({message: "Changed"})
});

app.delete('/', async(req,res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({message:"Email not found"});
    }
    const index = users.findIndex((user)=>{email,password});

    users.splice(index,1);
    return res.status(200).json({message: "User deleted sucessfully"})
})

const PORT = 3000;

app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
});