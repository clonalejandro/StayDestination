import { useEffect, useState } from 'react';

export const useAsync = <T>(asyncFunction: () => Promise<T>, deps: any[]) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function asyncFunctionWrapper() {
    try {
      const data = await asyncFunction();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    asyncFunctionWrapper();
  }, deps);

  return { data, loading, error };
};
