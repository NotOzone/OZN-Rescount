// import logo from "./logo.svg";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import "./App.css";
import TableRescount from "./components/TableRescount";

function App() {
  const darkTheme = createTheme({
    type: "dark",
    theme: {
      // colors: {...},
    },
  });
  return (
    <NextUIProvider theme={darkTheme}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ letterSpacing: "3pt" }}>RESCOUNT</h1>
        <TableRescount />
        <h4>Developed by Ozone</h4>
      </div>
    </NextUIProvider>
  );
}

export default App;
