const Clients = require('../config_db');

class Client {

    async postClient(req, res) {
        const newUser = req.body;
        console.log(newUser);
        const client = Clients();
        await client.connect();
        try {
            const query = `INSERT INTO clients (name, email, cpf, password, signed) VALUES ($1, $2, $3, $4, $5)`;
            const values = [newUser.name, newUser.email, newUser.cpf, newUser.password, newUser.signed];
            await client.query(query, values);

            console.log("Dentro do try", newUser);

            res.json("OK");
        } catch (e) {
            console.log("Dentro do cath", e.detail);
            if (e.code == "23505") return res.status(400).json("Email já existente");
        } finally {
            await client.end();
        }

    }

    async getLogin(req, res) {
        const email = req.query.email;
        const password = req.query.password
        console.log(email,password)
       
        const client = Clients();
        await client.connect();
        try {
          const query = `SELECT * FROM clients WHERE email = $1 AND password = $2   AND delete_at IS NULL`;
          const values = [email,password];
          const result = await client.query(query, values);
         
          if (result.rowCount === 0) return res.status(400).json("Email ou senha incorretos");
          res.json(result.rows);
    
        } catch (e) {
          if (e.code == "22P02") return res.status(400).json("ID incorreto!");
          return res.status(400).json(e.code);
          
        } finally {
          await client.end();
        }
    }

    async getAllClient(req, res) {
        const client = Clients();
        await client.connect();
        try {
            const query = 'select * from clients';
            const allClient = await client.query(query);
            res.json(allClient.rows);
        } catch (error) {
            res.status(404).send("falhou!")
        }
        finally {
            await client.end();
        }
    }


}
const client = new Client()
module.exports = client;