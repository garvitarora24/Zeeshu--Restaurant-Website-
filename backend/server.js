import app from "./app.js";
// const cors = require('cors')
import cors from "cors";

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
   
  })
);

app.listen(process.env.PORT, () => {
  console.log(`Server Running On Port ${process.env.PORT}`);
});
