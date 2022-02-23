const mysql = require('mysql2');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'cucs'
});

connection.connect((err) => {
    if (!err) {
        console.log("database is connected");
    } else {
        console.log("database is not connected" + err.message);
    }
    // if table exists continue with the code



    var sql = "CREATE TABLE IF NOT EXISTS blossoms (id INT AUTO_INCREMENT PRIMARY KEY, s_name VARCHAR(255), s_class VARCHAR(255), s_event varchar(255), s_team varchar(255))";
    connection.query(sql, function (err, result) {
        if (err) 
        
        {throw err;
        console.log("Table created");
        }
        


    });
});

class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM blossoms;";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            // console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }


    async insertNewName(s_name, s_class, s_event, s_team) {
        try {
            const s_class = '0';
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO blossoms (s_name, s_class, s_event, s_team) VALUES (?,?,?,?);";

                connection.query(query, [s_name], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            return {
                id: insertId,
                s_name: s_name,
                s_class: s_class,
                s_event: s_event,
                s_team: s_team

            };
        } catch (error) {
            console.log(error);
        }
    }

    async deleteRowById(id) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM blossoms WHERE id = ?";

                connection.query(query, [id], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                })
            });

            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async updateNameById(id, s_name) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE blossoms SET s_event = ? WHERE id = ?";

                connection.query(query, [s_name, id], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                })
            });

            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async searchByName(s_name) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM blossoms WHERE s_name = ?;";

                connection.query(query, [s_name], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });

            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = DbService;