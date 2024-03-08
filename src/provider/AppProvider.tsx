"use client";

import { QueryClient, QueryClientProvider } from "react-query";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        /**
         * 요청 실패시 재요청 횟수
         */
        // retry: 1,
        /**
         * errorBounce 설정
         */
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
