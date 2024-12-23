const { CUSTOM_USERNAME,
    CUSTOM_USERPASS,
    MONGO_INITDB_DATABASE } = process.env;

db.createUser({
    user: CUSTOM_USERNAME,
    pwd: CUSTOM_USERPASS,
    roles: [{
        role: "readWrite",
        db: MONGO_INITDB_DATABASE
    }],
});

conn = new Mongo();
db = conn.getDB(MONGO_INITDB_DATABASE);

db.users.insertMany([
    { name: "default" },
]);