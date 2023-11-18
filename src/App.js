import React, { useEffect } from "react";
import { createTheme,ThemeProvider } from "@mui/material/styles";
import  CssBaseline from "@mui/material/CssBaseline";
import Container from '@mui/material/Container';
import "./App.css";
import Header from './components/Header';

import Footer from "./components/Footer";
import { useDispatch,useSelector } from "react-redux";
import { fetchAllCategories } from "./redux/actions/categories";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import SnackbarComponent from "./components/SnackbarComponent";

const sections =[{title: "All Pets", url: "/"}];

const theme = createTheme({
     fontFamily: `"Trebuchet MS", "Helvetica", "Arial", sans-serif`,
     fontSize: 14,
     fontWeightLight: 300,
     fontWeightRegular: 400,
     fontWeightMedium: 500,
 });

const App= ()=> {
   const dispatch = useDispatch();
   const allCategories= useSelector((state) => state.categories.allCategories);
  
   useEffect(() => {
    fetchAllCategories({dispatch});
   }, [dispatch]);
   return(
       <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
      <Container maxWidth="lg">
            <Header 
             allCategories= {[
               ...sections, 
               ...allCategories.map((category) => ({
                  title: category?.name,
                  url: category?.id, 
               })),
               ]}
            />
          <SnackbarComponent />
            <Router />
      </Container>
      <Footer 
         title="Pet Adoption and Care Center" 
         description="Every Pet deserves a Good Home."
         />
      </BrowserRouter>
     
   </ThemeProvider>
   );
};

export default App;