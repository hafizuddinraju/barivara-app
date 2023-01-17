import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import connectMongo from "../../../dataBase/conn";
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import AllUsers from "../../../model/userSchema";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export default NextAuth({
    // adapter:MongoDBAdapter(clientPromise),
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name : "Credentials",
            async authorize(credentials, req){
                connectMongo().catch(error => { error: "Connection Failed...!"})

                // check user existance
                const result = await AllUsers.findOne( { email : credentials.email})
                if(!result){
                    throw new Error("No user Found with Email Please Sign Up...!")
                }

                // compare()
                const checkPassword = await compare(credentials.password, result.password);
                
                // incorrect password
                if(!checkPassword || result.email !== credentials.email){
                    throw new Error("Username or Password doesn't match");
                }

                return result;

            }
        })
    ],
    pages:{
        signIn:'/login',
        error:'/login'
    },
    secret:process.env.JWT_SECRET,
    session: {
        strategy: 'jwt',
    }
});