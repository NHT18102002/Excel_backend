const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb+srv://diepton:rmHovBC2UpLtrEd6@cluster0.j84bpew.mongodb.net/Excel?retryWrites=true&w=majority/EXCEL', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true
    });
    console.log("Connect successfully !");
  } catch (error) {
    console.log("Connect failure !", error);
  }
}

module.exports = { connect };


