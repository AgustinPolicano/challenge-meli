import express from "express";
import routes from "./routes";
import cors from "cors";
import React from "react";
import ReactDOMServer, { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { ChakraProvider } from "@chakra-ui/react";
import AppRoutes from "../../meli-front/src/routes";
import path from "path";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use("/api", routes);

// Servir archivos estáticos (por ejemplo, CSS y bundle.js)
app.use(express.static(path.resolve(__dirname, "../public")));

// server.js
app.get('*', async (req, res) => {
  const html = renderToString(<AppRoutes />);

  res.send(`
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root">${html}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
