import { getFetch } from "@/api/fetchCore";

const ACCESS_KEY = process.env.NEXT_PUBLIC_ACCESS_KEY;

export const getFetchPhotos = () =>
  getFetch<any>(`photos/?client_id=${ACCESS_KEY}`);

export const getFetchPose = () =>
  getFetch<any>(`search/photos?page=1&query=pose&client_id=${ACCESS_KEY}`);

export const getFetchInfinitePose = (pageParam: number) =>
  getFetch<any>(
    `search/photos?page=${pageParam}&query=pose&client_id=${ACCESS_KEY}`
  );

export const getFetchPoseDetail = ({ id }: { id: string | number }) =>
  getFetch<any>(`photos/${id}?client_id=${ACCESS_KEY}`);
