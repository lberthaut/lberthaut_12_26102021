export default class Usefetch {
 

 static async getUser(userId){
  return fetch('http://localhost:3000/user/'+ userId)
  .then(response => response.json())
  .then(data=>data.data)
  }

  static async getUserActivity(userId){
    return fetch('http://localhost:3000/user/'+ userId + '/activity')
    .then(response => response.json())
    .then(data=>data.data)
    }

    static async getUserAverageSessions(userId){
      return fetch('http://localhost:3000/user/'+ userId + '/average-sessions')
      .then(response => response.json())
      .then(data=>data.data)
      }

      static async getUserPerformance(userId){
        return fetch('http://localhost:3000/user/'+ userId + '/performance')
        .then(response => response.json())
        .then(data=>data.data)
        }
}