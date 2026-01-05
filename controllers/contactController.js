// @desc get all contacts
// @route GET api/contacts
//  @access public

const getContacts = (req, res) => {
    res.status(200).json("get all contacts");
}

// @desc create contacts
// @route POST api/contacts 
//  @access public

const createContact = (req, res) => {
    console.log("req body is : ", req.body);
    const {name, email, phone } = req.body;
    if(!name || !email || !phone ){
        res.status(400);
        throw new Error("all fields ar mandatory");
    }
    res.status(201).json("get all contacts");
}

// @desc update one contact
// @route PUT api/contacts/:id
//  @access public

const getContact = (req, res) => {
    res.status(200).json(`Get contact for ${req.params.id}`);
}
// @desc create contacts
// @route POST api/contacts/:id
//  @access public

const updateContact = (req, res) => {
    res.status(200).json(`Update a contact for ${req.params.id}`);
}

// @desc Delete contacts
// @route DELETE api/contacts/:id
//  @access public

const deleteContact = (req, res) => {
    res.status(200).json(`Delete a contact for ${req.params.id}`);
}

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}