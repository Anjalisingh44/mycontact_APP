const express = require('express');
const router = express.Router();
const { getContacts, CreateContact, getContact, UpdateContact, DeleteContact } = require('../controllers/contactController');
const validateToken = require('../middleware/validateTokenHandler');
router.use(validateToken);
router.get('/', getContacts);
router.post('/', CreateContact);
router.get('/:id', getContact);
router.put('/:id', UpdateContact);
router.delete('/:id', DeleteContact);

module.exports = router;
