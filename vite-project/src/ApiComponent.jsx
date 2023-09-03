import React, { useEffect, useState } from 'react';

const ApiComponent = ({ apiUrl,onDataFetched }) => {
  const [data, setData] = useState([]);

  const api = async () => {
    try {
      const res = await fetch('https://lust.scathach.id/pornhub/search?key=milf&page=2&sort=mr');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      return data;
    } catch (er) {
      console.error('Error:', er);
      return [];
    }
  };

  const fetchData = async () => {
    try {
      const dataArray = await api();
      setData(dataArray.data);
      console.log(dataArray.data)
      onDataFetched(dataArray.data)
    } catch (er) {
      console.log(er);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Add apiUrl as a dependency to trigger fetch when it changes

  return null;
};

export default ApiComponent;
