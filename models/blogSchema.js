const mongoose = require('mongoose')


const blogSchema = mongoose.Schema({
    creator_id:{
        type: mongoose.Schema.Types.ObjectId,    // links the blog to user
        ref: 'user' ,                             // refers to the user model
        required: true 
    },

    created_by: {
        type: String
       
    },

    created_at: {
        type: Date,
    
        default: Date.now
    },
   
    blog_title: {
        type: String,
        required: true
    },

    blog_content: {
        type: String,
        required: true
    },
   
    private: {
        type: Boolean,
        default:false
        
    },

})

module.exports = mongoose.model('blog', blogSchema)














