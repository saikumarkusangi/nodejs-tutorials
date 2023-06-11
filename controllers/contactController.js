const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel');
//@desc Get all contacts
//@route GET /api/contact
//@access public

const getContacts = asyncHandler(async (req,res)=>{
    const contacts = await Contact.find();
    res.status(200).json(contacts)
});

//@desc Get  contacts
//@route GET /api/contact/:id
//@access public

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//@desc Create new contacts
//@route POST /api/contact
//@access public

const createContact = asyncHandler(async (req,res)=>{
    const {name,address,phone} =req.body;
    if(!name || !address || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact = await Contact.create({
        name,
        address,
        phone
    });
    res.status(201).json(contact)
});


//@desc Delete  contacts
//@route DELETE /api/contact/:id
//@access public

const deleteContact = asyncHandler(async (req,res)=>{
    const contact = Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw Error('Contact not found');
    }
    await Contact.remove();
    res.status(200).json('deleted')
});

//@desc Update  contacts
//@route PUT /api/contact/:id
//@access public

const updateContact = asyncHandler(async (req,res)=>{
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedContact);
});




module.exports = {
    getContacts,
    createContact,
    getContact,
    deleteContact,
    updateContact}