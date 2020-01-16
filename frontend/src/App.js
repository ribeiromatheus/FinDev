import React, { useEffect, useState } from 'react';

import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

export default function App() {
  const [devs, setDevs] = useState([]);
  const [invalidUser, setInvalidUser] = useState('');

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    try {
      const response = await api.post('/devs', data);

      setDevs([...devs, response.data]);
    } catch (error) {
      setInvalidUser(error.response.data);
    }
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <span>{invalidUser}</span>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}