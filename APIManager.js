//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }
    CreateMainUser(){
        const id = "MainUser"
        $.get("https://randomuser.me/api/")
        .then((user) => {
          this.data[id]=user;
        });

    }
    CreateUser(i){
        const id = "id"+i
        $.get("https://randomuser.me/api/")
        .then((user) => {
          this.data[id]=user;
        });
    }
    CreateUserFriends(){
        for(let i=0;i<6;i++){
            this.CreateUser(i)
        }
    }
    getCountUserId(){
        return this.userCounterID
    }

    getUserByID(userId){
        return this.data[userId]
    }

    randomKanye(){
        $.get("https://api.kanye.rest")
        .then((Quote) => {
          this.data["Quote"]=Quote;
        });
    }

    randomPokemon(){
        $.get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((Pokemon) => {
          this.data["Pokemon"]=Pokemon;
        });
    }
    
    randomBacon(){
        $.get("https://baconipsum.com/api/?type=meat-and-filler")
        .then((Bacon) => {
          this.data["Bacon"]=Bacon[0];
        });
    }
    getDataById(id){
        return this.data[id]
    }
    getData(id){
        return this.data
    }

    initUser(){
        this.CreateMainUser()
        this.CreateUserFriends()
        this.randomKanye()
        this.randomPokemon()
        this.randomBacon()
    }

}
