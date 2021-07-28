import {Schema, model} from "mongoose"
import isEmail from 'validator/lib/isEmail'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    names: String,
    lastName:String,
    email:{type:String, unique: true, validate:[isEmail, 'invalid email']},
    password: {type:String, required:true},
    dateOfBirth: {type: Date, required: true},
    headquarters: {type:String, enum:["Miraflores", "La Molina", "San Isidro"]},
    phone: {type: Number, min: 9},
    profile:String,
    SpecializationProgram: String
},{
    timestamps:true,
    versionKey: false,
})

userSchema.statics.encryptPassword = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(pass,salt)
}

userSchema.statics.comparePassword = async (pass, receivedPassword) => {
    return await bcrypt.compare(pass, receivedPassword)
}

export default model('User', userSchema)