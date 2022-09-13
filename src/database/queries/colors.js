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
  static async getColors() {
    try {
      const getAllColors = await db.select().from("colors");
      return getAllColors;
    } catch (error) {
      throw error;
    }
  }
  static async colorById(color_id) {
    try {
      const colorById = await db("colors").where({ color_id }).select();
      return colorById;
    } catch (error) {
      throw error;
    }
  }
}

export default Query;
