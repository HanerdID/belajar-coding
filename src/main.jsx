import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider } from "antd";
import { COLORS } from "./constants/theme";
import "antd/dist/reset.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: COLORS.DARK,
          colorInfo: COLORS.SAGE,
          colorBgBase: COLORS.CREAM,
          fontFamily: "Rubik, sans-serif",
          borderRadius: 12,
          controlHeight: 44,
        },
        components: {
          Button: {
            borderRadius: 12,
            fontWeight: 600,
          },
          Card: {
            borderRadius: 16,
          },
          Input: {
            borderRadius: 12,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
