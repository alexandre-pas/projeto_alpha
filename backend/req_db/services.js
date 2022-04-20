const Services = require('../config_db');



class Service {

  async getService(req, res) {
    let id = req.query.id;
    const str = (id) ? 'WHERE id = $1' : 'WHERE id <> $1';
    id = (id) ? id : -1;
    const service = Services();
    await service.connect();
    try {
      const query = `SELECT * FROM services ${str} AND delete_at IS NULL`;
      const values = [id];
      const card = await service.query(query, values);

      if (card.rowCount === 0) return res.status(400).json("ID não encontrado");
      res.json(card.rows);

    } catch (e) {
      if (e.code == "22P02") return res.status(400).json("ID incorreto!");
      return res.status(400).json(e.code);

    } finally {
      await service.end();
    }
  }

  /* async getAllService(req,res) {
      let id = req.query.id;
      console.log(id)
      const str = (id) ? 'WHERE id = $1' : 'WHERE id <> $1' ;
      id = (id) ? id : -1; 
      const client = Services();
      await client.connect();
      try {
          const query = `select * from services ${str}` ;
          console.log(query);
          const allClient = await client.query(query,[id]);
          res.json(allClient.rows);
      } catch (error) {
          res.status(404).send("falhou!")
      }
      finally{
          await client.end();
      }
  } */
}
const service = new Service()
module.exports = service;