const { response, request } = require('express');
const { excelfunction } = require('../middleware/excel');
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

const getAcademic=async(req=request, res=response) =>{
    let students = await Student.find();
    console.log(students);
    excelfunction(students);
    res.json({
        message:"Excel creado"
    })
}

module.exports={
    postAcademic,
    getAcademic
}