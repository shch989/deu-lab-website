import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import theme from "./components/theme";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Professor from "./pages/Professor";
import Members from "./pages/Members";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />           
          <Route path="/professor" element={<Professor />} />
          <Route path="/members" element={<Members />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}