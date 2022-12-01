
// Require library
var excel = require('excel4node');

const excelfunction = (students) => {
    // Create a reusable style
    var titles = workbook.createStyle({
        font: {
            color: '#000000',
            size: 12,
            bold: true
        },
        // numberFormat: '$#,##0.00; ($#,##0.00); -'
    });


    for (let i = 0; i < students.length; i++) {
        var worksheet = workbook.addWorksheet(students[i].schoolId);
        // Create a new instance of a Workbook class
        var workbook = new excel.Workbook();
        // Set value of cell A1 to 100 as a number type styled with paramaters of style
        worksheet.cell(1, 1).string("Nombre").style(titles);
        worksheet.cell(2, 1).string("Matrícula").style(titles);
        worksheet.cell(3, 1).string("Carrera").style(titles);
        worksheet.cell(4, 1).string("Semestre").style(titles);
        worksheet.cell(5, 1).string("Periodo").style(titles);

        worksheet.cell(1, 2).string(students).style(titles);
        worksheet.cell(2, 2).string("Matrícula").style(titles);
        worksheet.cell(3, 2).string("Carrera").style(titles);
        worksheet.cell(4, 2).string("Semestre").style(titles);
        worksheet.cell(5, 2).string("Periodo").style(titles);

    }

    workbook.write('public/files/Excel1.xlsx');
}

module.exports = {
    excelfunction
}