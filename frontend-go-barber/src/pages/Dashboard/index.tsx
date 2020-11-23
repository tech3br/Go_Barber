import React from 'react';
import { getJSDocReturnType } from 'typescript';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <div>
      <h1 style={{ color: '#fff' }}>Dashboard</h1>
      <button type="submit" onClick={signOut}>
        Sair
      </button>
    </div>
  );
};

export default Dashboard;
