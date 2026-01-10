const user = require("../Models/Users");
const bcrypt = require("bcrypt")



// route-get users // method -get

exports.getUser = async (req , res )=>{
    try{
        const users = await user.find();
        res.status(200).json({
            message: "users fetched successfully",
            data: users,
        });
    }catch (error){
        res.status(500).json({error: error.message});
    }
};


// // // route - create user // method post

exports.adduser = async(req , res) =>{
    try{
         const {password} = req.body;

         if(!password){
            return res.status(400).json({message:"password is required"});
         }

         const hashedpassword = await bcrypt.hash(password , 10);

         req.body.password = hashedpassword;

         const userdata = {
            ...req.body,
            password:hashedpassword,
         }

         const user = new user(userdata);
         await user.save();

        // const user = new user (req.body);
        // await user.save();

        res.statuse(201).json({
            message:"user created",
            data:user,
        });
    }
    catch (error){
        res.status(400).json({error:error.message})
    }
};

//  route  = update user // method -put --> j data tame aapo ene replace kari nakhe all field

exports.putuser = async (req ,res)=>{
    try{
    const putuser = await user.findOneAndReplace(
        {_id:req.params.id},
        req.body,
        {
            new:true,
            overwrite:true,
            runValidators:true
        }

    )
    res.json({
        message:"user put successfully",
        data: putuser
    });

} catch (error){
    res.json ({error: error.message })

}
};

exports.patchuser = async (req , res)=>{
    try{
        const patchuser = await user.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {
                new:true,
                runValidators:true,
            }
        )

        if(!patchuser){
            return res.status(404).json({
                message: "user note found"
            })
        }
        res.json({
            message: "user patch successfully",
            data:patchuser
        })
    }
    catch(err){
        res.json({err:err.message,"meg":"osjfst"})
    }
}

//  // // delete method 


exports.deleteUser =async (req , res)=>{
    try{
        const id = req.params.id
        const user = await user.findByIdAndDelete(id);
        res.json({
            message:"user Delete successfully",
            data:user,

        });

    }catch (error){
            res.json({error:error.message});
    }
}
