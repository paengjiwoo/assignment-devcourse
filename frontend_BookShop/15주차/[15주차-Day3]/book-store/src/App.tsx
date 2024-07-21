import Layout from './components/layout/Layout';
import Home from './pages/Home'
import { GlobalStyle } from './style/global';
import { ThemeProvider } from 'styled-components';
import { ThemeName, dark, getTheme, light } from './style/theme';
import ThemeSwicher from './components/header/ThemeSwicher';
import { useContext, useState } from 'react';
import { BookStoreThemeProvider, ThemeContext } from './context/ThemeContext';

function App() {

  return (
    <BookStoreThemeProvider>
      <ThemeSwicher /> 
      <Layout children={<Home />}/>
      {/* // <Layout>
      //   <Home /> --children 
      // </Layout> */}
    </BookStoreThemeProvider>
  );
}

export default App;
