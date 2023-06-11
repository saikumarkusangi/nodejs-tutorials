const mongoose = require('mongoose');

const userScheme = mongoose.Schema({
    username:{
        type:String,
        required:[true,'please add the user name'],
        unique:[true,"user name already taken"]
    },
    address:{
        type:String,
        required:[true,'please add the user address']
    },
    phone:{
        type:String,
        required:[true,'please add the user phone']
    },
    password:{
        type:String,
        required:[true,'please add the user password']
    }
},
{
    timestamps:true
}
);

module.exports = mongoose.model('user',userScheme)