import db from "../knex";

class Query {
  static async addColor(data) {
    try {
      const colorInfo = await db.insert(data).returning("*").into("colors");
      return colorInfo;
    } catch (error) {
      throw error;
    }
  }
}

export default Query;
