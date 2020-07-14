import React, { useEffect, useState } from 'react';

// components

//services
import api from '../../services/api';

// styles
import { Container, InitialText } from './styles';

const Dashboard = () => {
  const [message, setMessage] = useState('Carregando dados...')

  useEffect(()=>{
    async function fetchData() {
      try{
        const response = await api.get('/');
        console.log(response);
        setMessage('Dados Carregados');
      } catch {
        setMessage('Confira sua api');
      }
    }
    fetchData();
  }, [])

  return (
    <Container>
      <InitialText>
        {message}
      </InitialText>
    </Container>
  );
};

export default Dashboard;
