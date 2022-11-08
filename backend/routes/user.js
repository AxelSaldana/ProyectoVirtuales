const {Router} = require('express');
const router = Router();
const {getUser,putUser, postUser, deleteUser} = require('../controllers/user');


router.get('/',getUser);
router.put('/', putUser);
router.post('/',postUser)
router.delete('/:id',deleteUser)

module.exports = router;