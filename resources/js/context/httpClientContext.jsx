import React, { createContext, useContext } from 'react';
import axios from 'axios';

export const HttpClientContext = createContext();

export const useHttpClient = () => {

  return useContext(HttpClientContext);

};
export const HttpClientProvider = ({ children }) => {

    const apiUrl = `http://localhost:8000`

    const apiClient = axios.create({
        baseURL: `${apiUrl}`,
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Origin': `${apiUrl}`
        },
    });
  return (
    <HttpClientContext.Provider
      value={{
        apiClient,
        apiUrl
      }}
    >
      {children}
    </HttpClientContext.Provider>
  );
};
