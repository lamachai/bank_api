import validator from "validator"

const validateFields = (req, res, next)=>{
    const { name, email, gender, profession } = req.body
    
    //validating fields
    if (name===undefined || email===undefined || gender===undefined || profession===undefined){
        res.status(400).send({message: "Fill all the fields"});
    }else if (validator.isEmpty(name) || validator.isEmpty(gender) || validator.isEmpty(profession)){
        res.status(400).send({message: "Fill all the fields"});
    }else if (!validator.isEmail(email)){
        res.status(400).send({message: "The email doesn't follow the pattern"});
    }else if (!(gender==="MALE" || gender==="FEMALE")){
        res.status(400).send({message: "Wrong gender"})
    }else{
        next()
    }
}

export { validateFields }