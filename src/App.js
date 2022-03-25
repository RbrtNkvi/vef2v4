import React, { useState } from 'react';
import './App.css';
import { Events } from './components/Events';
import { Layout } from './components/Layout';

const defaultLogin = false;

export const Context = React.createContext({
  loggedIn: defaultLogin,
  toggleLogin: () => { },
});

export function LoginProvider({ children }) {
  const [login, setLogin] = useState(defaultLogin);

  const toggleLogin = () => {
    setLogin(!login);
  }

  return (
    <Context.Provider value={{
      login,
      toggleLogin,
    }}>
      {children}
    </Context.Provider>
  )
}

function App() {

  return (
    <div className="page">
      <Layout title='Viðburðir á næstunni'>
        <Events/>
      </Layout>
    </div>
  );
}

export default App;
