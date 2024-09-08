import React, { useState, useEffect } from 'react';
import axios from 'axios';

const withDataFetch = (WrappedComponent, url, options = {}) => {
  return function WithDataFetch(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //const [url, setUrl] = useState(url);
    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await axios.get(url, options);
          setData(response.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [url]);

    return (
      <WrappedComponent 
        {...props} 
        data={data} 
        loading={loading} 
        error={error} 
      />
    );
  };
};

export default withDataFetch;
