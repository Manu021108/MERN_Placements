export const adminOnly = (

req,

res,

next

)=>{

try{

if(

req.user.role !== "admin"

){

return res.status(403).json({

success:false,

message:"Only Admin Can Access"

});

}

next();

}

catch(error){

return res.status(500).json({

success:false,

message:error.message

});

}

};