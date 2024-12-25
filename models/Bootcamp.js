const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
   name: {
       type: String,
       required: [true, 'Name is required'],
       trim: true,
       unique: true,
       maxlength: [50, 'Name cannot be more than 50 characters']
   },
    slug: String,
    description: {
       type: String,
        required: [true, 'Description is required'],
        maxLength: [500, 'Description cannot be more than 500 characters']
    },
    website: {
       type: String,
       match: [
           /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
           'Website is invalid'
       ]
    },
    phone: {
       type: String,
       maxlength: [20, 'Phone number cannot be more than 20 characters']
    },
    email: {
       type: String,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Email is invalid'
        ]
    },
    address: {
       type: String,
       required: [true, 'Address is required'],
    },
    location: {
       //GeoJSON Point
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String
    },
    careers: {
       type: [String],
       required: true,
       enum: [
           'Web Development',
           'Mobile Development',
           'UI/UX',
           'Data Science',
           'Business',
           'Other',
       ]
    },
    averageRating: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating must can not be more than 10'],
    },
    averageCost: Number,
    photo: {
        type: String,
        default: 'no-photo.jpg',
    },
    housing: {
        type: Boolean,
        default: false,
    },
    jobAssistance: {
        type: Boolean,
        default: false,
    },
    jobGuarantee: {
        type: Boolean,
        default: false,
    },
    acceptGi: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);