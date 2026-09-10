import React, { createContext, useContext, useState, useEffect } from 'react';

const SessionsContext = createContext();

const initialSessions = [
  { id: '1', title: 'Morning Calm', duration: '10', category: 'Morning' },
  { id: '2', title: 'Deep Sleep', duration: '20', category: 'Sleep' },
  { id: '3', title: 'Focus Flow', duration: '15', category: 'Focus' },
  { id: '4', title: 'Anxiety Relief', duration: '12', category: 'Anxiety' },
  { id: '5', title: 'Body Scan', duration: '18', category: 'Sleep' },
];

export const SessionsProvider = ({ children }) => {
  const [sessions, setSessions] = useState(initialSessions);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const addSession = session => {
    setSessions(prev => [...prev, { ...session, id: Date.now().toString() }]);
  };

  return (
    <SessionsContext.Provider value={{ sessions, addSession, loading }}>
      {children}
    </SessionsContext.Provider>
  );
};

export const useSessions = () => useContext(SessionsContext);
