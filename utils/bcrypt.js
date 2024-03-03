import bcryptjs from "bcryptjs";

const generateHash = async (password) => {
    return await bcryptjs.hash(password, 10);
};

const cmpHash = async (password, hash) => {
    return await bcryptjs.compare(password, hash);
};

export { generateHash, cmpHash };
