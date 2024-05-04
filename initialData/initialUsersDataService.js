import { createUser } from "../model/dbAdapter.js";

const initialUsers = async () => {
    let users = [
        {
            name: {
                first: "kenny",
                last: "mc",
            },
            phone: "0500000000",
            email: "kenny2@gmail.com",
            password: "Aa123456!!",
            isBusiness: true,
            isAdmin: true,
        },
        {
            name: {
                first: "john",
                last: "wick",
            },
            phone: "0500000000",
            email: "john@gmail.com",
            password: "Aa123456!!",
            isBusiness: false,
            isAdmin: false,
        },
        {
            name: {
                first: "james",
                last: "bond",
            },
            phone: "0500000000",
            email: "james@gmail.com",
            password: "Aa123456!!",
            isBusiness: true,
            isAdmin: false,
        },
    ];
    try {
        let bizId = '';
        for (let user of users) {
            let userFromDB = await createUser(user);
            if (!user.isAdmin && user.isBusiness) {
                bizId = userFromDB._id;
            }
        }
        return bizId;
    } catch (err) {
        return '';
    }
};
export { initialUsers };
