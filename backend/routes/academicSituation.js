const { Router } = require('express');
const { postAcademic } = require('../controllers/academicSituation');
const router = Router();


// route: /api/academic

router.post('/',postAcademic);

module.exports=router;