"use client";

import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

interface AxiosHookResult {
  response: any[]; // 여기서 응답 데이터의 정확한 타입을 지정해주어야 합니다.
  loading: boolean;
  error: string | undefined; // 에러의 타입도 정확하게 지정해주면 좋습니다.
  fetchData: (url: string) => void;
}

export const useAxios = (): AxiosHookResult => {
  const [response, setResponse] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  axios.defaults.baseURL = "https://api.unsplash.com";

  const fetchData = async (url: string): Promise<void> => {
    try {
      setLoading(true);
      const res: AxiosResponse<any> = await axios.get(url);
      setResponse(res.data.results);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const fetchDataWithUrl = (url: string): void => {
    fetchData(url);
  };

  useEffect(() => {
    fetchDataWithUrl("initial_url");
  }, []);

  return {
    response,
    loading,
    error,
    fetchData: fetchDataWithUrl,
  };
};
