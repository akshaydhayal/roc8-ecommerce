import jwt from "jsonwebtoken";

export function generateJwtToken(payload:string){
    const jwtSecret=process.env.JWT_SECRET_KEY;
    console.log("jwtSecret : ",jwtSecret);
    if(!jwtSecret){
        throw new Error("JWT_SECRET_KEY is not defined");
    }
    const token=jwt.sign(payload,jwtSecret
    //     ,{
    //     expiresIn:'1h'
    // }
);
    console.log("token : ",token);
    return token;
}