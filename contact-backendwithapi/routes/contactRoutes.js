const express = require("express");
const router = express.Router();
const validateTokenHandler = require("../middleware/validateTokenHandler")
const { getContacts, 
        getContact, 
        createContact, 
        updateContact, 
        deleteContact
       } = require("../controllers/contactControllers");

//Restapi
router.use(validateTokenHandler)
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);












module.exports = router;