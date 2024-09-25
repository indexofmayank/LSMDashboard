import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import theme from './config/ThemeConfig';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <ChakraProvider theme={theme}>
  <App />
  </ChakraProvider>,
  document.getElementById('root')
);