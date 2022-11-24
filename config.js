// let PORT = process.env.PORT || 8080;
// let connectionString = "mongodb://localhost:27017/";
// let dbName = "dbtest_night";
// let fullUrl = connectionString + dbName;

let PORT = process.env.PORT || 8080;
let connectionString =
    "mongodb+srv://admin:admin123@cluster0.sj3ngcx.mongodb.net/?retryWrites=true&w=majority";
let dbName = "dbtest_night";
let fullUrl =
    "mongodb+srv://admin:admin123@cluster0.sj3ngcx.mongodb.net/" +
    dbName +
    "?retryWrites=true&w=majority";
module.exports = {
    PORT,
    connectionString,
    dbName,
    fullUrl,
};
