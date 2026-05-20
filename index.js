import cors from "cors";
import "dotenv/config";
import express from "express";
import tripRoutes from "./routes/tripRoutes.js";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());

app.use(express.json());
app.use("/api", tripRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server starting on port ${PORT}`);
});
