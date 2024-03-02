const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:String,
    password:String,
    role:{type:String,enum:['admin','user','superadmin'],default:'user'},
    address:String,
    image:{
        data:Buffer,
        type:String
    },
    plan:{type:mongoose.Schema.Types.ObjectId,ref:'SubsPlan'},
    createdById:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
});

//Plans Schema 
const plansSchema = new mongoose.Schema({
    name:String,
    duration:{
        type:String,
        enum:['Monthly','Quarterly','Yearly'],
        default:'Monthly'
    },
    price:String,
    messages:Number,
    contacts:{
        type:Number,
        
    },
    templates:Number,
    chatBot:{
        type:String,
        enum:['yes','no'],
        default:'yes'
    },
    chatListAccess:{
        type:String,
        enum:['yes','no'],
        default:'yes'
    },
    groupListAccess:{
        type:String,
        enum:['yes','no'],
        default:'yes'
    },
    trial:{
        type:String,
        enum:['yes','no'],
        default:'yes'
    },
    featured:{
        type:String,
        enum:['yes','no'],
        default:'yes'
    },  

})
//Support Tickets
const ticketSchema = new mongoose.Schema(
    {
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    subject:String,
    message:String,
    reply:String,
    status:{
        type:String,
        enum:['pending','resolved'],
        default:'pending'
    }
},
{timestamps:true}
)
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
//bulk messages
const bulkMsgSchema = new mongoose.Schema({
    sender:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    receivers:{type:Array,default:[]},
    msg:String,
    status:{type:String,enum:['pending','sent']}
});
//live chat
const chatSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    sent:String,
    received:{type:String,default:'Hello from server!'}
});
const scheduleSchema = new mongoose.Schema({
    sender:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    receiver:{type:mongoose.Schema.Types.ObjectId,ref:'Contact'},
    name:String,
    type:{
        type:String,
        enum:['plain','with media','with button','list','location'],
        default:'plain'
    },
    text:String,
    scheduleAt:String,
    status:{type:String,enum:['pending','sent'],default:'pending'}
})
const imageSchema = new mongoose.Schema({
    data: Buffer,
    contentType: String,
  });
const User = mongoose.model('User',userSchema);
const Contact = mongoose.model('Contact',contactSchema);
const Message = mongoose.model('Message',msgSchema);
const Group = mongoose.model('Group',groupSchema);
const Template = mongoose.model('Template',templateSchema);
const SubsPlan =mongoose.model('SubsPlan',plansSchema);
const Ticket=mongoose.model('Ticket',ticketSchema);
const Image=mongoose.model('Image',imageSchema);
const Chats = mongoose.model('Chats',chatSchema);
const BulkMessage = mongoose.model('BulkMessage',bulkMsgSchema);
const Schedule = mongoose.model('Schedule',scheduleSchema);


module.exports = {
    User,
    Contact,
    Message,
    Group,
    Template,
    SubsPlan,
    Ticket,
    Image,
    Chats,
    BulkMessage,
    Schedule
};