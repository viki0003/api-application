"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useNewsApi } from "@/src/APIHooks/NewsContext";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/src/components/ui/pagination";

const DataSection: React.FC = () => {
  const { todayNews, loading, error } = useNewsApi();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(todayNews.length / itemsPerPage);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentItems = todayNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading news: {error}</div>;

  return (
    <div className="data-section max-w-container mx-auto pt-20">
      <div className="data-card">
        <div className="grid grid-cols-2 gap-x-7 gap-y-7 lg:grid-cols-4 pb-10">
          {currentItems.map(
            (tnd, index) =>
              tnd.title &&
              tnd.description &&
              tnd.publishedAt &&
              !tnd.title.includes("[Removed]") &&
              !tnd.description.includes("[Removed]") &&
              !tnd.publishedAt.includes("[Removed]") && (
                <div key={index} className="bg-gray-900 rounded-lg relative">
                  <div className="flex p-4 pb-0 gap-1">
                    <div className="">
                      <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
                    </div>
                    <div className="circle">
                      <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
                    </div>
                    <div className="circle">
                      <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
                    </div>
                  </div>
                  <div className="card__content p-4">
                    <div className="card__wrapper">
                      <p className="text-white">
                        {formatDate(tnd.publishedAt)}
                      </p>
                    </div>
                    <h4 className="card__title text-[#fff] text-[22px] font-bold mb-3">
                      {tnd.title}
                    </h4>
                    <p className="card__subtitle  text-[hsla(0,0%,100%,1)] pb-[50px]">
                      {tnd.description}
                    </p>
                    <div className="absolute left-0 bottom-0 w-full px-[15px] py-[5px] bg-[#e5c3c2] rounded-lg rounded-t-none">
                      <Link href={tnd.url} target="_blank">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage - 1);
                }}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index + 1}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(index + 1);
                  }}
                  className={currentPage === index + 1 ? "active" : ""}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <div className="flex items-start gap-10 mt-10">
        <div>
          <h4>Create Context For API Fetch</h4>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%2874%2C144%2C226%2C1%29&t=material&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=true&fl=1&fm=Fira+Code&fs=10px&lh=147%25&si=false&es=2x&wm=false&code=%2522use%2520client%2522%253B%250A%250Aimport%2520React%252C%2520%257B%2520createContext%252C%2520useContext%252C%2520ReactNode%252C%2520useState%252C%2520useEffect%2520%257D%2520from%2520%2522react%2522%253B%250Aimport%2520axios%2520from%2520%2522axios%2522%253B%250A%250A%252F%252F%2520Define%2520the%2520structure%2520of%2520a%2520single%2520news%2520item%250Ainterface%2520NewsItem%2520%257B%250A%2520%2520source%253A%2520%257B%2520id%253A%2520string%2520%257C%2520null%253B%2520name%253A%2520string%2520%257D%253B%250A%2520%2520author%253A%2520string%2520%257C%2520null%253B%250A%2520%2520title%253A%2520string%253B%250A%2520%2520description%253A%2520string%253B%250A%2520%2520url%253A%2520string%253B%250A%2520%2520urlToImage%253A%2520string%2520%257C%2520null%253B%250A%2520%2520publishedAt%253A%2520string%253B%250A%2520%2520content%253A%2520string%2520%257C%2520null%253B%250A%257D%250A%250A%252F%252F%2520Define%2520the%2520context%2520value%2520structure%250Ainterface%2520NewsContextType%2520%257B%250A%2520%2520todayNews%253A%2520NewsItem%255B%255D%253B%250A%2520%2520loading%253A%2520boolean%253B%250A%2520%2520error%253A%2520string%2520%257C%2520null%253B%250A%2520%2520NewstotalItems%253A%2520number%253B%250A%257D%250A%250A%252F%252F%2520Props%2520for%2520the%2520provider%250Ainterface%2520NewsProviderProps%2520%257B%250A%2520%2520children%253A%2520ReactNode%253B%250A%257D%250A%250A%252F%252F%2520Create%2520context%2520with%2520a%2520default%2520value%2520of%2520%2560null%2560%250Aconst%2520NewsContext%2520%253D%2520createContext%253CNewsContextType%2520%257C%2520null%253E%28null%29%253B%250A%250Aconst%2520NewsProvider%253A%2520React.FC%253CNewsProviderProps%253E%2520%253D%2520%28%257B%2520children%2520%257D%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%255BtodayNews%252C%2520setTodayNews%255D%2520%253D%2520useState%253CNewsItem%255B%255D%253E%28%255B%255D%29%253B%250A%2520%2520const%2520%255Bloading%252C%2520setLoading%255D%2520%253D%2520useState%253Cboolean%253E%28true%29%253B%250A%2520%2520const%2520%255Berror%252C%2520setError%255D%2520%253D%2520useState%253Cstring%2520%257C%2520null%253E%28null%29%253B%250A%250A%2520%2520useEffect%28%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520const%2520fetchNews%2520%253D%2520async%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520setLoading%28true%29%253B%250A%2520%2520%2520%2520%2520%2520try%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520const%2520response%2520%253D%2520await%2520axios.get%28%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522https%253A%252F%252Fnewsapi.org%252Fv2%252Ftop-headlines%253Fcountry%253Dus%2526category%253Dbusiness%2526apiKey%253Db1d280f64651489fa18f30ebe6322892%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520setTodayNews%28response.data.articles%2520%257C%257C%2520%255B%255D%29%253B%250A%2520%2520%2520%2520%2520%2520%257D%2520catch%2520%28err%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520setError%28err%2520instanceof%2520Error%2520%253F%2520err.message%2520%253A%2520%2522An%2520unknown%2520error%2520occurred%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%257D%2520finally%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520setLoading%28false%29%253B%250A%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%257D%253B%250A%250A%2520%2520%2520%2520fetchNews%28%29%253B%250A%2520%2520%257D%252C%2520%255B%255D%29%253B%250A%250A%2520%2520const%2520NewstotalItems%2520%253D%2520todayNews.length%253B%250A%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253CNewsContext.Provider%2520value%253D%257B%257B%2520todayNews%252C%2520loading%252C%2520error%252C%2520NewstotalItems%2520%257D%257D%253E%250A%2520%2520%2520%2520%2520%2520%257Bchildren%257D%250A%2520%2520%2520%2520%253C%252FNewsContext.Provider%253E%250A%2520%2520%29%253B%250A%257D%253B%250A%250A%252F%252F%2520Custom%2520hook%2520that%2520ensures%2520the%2520context%2520is%2520not%2520null%250Aconst%2520useNewsApi%2520%253D%2520%28%29%253A%2520NewsContextType%2520%253D%253E%2520%257B%250A%2520%2520const%2520context%2520%253D%2520useContext%28NewsContext%29%253B%250A%2520%2520if%2520%28%21context%29%2520%257B%250A%2520%2520%2520%2520throw%2520new%2520Error%28%2522useNewsApi%2520must%2520be%2520used%2520within%2520a%2520NewsProvider%2522%29%253B%250A%2520%2520%257D%250A%2520%2520return%2520context%253B%250A%257D%253B%250A%250Aexport%2520%257B%2520NewsProvider%252C%2520useNewsApi%2520%257D%253B%250A"
            className="w-[450px] h-[500px] border-0 overflow-hidden"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <div>
          <h4>Fetch the API data in component</h4>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%2874%2C144%2C226%2C1%29&t=material&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=true&fl=1&fm=Fira+Code&fs=10px&lh=147%25&si=false&es=2x&wm=false&code=%27use%2520client%27%250A%250Aimport%2520React%252C%2520%257B%2520useState%2520%257D%2520from%2520%27react%27%250Aimport%2520Link%2520from%2520%27next%252Flink%27%250Aimport%2520%257B%2520useNewsApi%2520%257D%2520from%2520%27%2540%252Fsrc%252FAPIHooks%252FNewsContext%27%250Aimport%2520%257B%250A%2520%2520Pagination%252C%250A%2520%2520PaginationContent%252C%250A%2520%2520PaginationItem%252C%250A%2520%2520PaginationLink%252C%250A%2520%2520PaginationNext%252C%250A%2520%2520PaginationPrevious%252C%250A%257D%2520from%2520%27%2540%252Fsrc%252Fcomponents%252Fui%252Fpagination%27%250A%250Aconst%2520DataSection%253A%2520React.FC%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520todayNews%252C%2520loading%252C%2520error%2520%257D%2520%253D%2520useNewsApi%28%29%250A%2520%2520const%2520%255BcurrentPage%252C%2520setCurrentPage%255D%2520%253D%2520useState%2520%253C%2520number%2520%253E%25201%250A%2520%2520const%2520itemsPerPage%2520%253D%25208%250A%250A%2520%2520const%2520totalPages%2520%253D%2520Math.ceil%28todayNews.length%2520%252F%2520itemsPerPage%29%250A%250A%2520%2520const%2520formatDate%2520%253D%2520%28dateString%253A%2520string%29%253A%2520string%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520const%2520date%2520%253D%2520new%2520Date%28dateString%29%250A%2520%2520%2520%2520return%2520date.toISOString%28%29.split%28%27T%27%29%255B0%255D%250A%2520%2520%257D%250A%250A%2520%2520const%2520handlePageChange%2520%253D%2520%28page%253A%2520number%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520if%2520%28page%2520%253E%25200%2520%2526%2526%2520page%2520%253C%253D%2520totalPages%29%2520%257B%250A%2520%2520%2520%2520%2520%2520setCurrentPage%28page%29%250A%2520%2520%2520%2520%257D%250A%2520%2520%257D%250A%250A%2520%2520const%2520currentItems%2520%253D%2520todayNews.slice%28%250A%2520%2520%2520%2520%28currentPage%2520-%25201%29%2520*%2520itemsPerPage%252C%250A%2520%2520%2520%2520currentPage%2520*%2520itemsPerPage%250A%2520%2520%29%250A%250A%2520%2520if%2520%28loading%29%2520return%2520%253Cdiv%253ELoading...%253C%252Fdiv%253E%250A%2520%2520if%2520%28error%29%2520return%2520%253Cdiv%253EError%2520loading%2520news%253A%2520%257Berror%257D%253C%252Fdiv%253E%250A%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522data-section%2520max-w-container%2520mx-auto%2520pt-20%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522data-card%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522grid%2520grid-cols-2%2520gap-x-7%2520gap-y-7%2520lg%253Agrid-cols-4%2520pb-10%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257BcurrentItems.map%28%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%28tnd%252C%2520index%29%2520%253D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520tnd.title%2520%2526%2526%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520tnd.description%2520%2526%2526%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520tnd.publishedAt%2520%2526%2526%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%21tnd.title.includes%28%27%255BRemoved%255D%27%29%2520%2526%2526%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%21tnd.description.includes%28%27%255BRemoved%255D%27%29%2520%2526%2526%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%21tnd.publishedAt.includes%28%27%255BRemoved%255D%27%29%2520%2526%2526%2520%28%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520key%253D%257Bindex%257D%2520className%253D%2522bg-gray-900%2520rounded-lg%2520relative%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522flex%2520p-4%2520pb-0%2520gap-1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520className%253D%2522bg-red-500%2520inline-block%2520center%2520w-3%2520h-3%2520rounded-full%2522%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522circle%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520className%253D%2522bg-yellow-500%2520inline-block%2520center%2520w-3%2520h-3%2520rounded-full%2522%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520"
            className="w-[450px] h-[500px] border-0 overflow-hidden"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DataSection;
