const {response, request} = require('express');

const getUser = (req = request, res = response) =>{
    res.json({status:true,message:"get"})
}

const putUser = (req = request, res = response) => {
    res.json({
        status:false,message:"put",
    })
}

const postUser = (req = request, res = response) => {
    const {name} = req.body;
    res.json({
        status:false,message:"post",
        names: name
    })
    res.json({status:false,message:"post"})
}

const deleteUser = (req = request, res = response) => {
    const {id} = req.params;
    const {data} = req.query;
    res.json({status:true,message:"delete",id:id, data})
}


module.exports = {
    getUser, putUser, postUser, deleteUser
};