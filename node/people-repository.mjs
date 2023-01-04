export class PeopleRepository {
  connection;
  constructor(db) {
    this.connection = db
    this.connection.connect()
  }

  async create(name) {
    return new Promise((resolve, rejects) => {
      this.connection.query(`INSERT INTO people (name) VALUES ("${name}");`,
      (err) => {
        if(err) {
          return rejects(err);
        }
        return resolve(undefined);
      })
    });
  }

  async index() {
    return new Promise((resolve, rejects) => {
      this.connection.query(`SELECT * FROM people;`,
        (err, result) => {
          if (err) {
            return rejects(err)
          }
          return resolve(JSON.parse(JSON.stringify(result)));
        })
    })
  }
}