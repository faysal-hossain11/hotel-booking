import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
    const {
        fname,
        lname,
        email,
        password,
    } = await request.json();

    // connection the mongodb database
    await dbConnect();

    // password convart to bcryptjs
    const hashedPassword = await bcrypt.hash(password, 5);

    // create a new user
    const newUser = {
        name: `${fname} ${lname}`,
        email,
        password: hashedPassword
    }

    // set as a schema file
    try {
        await userModel.create(newUser);
        return new NextResponse("User has been created", {
            status: 201,
        })
    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        })
    }
}