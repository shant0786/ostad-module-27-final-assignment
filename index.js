const app = require("./app");
const { PORT } = require("./config");

app.listen(PORT, function () {
  console.log(`Application is Running on port: ${PORT}`);
});
