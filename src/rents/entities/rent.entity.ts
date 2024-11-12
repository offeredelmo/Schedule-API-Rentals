



import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { User } from "src/users/entities/user.entity";



@Schema({ timestamps: true })
export class Rent {
    @Prop()
    responsible: string;

    @Prop()
    phone: string;

    @Prop()
    price: number;

    @Prop()
    paid: boolean;

    @Prop()
    date: Date;

    @Prop()
    type_event: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user_id: User;
}
export type RentDocument = HydratedDocument<Rent>;
export const RentSchema = SchemaFactory.createForClass(Rent);