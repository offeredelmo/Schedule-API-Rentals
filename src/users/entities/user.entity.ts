import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";



@Schema()
export class User {

    id: string;
    
    @Prop()
    name:string;

    @Prop()
    phone:string;

    @Prop()
    email:String;

    @Prop()
    password:String;

    @Prop({default: false})
    delete:boolean;
}
export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);