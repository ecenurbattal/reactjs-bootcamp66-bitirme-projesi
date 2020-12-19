import React from 'react';

const SessionContext = React.createContext({
    isAuthenticated: false,
    setAuthenticated: (authenticated) => {},
    user:{},
    setUser: () => {},
});

export default SessionContext;
