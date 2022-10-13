const express = require("express");
const cors = require("cors");
const req = require("express/lib/request");
const res = require("express/lib/response");


const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({ message: "Parking API" });
});

const parkingRoute = require("./app/routes/parking.routers");
const slotRoute = require("./app/routes/slot.routers");
const vehicleRoute = require("./app/routes/vehicle.routers");
const clientRoute = require("./app/routes/client.routers");
const modelRoute = require("./app/routes/model.routers");
const userRoute = require("./app/routes/user.routers");
app.use(parkingRoute);
app.use(slotRoute);
app.use(vehicleRoute);
app.use(clientRoute);
app.use(modelRoute);
app.use(userRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}. `);
});

const db = require("./app/models");
db.sequelize.sync().then(() => {
    console.log("DB synced ");
}).catch((err) => {
    console.log("Error on syncing DB: " + err.message);
});