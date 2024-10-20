import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import mongoClientPromise from "./database/mongoClientPromise";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import CredentialsProvider from "next-auth/providers/credentials"
import { userModel } from "./models/user-model";
import bcrypt from "bcryptjs";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({

    adapter: MongoDBAdapter(mongoClientPromise),
    session: {
        strategy: "jwt"
    },

    providers: [
        CredentialsProvider({
            credentials: {
                email: {  },
                password: {  }
            },

            async authorize(credentials) {
                if(credentials == null) return null;

                try{
                    const user = await userModel.findOne({email: credentials.email})
                    // console.log(user);
                    
                    if(user){
                        const isMatch = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );
                        if(isMatch){
                            return user
                        } else{
                            throw new Error("Email or password mismatch");
                        }
                    } else{
                        throw new Error("User not Found!")
                    }
                }catch(error){
                    throw new Error(error)
                }


                
            }
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRECT
        })
    ],
    secret: process.env.AUTH_SECRECT,
})

