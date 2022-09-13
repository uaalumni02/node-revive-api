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
  static async getBrands() {
    try {
      const getAllBrands = await db.select().from("brands");
      return getAllBrands;
    } catch (error) {
      throw error;
    }
  }
  static async brandById(brand_id) {
    try {
      const brandById = await db("brands").where({ brand_id }).select();
      return brandById;
    } catch (error) {
      throw error;
    }
  }
}

export default Query;
