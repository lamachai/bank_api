import { User, Account, Transfer } from "../models/models.js"

//get only the user info without account or transfers information
const getAllUsers = (req, res)=>{

}

//get only the user and accounts info without transfers information
const getAllUsersAndAccountsInfo = ()=>{

}



//create user
const createUser = async (req, res)=>{
    const { name, email, gender, profession } = req.body

    //create the user
    await User.create({
        name: name,
        email: email,
        gender: gender,
        profession: profession
    })
    .then(async (user)=>{
        //if the user was created, create the account
        await Account.create({userId: user.id})
        .then((account)=>{
            res.status(201).send(account)
        }).catch((err)=>{
            res.status(400).send({error: err})
        })
    }).catch(err=>{
        res.status(400).send({error : err})
    });
}



export { createUser }


