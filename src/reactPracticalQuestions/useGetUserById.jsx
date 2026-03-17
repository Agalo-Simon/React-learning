import React, { useState } from "react";

export default useGetUserById;

const useGetUserById = (userId) => {
  const [data, setData] = useState({ user: [], posts: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const [userRes, postsRes] = await Promise.all([
        fetch('')
        fetch('')
      ])
    };
  }, [userId]);

  return { ...data, loading, error };
};
