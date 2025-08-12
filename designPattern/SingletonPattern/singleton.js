
class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance;
        }

        this.connection = "Connected to the database";
        Database.instance = this;
    }

    getConnection() {
        return this.connection;
    }
}

// Tạo đối tượng đầu tiên
const db1 = new Database();
console.log(db1.getConnection()); // Output: Connected to the database

// Tạo đối tượng thứ hai
const db2 = new Database();
console.log(db2.getConnection()); // Output: Connected to the database

// Kiểm tra xem cả hai đối tượng có giống nhau không
console.log(db1 === db2); // Output: true

