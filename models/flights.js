const mongoose = require('mongoose');
//optional shortcut variable
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {type: String, match: /[A-F][1-9]\d?/},
    price: {type: Number,
            min: 10},
    flight: {type: Schema.Types.ObjectId, ref: 'Flight'}
},  {
  timestamps: true
});

const destinationSchema = new Schema({
    airport: {type: String},
    arrival: {type: Date}
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: {type: String,
              enum: ['American', 'Delta', 'Southwest', 'United']  },
    airport: {type: String,
            enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    flightNo: {type: Number,
               min: 10,
               max: 9999,
    },
    departs: {
        type: Date,
        default: () => {
            const oneYear = 365 * 24 * 60 * 60 * 1000;
            return new Date(Date.now() + oneYear);
        }
    },
    destination: [destinationSchema]
}, {
    timestamps: true
});
//compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema)