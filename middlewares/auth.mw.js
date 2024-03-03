import { verifyToken } from "../token/jwt.js"
import { 
    authToken_err, 
    noTokenProvided,
    unauthorizedLvl ,
    handleError
} from "../utils/errors.js"

const authMidelleware = async (req, res, next) => {
    try {
        if (!req.headers[process.env.HEADER]) throw new Error(noTokenProvided);
        const payload = await verifyToken(req.headers[process.env.HEADER]) // x-auth-token given name. 
        req.user = payload;
        next();
    } catch (err) {
        handleError(res, 401, unauthorizedLvl);
        authToken_err(err)
    }
};

export default authMidelleware;