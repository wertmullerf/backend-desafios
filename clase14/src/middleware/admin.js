// const admin = true;
// module.export = verifyRole = (req, res, next) => {
//     if (!admin) {
//         res.json({
//             error: -2,
//             description:
//                 "You do not have permissions to access to this section 🚫",
//         });
//     } else {
//         next();
//     }
// };

const IS_ADMIN = true;

module.exports = verifyRole = (req, res, next) => {
    if (!IS_ADMIN)
        return res.status(401).json({
            error: -2,
            description:
                "You do not have permissions to access to this functionality 🚫",
        });
    else {
        console.log("Access Granted ✅");
        next();
    }
};
