const users=[];

 const handleCreate=(req,res)=>{
        
       let userId = users.find((user)=>user.id==req.body.id);
         if(!userId){
               
               let createUser = {
                     id:req.body.id,
                     name:req.body.name,
                     email:req.body.email
               }

                 users.push(createUser);

                 res.status(201).send({
                     message:"user created sucessfully",
                     users
                 })
         }

 }
 const getUsers=(req,res)=>{
    res.status(200).send({
        message:'fetched data sucessfully',
        users
    }) 
       
 }
 const getUserById=(req,res)=>{
    const userId = req.params.id;
    const user = users.find((user) => user.id == userId);
    if (user) {
        res.status(200).send({
            message: 'User found successfully',
            user
        });
    } else {
        res.status(404).send({
            message: 'User not found'
        });
    }
 }
 const handleEdit=(req,res)=>{
    const userId = req.params.id; 
    const { name, email } = req.body; 
    const index = users.findIndex((user) => user.id == userId);

    if (index !== -1) { 

        users[index].name = name;
        users[index].email = email;

        res.status(200).send({
            message: "User updated successfully",
            user: users[index]
        });
    } else {
        res.status(404).send({
            message: "User not found"
        });
    }
 }
 const handleDelete=(req,res)=>{
     
    const userId = req.params.id; 

    const index = users.findIndex((user) => user.id == userId);

    if (index !== -1) { 

        users.splice(index, 1);

        res.status(200).send({
            message: "User deleted successfully"
        });
    } else {
        res.status(404).send({
            message: "User not found"
        });
    }
 }

 export default {
      handleCreate,
      getUsers,
      getUserById,
      handleEdit,
      handleDelete
 }