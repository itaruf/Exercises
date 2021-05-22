const { Pool } = require("pg");

// DOCUMENTATION : https://node-postgres.com/api/pool 

class dataBase {
    /**
     * Classe permettant de gérer les instances de la base de données.
     */

    constructor() {
    }

    /**
     * Si aucune instance de la base de données n'est disponible, on en crée une nouvelle
     * @return {object} retourne une instance disponible de la base de données
     */
    static getDB() {
        if (typeof dataBase.db === 'undefined') {
            dataBase.initDB();
        }
        return dataBase.db;
    }

    /**
     * Crée une instance de la base de données
     * @return {void}
     */
    static initDB() {
        dataBase.db = new Pool({
            host: "localhost",
            port: "5432",
            user: "postgres",
            password: "l2ae1",
            database: "postgres",
            max: 20,
            connectionTimeoutMillis: 0,
            idleTimeoutMillis: 0
        });
    }
}




module.exports = dataBase;
