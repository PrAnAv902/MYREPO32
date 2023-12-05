const Todo = require("../models/Todo");

//exporting our function createTodo
exports.createTodo = async(req,res) =>{
    try{
      //extract title & description from req.body
      const {title,description} = req.body;
      //create a new todo obj and insert in DB
      const response = await Todo.create({title,description});
      //send a json response with success flag
      res.status(200).json(
        {
            success:true,
            data:response,
            message:"Entry created Successfully"
        }
      );
    }

    catch(error){
         console.log("Error while inserting new record-> "+error);
         res.status(500).json(
            {
                success:false,
                data:"INTERNAL SERVER ERROR",
                message:error.message
            }
          );
    }
}