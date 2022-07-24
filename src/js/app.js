import json from "./parser";
import read from "./reader";

export default class GameSavingLoader {
  static load = async () => {
    try {
      const buffer = await read();
      const jsonData = await json(buffer)
      return jsonData;
    } catch (error) {
      console.log(error);
    }
  };
}
