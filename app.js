import { sequelize } from "./db.js";
import { UserActivity } from "./models/UserActivity.js";

try {
    await sequelize.sync({ force: true })
    console.log("tabel created");

    const initialData = [
        { name: "Netamel", activity: "login" },
        { name: "Bob", activity: "uplode photo" },
    ];

    await UserActivity.bulkCreate(initialData);
    console.log("initial Data inserted");

} catch (error) {
    console.log("Err inserting data:",error);

}finally{
    await sequelize.close();
}
