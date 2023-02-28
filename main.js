const renderer =new Renderer()
const apiManager = new APIManager()

$("body").on("click", "#LoadID", function () {
    apiManager.initUser()
    console.log("data has loaded succesfully");
});

$("body").on("click", "#DisplayID", function () {
    renderer.init()
});