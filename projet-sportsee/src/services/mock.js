/**
 * fetch users' datas from an URL
 *
 * @class
 * @this {Usefetch}
 * @param {URL} URLs of the users' datas
 */

export default class Usefetch {
  static async getUser(userId) {
    return fetch("mockeddatas.json")
      .then((result) => result.json())
      .then((data) => {
        return data.USER_MAIN_DATA.find((user) => user.id === userId);
      });
  }

  static async getUserActivity(userId) {
    return fetch("mockeddatas.json")
      .then((result) => result.json())
      .then((data) => {
        return data.USER_ACTIVITY.find((user) => user.userId === userId);
      });
  }

  static async getUserAverageSessions(userId) {
    return fetch("mockeddatas.json")
      .then((result) => result.json())
      .then((data) => {
        return data.USER_AVERAGE_SESSIONS.find((user) => user.userId === userId);
      });
  }

  static async getUserPerformance(userId) {
    return fetch("mockeddatas.json")
      .then((result) => result.json())
      .then((data) => {
        return data.USER_PERFORMANCE.find((user) => user.userId === userId);
      });
  }
}
