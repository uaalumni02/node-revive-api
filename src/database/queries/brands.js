import db from "../knex";

class Query {
  static async addBrand(data) {
    try {
      const brandInfo = await db.insert(data).returning("*").into("brands");
      return brandInfo;
    } catch (error) {
      throw error;
    }
  }
}

export default Query;
