const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
    },
    email:{
        type: String
    },
    address:{
        street:{
            type: String,
        },
        suite:{
            type: String,
        },
        city:{
            type: String,
        },
        zipcode:{
            type: String,
        },
        geo:{
            lat:{
                type: Number,
            },
            lng:{
                type: Number,
            }
        }
    },
    phone:{
        type: Number,
    },
    website:{

    },
    company:{
        name:{

        },
        catchPhrase:{

        },
        bs:{
            
        }
    }
})

const users = mongoose.modell("Users", UserSchema);
module.exports = users;