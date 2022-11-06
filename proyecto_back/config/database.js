const mongoose = require("mongoose");//dependencia mongobd para conexion a la base de datos y creacion
const host = "localhost";
const port = "27017";
const db = "cafebardh";
// proceso de conexion con mongodb y que utilice las variables creadas anteriormente

exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console,"Mongodb connection error"))
}