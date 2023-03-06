
const mongose = require('mongose');

const productSchema = new mongose.schema({

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    }

});


module.exports = mongoose.model('Product', productSchema)