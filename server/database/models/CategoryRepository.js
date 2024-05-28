const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "category" as configuration
    super({ table: "category" });
  }

  // The C of CRUD - Create operation

  // The Rs of CRUD - Read operations

  async readAll() {
    // Execute the SQL SELECT query to retrieve all categorys from the "category" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of categorys
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing category

  // async update(category) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an category by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = CategoryRepository;
