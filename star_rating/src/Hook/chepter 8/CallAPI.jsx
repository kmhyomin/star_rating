import { useEffect, useState } from 'react';

function CallAPI() {
  const API_KEY = 'https://api.github.com/users/kmhyomin';
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    const getApi = async () => {
      const response = await fetch(API_KEY);
      const data = await response.json();
      setApiData(data);
    };

    getApi();
  }, []);
  return (
    <>
      <pre>{JSON.stringify(apiData, null, 2)}</pre>
      <img src={apiData.avatar_url} alt="avatar img" />
    </>
  );
}

export default CallAPI;
