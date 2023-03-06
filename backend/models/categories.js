const mongose = require('mongose');

const categorySchema = new mongose.schema({

    name: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model('Category', categorySchema) 