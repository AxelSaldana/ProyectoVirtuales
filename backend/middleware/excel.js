
// Require library
var excel = require('excel4node');
const AcademicSituation = require('../models/academicSituation');

const excelfunction =async (students) => {
    // Create a reusable style
    workbook=new excel.Workbook();
    // console.log(students);

    var titles = workbook.createStyle({
        font: {
            color: '#000000',
            size: 12,
            bold: true
        },
        // numberFormat: '$#,##0.00; ($#,##0.00); -'
    });
    var text = workbook.createStyle({
        font: {
            color: '#000000',
            size: 12,
        },
        // numberFormat: '$#,##0.00; ($#,##0.00); -'
    });


    for (let i = 0; i < students.length; i++) {
        var worksheet = workbook.addWorksheet(students[i].schoolId);
        // Set value of cell A1 to 100 as a number type styled with paramaters of style
        worksheet.cell(1, 1).string("Nombre").style(titles);
        worksheet.cell(2, 1).string("Matrícula").style(titles);
        worksheet.cell(3, 1).string("Carrera").style(titles);
        worksheet.cell(4, 1).string("Semestre").style(titles);
        worksheet.cell(5, 1).string("Periodo").style(titles);

        worksheet.cell(1, 2).string(students[i].name).style(text);
        worksheet.cell(2, 2).number(students[i].schoolId).style(text);
        worksheet.cell(3, 2).string(students[i].major).style(text);
        worksheet.cell(4, 2).number(students[i].currentSemester).style(text);
        worksheet.cell(5, 2).string(students[i].season).style(text);

        worksheet.cell(7,1).string("Analisis del semestre anterior").style(titles);

        worksheet.cell(8,1).string("Materia").style(titles);
        worksheet.cell(8,2).string("Calificación").style(titles);
        worksheet.cell(8,3).string("Dificultad").style(titles);
        worksheet.cell(8,4).string("Preferencia").style(titles);
        worksheet.cell(8,5).string("Tiempo dedicado").style(titles);
        
        let subjectLine = 9;
        let academic = await AcademicSituation.find({studentId:students[i]._id});
        for(let j=0;j<academic.length;j++){
            console.log(academic[j]);
            for(let k=0;k<academic[j].subjects.length;k++){
                console.log(academic[j].subjects[k]);
                worksheet.cell(subjectLine,1).string(academic[j].subjects[k].name).style(text);
                worksheet.cell(subjectLine,2).number(academic[j].subjects[k].grade).style(text);
                worksheet.cell(subjectLine,3).string(academic[j].subjects[k].dificulty).style(text);
                worksheet.cell(subjectLine,4).string(academic[j].subjects[k].preference).style(text);
                worksheet.cell(subjectLine,5).string(academic[j].subjects[k].timeDedicated).style(text);
                subjectLine++;
            }
            subjectLine++;
        }

        
    }

    workbook.write('public/files/situacionAcademica.xlsx');
}

module.exports = {
    excelfunction
}