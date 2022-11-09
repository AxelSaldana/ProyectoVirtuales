const { Schema, model } = require('mongoose');

const studentSchema = Schema({
    name:{
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    lastName:{
        type: String,
        required: [true, 'El apellido paterno es obligatorio']
    },
    secondLastName:{
        type: String,
        required: [true, 'El apellido materno es obligatorio']
    },
    schoolId:{
        type: Number,
        required: [true, 'La matricula es obligatoria']       
    },
    major:{
        type: String,
        enum: ['ISTI','ITI','LMI','LAG','ITEM'],
        required: [true, 'La carrera es obligatoria']       
    },
    currentSemester:{
        type: Number,
        min:1,
        required: [true, 'El semestre es obligatorio']       
    },
    season:{
        type: String,
        required: [true, 'El ciclo escolar es obligatorio']       
    }
});

module.exports = model('Student',studentSchema);