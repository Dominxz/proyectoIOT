import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import acertijosRoutes from "./routes/acertijos.routes.js"
import usuariosRoutes from "./routes/usuarios.routes.js";
import categoriasRoutes from "./routes/categorias.routes.js";
import resultadosRoutes from "./routes/resultados.routes.js";
import estadoRoutes from "./routes/estado.routes.js";
const app = express();
app.use(express.json());

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); 
    const allowedOrigins = [
      "https://proyectoiot-efn4.onrender.com",
      "http://localhost:8100",    // Ionic local
      "capacitor://localhost",    // App Android/iOS
      "http://localhost",         // WebView / navegador local
      "https://localhost",
    ];
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn("CORS rechazado:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  credentials: true,
  optionsSuccessStatus: 200,
};


app.use(cors(corsOptions));

app.use("/api", authRoutes);
app.use("/api", usuariosRoutes);
app.use("/api", categoriasRoutes);
app.use("/api", acertijosRoutes);
app.use("/api", resultadosRoutes);
app.use("/api", estadoRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

export default app;
