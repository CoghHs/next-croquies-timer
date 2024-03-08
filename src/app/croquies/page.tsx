"use client";

import { getFetchInfinitePose } from "@/api/photo/api";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";

export default function Croquis() {
  const { data, error, fetchNextPage, hasNextPage, isFetched, isLoading } =
    useInfiniteQuery(
      ["pose"],
      ({ pageParam = 1 }) => getFetchInfinitePose(pageParam),
      {
        getNextPageParam: (_lastPage, pages) => {
          if (pages.length < _lastPage.total_pages) {
            return pages.length + 1;
          } else return undefined;
        },
      }
    );

  return (
    <div>
      <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
        <div className="px-10">
          <ul>
            {isFetched &&
              data?.pages.map((page, pageIndex) => (
                <div
                  key={pageIndex}
                  className="grid grid-cols-5 place-items-center"
                >
                  {page.results.map((item: any) => (
                    <li key={item.id} className=" ">
                      <Link href={`/croquies/${item.id}`}>
                        <img
                          src={item.urls.small}
                          className="w-56 h-72 object-cover mb-5 rounded-2xl"
                        />
                      </Link>
                    </li>
                  ))}
                </div>
              ))}
          </ul>
        </div>
      </InfiniteScroll>
    </div>
  );
}
