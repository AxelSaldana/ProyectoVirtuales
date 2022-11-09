const { Schema, model } = require('mongoose');

const subject = Schema({
    name:{
        type: String,
        require:[true,'El nombre de la materia es obligatorio']
    },
    grade:{
        type: Number,
        min:1,
        max:10,
        require:[true, 'La calificación de la materia es obligatoria']
    },
    dificulty:{
        type: String,
        required:[true, 'El grado  de dificultad de la materia es obligatoria']
    },
    preference:{
        type: String,
        require: [true, 'La preferencia de la materia es obligatoria']
    },
    timeDedicated:{
        type: String,
        require: [true, 'El tiempo dedicado de la materia es obligatorio']
    }
});


const academicSituation = Schema({
    studentId:{
        type: Schema.Types.ObjectId,
    },
    subjects:[subject]
});


module.exports = model('AcademicSituation',academicSituation);