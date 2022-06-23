
/**
 * fetch users' datas from mocked datas' file
 *
 * @class
 * @this {Usefetch}
 * @param {URL} URLs of the users' datas
 */

export default class Usefetch {
  static async getUser(userId) {
    return fetch("mockeddatas.json")
      .then((result) => result.text())
      .then((data) => {
        return data.USER_MAIN_DATA.find((user) => user.id === userId);
      }).catch((error) => {
        console.log(error);
      });
  }

  static async getUserActivity(userId) {
    return fetch("./mockeddatas.json")
      .then((result) => result.json())
      .then((data) => {
        return data.USER_ACTIVITY.find((user) => user.userId === userId);
      }).catch((error) => {
        console.log(error);
      });
  }

  static async getUserAverageSessions(userId) {
    return fetch("./mockeddatas.json")
      .then((result) => result.json())
      .then((data) => {
        return data.USER_AVERAGE_SESSIONS.find((user) => user.userId === userId);
      }).catch((error) => {
        console.log(error);
      });
  }

  static async getUserPerformance(userId) {
    return fetch("./mockeddatas.json")
      .then((result) => result.json())
      .then((data) => {
        return data.USER_PERFORMANCE.find((user) => user.userId === userId);
      }).catch((error) => {
        console.log(error);
      });
  }
}

/* file:///C:/Users/louis/OneDrive/Bureau/MOOC/P12/projet-sportsee/projetsportsee/projetsportsee/projet-sportsee/public/mockeddatas.json */