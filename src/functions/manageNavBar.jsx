import { useState, useEffect } from 'react';
import { port } from '../../port.js';

const useUserDataFetch = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:${port}/api/sessions`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.statusCode === 401) {
          setUserData({ role: -1 }); 
        } else if (data.statusCode === 200) {
          setUserData(data.message); 
        } else {
          console.error("Unexpected response from server");
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { userData, loading };
};

export default useUserDataFetch;