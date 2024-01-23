const express = require('express');
const{User,Contact,Message,Group,Template} = require('../models/schema');
const router = express.Router();

//Get all users
router.get('/users',async(req,res)=>{
    try{
        const users = await User.find();
        return res.json(users);     
    }catch(err){
        return res.status(404).send(err);
    }
})
//User Registration
router.post('/register',async(req,res)=>{
    try{
        let {email}=req.body;
        //Check if user already exists
        const user = await User.findOne({email});
        if(user){
            return res.status(400).send('Email Already Exists')
        }
        const newUser = await User.create(req.body);
        return res.json({id:newUser._id,name:newUser.name});
    }catch(err){
        return res.status(404).send(err);
    }
});
//Login
router.post('/login',async(req,res)=>{
    try{
        let {email,password}=req.body;
        const user = await User.findOne({email,password});
        if(user){
            return res.status(201).json({name:user.name,_id:user._id});
        }
        return res.status(400).send('Incorrect Username or password');
    }catch(err){
        return res.status(404).send(err);
    }
});
//fetch user by id 
router.get('/getuser/:id',async(req,res)=>{
    try{
        let {id} = req.params;
        //console.log(id);
        const user = await User.findById(id);
        if(user){
            return res.status(201).send(user);
        }else{
            return res.status(400).send('User Not Found!!')
        }
    }catch(err){
       return res.status(404).send(err);
    }
})
//edit profile
router.put('/editprofile/:id',async(req,res)=>{
    try{
        const{id}=req.params;
        const user = req.body;
        let oldUser = await User.findById(id);
        if(oldUser){
            let newuser = {...oldUser.toObject(),...user};
            let updated = await User.findByIdAndUpdate(id,newuser,{new:true});
            return res.status(201).json(updated);
        }
        return res.status(400).send('User not found'); 
    }catch(err){
        return res.status(404).send(err);
    }
})
//Change Password
router.put('/editprofile/password/:id',async(req,res)=>{
    try{
        let {id}=req.params;
        let {password,newpassword} = req.body;
        let user = await User.findById(id);
        if(user.password!==password){
            return res.status(400).send('Incorrect Old Password!!');
        }
        let newUser = {...user.toObject(),password:newpassword};
        let updated = await User.findByIdAndUpdate(id,newUser,{new:true});
        return res.status(201).json(updated);
    }catch(err){
        return res.status(404).send(err);
    }
})
// add user 
router.post('/admin/:id/adduser',async(req,res)=>{
    try{
        let{id}=req.params;
        const findAdmin = await User.findById({_id:id});
        if(findAdmin && findAdmin.role==='admin'){
            let {email}=req.body;
        //Check if user already exists
        const user = await User.findOne({email});
        if(user){
            return res.status(400).send('Email Already Exists')
        }
        const newUser = req.body;
        newUser.createdById = id;
        await User.create(newUser);
        res.json(newUser);
        }
    }catch(err){
        return res.status(404).send(err);
    }
})
//users created by admin
router.get('/admin/users/:id',async(req,res)=>{
    try{
        let{id}=req.params;
        const users =await User.find({createdById:id});
        if(users){
            res.json(users)
        }else{
            res.status(400).send('No users found!!');
        }
    }catch(err){
        res.status(404).send(err);
    }
})

//add a contact
router.post('/user/:id/contacts',async(req,res)=>{
    try{
        let {id}=req.params;
        let {mobile,groups}=req.body;
        //check if already exists
        const findContact = await Contact.findOne({mobile, addedBy:id});
        if(findContact){
           return res.status(400).send('Contact already exists!!');
        }
        const newContact = req.body;
        newContact.addedBy = id;
        const createdContact = await Contact.create(newContact);
        if (groups && groups.length > 0) {
            await Promise.all(groups.map(async (groupId) => {
                const group = await Group.findById(groupId);
                if (group) {
                    group.members.push(createdContact._id);
                    await group.save();
                }
            }));
        }
        return res.status(201).json({message:'Contact Added Successfully!!'});
    }catch(err){
        res.status(404).send(err);
    }
});
//fetch contacts of a user
router.get('/user/:id/contacts',async(req,res)=>{
    try{
        let {id} = req.params;
        const contacts = await Contact.find({addedBy:id});
        if(contacts.length>0){
            return res.status(200).json(contacts)
        }else{
            return res.status(400).json({message:'No Contacts Found!!'})
        }
      
    
    }catch(err){
        res.status(404).send(err);
    }
})
//fetch Contact By Id
router.get('/contact/:id',async(req,res)=>{
    try{
        let{id}=req.params;
        let contact = await Contact.findById(id);
        if(contact){
            res.status(200).send(contact);
        }else{
            res.status(404).send('Details Not found')
        }
    }catch(err){
        res.status(404).send(err);
    }
})
//edit contact
router.put('/contact/:cid',async(req,res)=>{
    try{
        let {cid} = req.params;
        let oldContact = await Contact.findById(cid);
        if(oldContact){
            let newContact = {...oldContact.toObject(),...req.body};
            const updated = await Contact.findByIdAndUpdate(cid,newContact,{new:true});
            return res.status(201).json({message:'Updated!!!'});
        }else{
            return res.status(404).send('Contact Not found!!');
        }
    }catch(err){
        res.status(404).send(err);
    }
})
//delete a contact 
router.delete('/contact/:id',async(req,res)=>{
    try{
        let {id} = req.params;
        const contact = await Contact.findById(id);
        if (!contact) {
            return res.status(400).json({ error: 'Contact not found' });
        }
        const groupsToUpdate = contact.groups || [];
        // Remove the contact from each group's members array
        await Group.updateMany(
            { _id: { $in: groupsToUpdate } },
            { $pull: { members: id } }
        );
        const deleted = await Contact.findByIdAndDelete(id);
        return res.status(200).json({message:'Contact Deleted!!'});
    }catch(err){
        res.status(404).send(err);
    }
})
//send a message
router.post('/messages',async(req,res)=>{
try{
    let msg = req.body;
    let newmsg = await Message.create(msg);
    if(newmsg){
        return res.status(201).json({message:'Message Sent Successfully!!'})
    }else{
        return res.status(400).send('Error sending message')
    }
   
}catch(err){
    return res.status(404).send(err);
}
});
// fetch messages
router.get('/:id/messages', async (req, res) => {
    try {
      let { id } = req.params;
      const messages = await Message.find({ sender: id });
  
      if (messages && messages.length > 0) {
        const msgs = await Promise.all(
          messages.map(async (a) => {
            try {
              const contact = await Contact.findById(a.receiver);
  
              if (contact) {
                let output = {
                    _id:a._id,
                    sender:a.sender,
                    contact:contact.name,
                    type:a.type,
                    text:a.text,
                    status:a.status,
                    url:a.url,
                    button:a.button
                }
                return output;
                
              }
            } catch (err) {
              return res.status(404).send(err);
            }
          })
        );
  
        return res.status(200).send(msgs);
      }
  
      return res.status(404).send('No Messages Found');
    } catch (err) {
      return res.status(500).send(err);
    }
  });
//create a group
router.post('/groups/:id',async(req,res)=>{
    try{
        let {id} = req.params;
        let {name}=req.body;
        const group = await Group.findOne({creator:id,name:name});
        if(group){
           return res.status(400).send({message:`Group with the name ${name} already exixts!!`});
        }
        let newGp = {name:req.body.name,creator:id};
        await Group.create(newGp);
        res.status(201).json('Group Created Successfully!!!');
    }catch(err){
        res.status(404).send(err);
    }
});
//fetch groups of a user
router.get('/groups/:id',async(req,res)=>{
    try{
        let {id}=req.params;
        const groups = await Group.find({creator:id});
       res.status(200).json(groups);

    }catch(err){
        res.status(404).send(err);
    }
});
//delete a group
router.delete('/groups/:id',async(req,res)=>{
    try{
        let {id} = req.params;
        let group = await Group.findById(id);
        if(!group){
            return res.status(400).send({message:"Group Not Found!!"});
        }
        const contactsUpdate = group.members || [];
        await Contact.updateMany(
            { _id: { $in: contactsUpdate } },
            { $pull: { groups: id } }
        );
        const deleted = await Group.findByIdAndDelete(id);
        res.status(200).json({message:'Group deleted successfully!!'});

    }catch(err){
        res.status(404).send(err);
    }
})
//create template
router.post('/user/:id/template',async(req,res)=>{
    try{
        let {id}=req.params;
        let {name} = req.body;
        let findTemp = await Template.findOne({user:id,name:name});
        if(findTemp){
            return res.status(400).json({message:'Name already exists!!'});
        }
        let newTemp = await Template.create(req.body);
        if(newTemp){
            return res.status(201).json({message:'New Template created!!'})
        }else{
            return res.status(400).json({message:'Error creating template'})
        }
       
    }catch(err){
        return res.status(404).send(err);
    }
});
//fetch all templates of a user
router.get('/user/:id/templates',async(req,res)=>{
    try{
        let {id}=req.params;
        let templates = await Template.find({user:id});
        return res.status(200).json(templates);
    }catch(err){
        return res.status(400).send(err);
    }
})
//fetch a template
router.get('/template/:id',async(req,res)=>{
    try{
        let{id}=req.params;
        let findT = await Template.findById(id);
        if(findT){
            return res.status(200).json(findT);
        }
        return res.status(404).json({message:'Template Not Found!!'});
    }catch(err){
        res.status(400).send(err)
    }
})
//edit a template
router.put('/template/:id',async(req,res)=>{
    try{
        let{id}=req.params;
        let findTemp = await Template.findById(id);
        if(findTemp){
            const updated = await Template.findByIdAndUpdate(id,req.body,{new:true});
            return res.status(201).json({message:'Updated!!!'});
        }else{
            return res.status(404).json({message:'Template Not found!!'})
        }
    }catch(err){
        return res.status(400).send(err);
    }
});
//delete a template
router.delete('/template/:id',async(req,res)=>{
    try{
        let {id}=req.params;
        const deleted = await Template.findByIdAndDelete(id);
        if(deleted){
            return res.status(201).json({message:'Template Deleted Successfully!!'});
        }
        return res.status(404).json({message:'Template Not found!!'});
    }catch(err){
        return res.status(400).send(err);
    }
})
module.exports = router;