import { config } from "dotenv";
config();
const IS_ADMIN = process.env.IS_ADMIN;

const verifyRole = (req, res, next) => {
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
export default verifyRole;
