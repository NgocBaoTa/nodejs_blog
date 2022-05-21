const newsRouter = require("./news")
const siteRouter = require("./site");


function route(app) {

    // Bỏ
    // app.get("/", (req, res) => {
    //   res.render("home");
    // });


    // Bỏ
    // app.get("/news", (req, res) => {
    //   res.render("news");
    // });

    app.use("/news", newsRouter)

    app.use("/", siteRouter);



    // Bỏ
    // app.get("/search", (req, res) => {
    //   // console.log(req.query);  //query parameters
    //   res.render("search");
    // });

    // app.post("/search", (req, res) => {
    //   console.log(req.body); // form data
    //   res.send(""); //trang trắng
    // });

}

module.exports = route;
