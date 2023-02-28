class Renderer {
  constructor() {
    this.apiManager = new APIManager();
    this.apiManager.initUser();
  }
  initMainUser() {
    const user = $(".user-container");
    const id = "MainUser"
    const userDetails = this.apiManager.getDataById(id).results[0];
    console.log(this.apiManager.getDataById(id).results[0].name.first);
    user.append(
      `<div class=cart-item style="float: right">${userDetails.name.first}</div><br>`
    );
    user.append(
      `<div class=cart-item style="float: right">${userDetails.name.last}</div><br>`
    );
    user.append(`<img src=${userDetails.picture.large}>`);
  }
  initUserFriends() {
    const data = this.apiManager.getData();
    const keys = Object.keys(data);
    for (let key of keys) {
      if (key[0] + key[1] == "id") {
        this.initUser(data[key].results[0].name);
      }
    }
  }
  initUser(name) {
    $(".friends-container").append(
      `<div class=cart-item style="float: right">${name.first}</div><br>`
    );
    $(".friends-container").append(
      `<div class=cart-item style="float: right">${name.last}</div>`
    );
  }
  initPokemon() {
    $(".pokemon-container").append(
      `<img src=${this.apiManager.getDataById("Pokemon").results[0].url}`
    );
  }
  initQuote() {
    const quote = $(".quote-container");
    quote.append("<h1>Favorite Quote:</h1>");
    quote.append(
      `<div class=cart-item style="float: left">${
        this.apiManager.getDataById("Quote").quote
      }</div>`
    );
  }

  initBacon(){
    const bacon = $(".meat-container");
    bacon.append("<h1>About As:</h1>");
    bacon.append(
      `<div class=cart-item style="float: left">${
        this.apiManager.getDataById("Bacon")
      }</div>`
    );
  }

  init() {
    this.initMainUser();
    this.initUserFriends();
    this.initPokemon();
    this.initQuote();
    this.initBacon()
  }
}
