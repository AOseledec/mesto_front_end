export class Api {
    constructor(options) {
      // тело конструктора
      this.url      = options.baseUrl
      this.headers  = options.headers

    }



    // Формируем запрос на сервер
    sendRequest(url, method, body) {
      return fetch(`${this.url}${url}`, {
              method: method.toUpperCase(), 
              headers: this.headers,
        body: JSON.stringify(body)
          })
      .then(res => {
          if(res.ok) {
            return Promise.resolve(res.json())
          }
          return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(err => Promise.reject(err));
    }


    // загружаем с сервера начальный набор карточек
    getInitialCards() {
      return this.sendRequest('/cards','get');
    }
  
    // получаем информацию о пользователе
    getUserInfo() {
      return this.sendRequest('/users/me', 'get');
    }

    userInfo() {
      this.getUserInfo()
      .then((res) => {
        const obj = {}
        for (let key in res) {
          obj[key] = res[key]
        }
      })

      // this..getUserInfo().then(res => {
      //   Object.keys(res).forEach(key => user[key] = res[key])
      // })
    }
    // добавляем карточку
    addNewCard(body) {
      return this.sendRequest('/cards', 'POST', body);  
    }
    
    // отправляем информацию о пользователе
    setUserInfo(body) {  
      return this.sendRequest('/users/me', 'PATCH', body);
    }
  
    setUserAvatar(body) {
      return this.sendRequest('/users/me/avatar','PATCH', body);
    }
  
    deleteCard() {
  
    }
  
    setLikeCard() {
      return this.sendRequest('/cards/like/cardId', 'PUT', body);
    }
  
    
    // другие методы работы с API
}