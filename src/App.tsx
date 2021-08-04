import React, { useMemo } from 'react';
import './App.css';
import { client } from './services/ApolloService'
import { ApolloProvider } from "@apollo/client";
import PipeList from './components/PipeList';

function App() {

  return (
    <ApolloProvider client={client}>
      <PipeList />
    </ApolloProvider>
  );
}

export default App;
