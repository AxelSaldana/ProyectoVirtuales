const { Router } = require('express');
const { postAcademic, getAcademic } = require('../controllers/academicSituation');
const router = Router();


// route: /api/academic

router.post('/',postAcademic);
router.get('/',getAcademic);

module.exports=router;