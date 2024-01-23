const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:String,
    password:String,
    role:{type:String,enum:['admin','user','superadmin'],default:'user'},
    address:String,
    image:String,
    createdById:{type:mongoose.Schema.Types.ObjectId,ref:'User'}

});

//Plans Schema 
const plansSchema = new mongoose.Schema({
    
})
//contacts
const contactSchema = new mongoose.Schema({
    name:String,
    mobile:String,
    groups:{type:Array,default:[]},
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    addedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }

})
//group
const groupSchema = new mongoose.Schema({
    name:String,
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    members:{type:Array,default:[]}
})
//messages
const msgSchema = new mongoose.Schema({
    sender:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    receiver:{type:mongoose.Schema.Types.ObjectId,ref:'Contact'},
    type:{
        type:String,
        enum:['plain','with media','with button','list','location'],
        default:'plain'
    },
    url:String,
    text:String,
    button:String,
    status:{type:String,enum:['pending','sent'],default:'pending'}
})
//templates
const templateSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    name:String,
    type:{
        type:String,
        enum:['plain','with media','with button','list','location'],
        default:'plain'
    },
    url:String,
    text:String,
    button:String,
    status:{type:String,enum:['active','inactive'],default:'inactive'}


})
const User = mongoose.model('User',userSchema);
const Contact = mongoose.model('Contact',contactSchema);
const Message = mongoose.model('Message',msgSchema);
const Group = mongoose.model('Group',groupSchema);
const Template = mongoose.model('Template',templateSchema);
module.exports = {User,Contact,Message,Group,Template};