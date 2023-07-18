// in mvc architecture view contains the frontend  and we have to establish the connection between view and contoller which is done with (res.render) method 

// import the model in controller
const User = require('../model/userModel')


const userController = {
    index: (req,res) => {
        res.render('index.ejs')
    },
    new: (req,res) => {
        res.render('create.ejs')  
        // it used to render(display) the views. and help to recieve the request + data and sending to the view->(res,render) 
    },
    edit: (req,res) => {
        res.render('edit.ejs')
    },


    //we create a new controller to handler incoming data from front end
    // api controller which handle post request
    newUser: async (req,res) => {
        try{
            const newUser = req.body // recieve data fromfront end

            //email exists or not
            const extEmail =  await User.findOne({ email: newUser.email })
                if(extEmail)
                        return res.status(401).json({ msg: `${newUser.email} already exists.`})

            // mobile exist or not
            const extMobile = await User.findOne({ mobile: newUser.mobile })
                if(extMobile)
                        return res.status(401).json({ msg: `${newUser.mobile} already exists`})

            await User.create(newUser) // to create new user

            return res.status(200).json({ msg: "User created successfully" , newUser })
        }catch(err) {
            console.log(err) //exception handling
        }
    },

    readUser: async (req,res) =>  {
        try{
            // 200 -> status ok
            // 400 -> bad request
            // 404 - > pnf
            // 401 -> path not found
            // 500 -> unauthorized server
            
            let users =  await User.find()
                res.status(200).json({ length: users.length,  users })

        }catch(err) {
            //500 - internet server error
            return res.status(500).json({ msg: err.message })
        }
    },
    readSingleUser: async ( req,res ) => {
        try{
            let id = req.params.id//ref id fromrouter params
            
            let single = await User.findById({ _id: id }) //requesting db to get user info 
                if(!single)
                    return res.status(404).json({ msg:`Requested user id not found`})

                        return res.status(200).json({ user: single })
        }catch (err) {
            return res.status(500).json ({ msg: err.message })
        }
    },


    updateUser: async (req,res) => {
        try{
            let id = req.params.id // read id from router params
            const data = req.body

            //user id exist not found
            
            let extUser = await User.findById({ _id:id})
            if(!extUser)
            return res.status(404).json({ msg:`Requested user id not found`})   
            
            //update logic
            await User.findByIdAndUpdate({ _id:id} ,data)

            return res.status(200).json({ msg: `User data updated successfully`})

        }catch (err) {
            return res.status(500).json ({ msg:err.message })
        }
    },

    
    deleteUser: async (req,res) => {
        try{
            let id = req.params.id

            let extUser = await User.findById({_id:id})
            if(!extUser)
            return  res.status(404).json({ msg: `Requested user id not found`})

            await User.findByIdAndDelete({_id: id})
            return res.status(200).json({ msg:`User data deleted successfully`})

        }catch(err) {
            return res.status(500).json({ msg: err.message})
        }
    },

    pnf: (req,res) => {
        res.render('pnf.ejs') // pnf is default controller so it must be at the end
    }
 }

module.exports = userController


