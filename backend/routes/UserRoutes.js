import express from "express"
//  import user model 
import bcrypt from 'bcryptjs';
import {
    generateToken,
    isAuth,
    isBusiness
} from "../utils.js";
import expressAsyncHandler from "express-async-handler";
import Business from "../Models/Business.js";
import {
    businessSignin,
    businessSignup,
    verifyStaff
} from "../Controllers/businessController.js";
import {
    staffSignin,
    staffSignup
} from "../Controllers/staffController.js";


const userRouter = express.Router();

userRouter.post(
    "/business/signup",
    businessSignup
)

userRouter.post(
    "/business/signin",
    businessSignin
);
userRouter.put(
    "/business/profile",
    // isAuth,
    expressAsyncHandler(async (req, res) => {
        // this will update business 
    })
)
userRouter.put(
    "/business/verify-staff",
    isAuth,
    isBusiness,
   verifyStaff
)

userRouter.post(
    "/staff/signup",
    staffSignup
)
userRouter.post(
    "/staff/signin",
    staffSignin
);
userRouter.put(
    "/staff/profile",
    // isAuth,
    expressAsyncHandler(async (req, res) => {
        // this will update Staff profile 
    })
)

export default userRouter