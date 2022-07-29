import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import MovieList from "./containers/MovieList";
import theme from "./themes/theme";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./containers/About";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="about" element={<AboutPage />} />
          <Route
            path="indonesian"
            element={<Box sx={{ margin: 10 }}>Halaman indonesian</Box>}
          />
          <Route
            path="pricing"
            element={<Box sx={{ margin: 10 }}>Halaman Pricing</Box>}
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
