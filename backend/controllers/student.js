const { response, request } = require('express');
const Student = require('../models/student');

const postStudent = async(req=request, res=response)=>{
    const {season,currentSemester,major,schoolId,secondLastName,lastName,name} = req.body;
    //validation
    
    try{
        let newStudent = new Student(season,currentSemester,major,schoolId,secondLastName,lastName,name);
        await newStudent.save();
        res.json({message:'Estudiante registrado exitosamente'});
        
    }catch(err){
        console.log(err);
        res.json(err);
    }
}