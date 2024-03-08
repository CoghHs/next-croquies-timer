"use client";

import { getFetchPoseDetail } from "@/api/photo/api";
import Timer from "@/app/(compoents)/Timer";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { useQuery } from "react-query";

export default function CroquiesDetail() {
  const path = usePathname();
  const pathArr = path.split("/");
  const photoId = useMemo(() => pathArr[pathArr.length - 1], []);

  const { data, error, isLoading, isFetched } = useQuery({
    queryKey: ["photo", photoId],
    queryFn: () => getFetchPoseDetail({ id: photoId }),
  });

  return (
    <div>
      <div>
        {/* {!isLoading && isFetched ? (
        <div className="flex justify-center">
          <img src={data.urls?.small} className="rounded-2xl" />
        </div>
      ) : (
        <span>loading</span>
      )} */}
      </div>
      <Timer />
    </div>
  );
}
