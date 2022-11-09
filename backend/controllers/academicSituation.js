const { response, request } = require('express');
const AcademicSituation = require('../models/academicSituation');
const Student = require('../models/student');

const postAcademic = async(req=request, res=response) =>{
    
    const {student, subjects} = req.body;

    try{
        let newStudent = new Student(student);
        await newStudent.save();
        let academic = new AcademicSituation({
            studentId: newStudent._id,
            subjects
        })
        await academic.save();
        res.json({message:"Situación academica creada"});

    }catch(err){
        res.status(400).json(err);
    }
}

module.exports={
    postAcademic
}