const express = require("express");
const {
    addVariant,
    getAllVariants,
} = require("../controller/VariantController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();


//Route to add new variant according to name of product
router.route("/variants/new/:id").post(isAuthenticatedUser,authorizeRoles("admin"),addVariant);

//Route to get all variants according to name of product
router.route("/variants/:id").get(getAllVariants);




module.exports = router;
