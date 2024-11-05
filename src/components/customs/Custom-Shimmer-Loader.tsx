import { useEffect, useState } from "react";

import { Spinner } from "flowbite-react";

export default function CustomShimmerLoader({
  type,
  repeter = 10,
}: {
  type: string;
  repeter?: number;
}) {
  let returnhtml;
  const [repeat, setRepeat] = useState<Array<number>>([]);
  useEffect(() => {
    setRepeat([]);
    if (!repeter) {
      setRepeat([1]);
      return;
    }
    for (let i = 0; i < repeter; i++) {
      setRepeat((r) => [...r, i]);
    }
  }, []);
  if (type === "paper_search") {
    returnhtml = (
      <div className="shimmer-card">
        {/* <div className="shimmerBG media"></div> */}
        <div className="p-32">
          <div className="shimmerBG title-line"></div>
          <div className="shimmerBG title-line end"></div>

          <div className="shimmerBG content-line m-t-24"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line end"></div>
        </div>
      </div>
    );
  } else if (type === "paper_citation") {
    returnhtml = (
      <div
        className="shimmer-card"
        style={{ height: "150px", marginTop: "0px", marginBottom: "20px" }}
      >
        {/* <div className="shimmerBG media"></div> */}
        <div className="p-32">
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line end"></div>
        </div>
      </div>
    );
  } else if (type === "search_collaborators") {
    returnhtml = repeat.map(() => (
      <div
        key={Math.random()}
        className="shimmer-card"
        style={{
          height: "265px",
          marginTop: "0px",
          marginBottom: "20px",
          width: "210px",
          minWidth: "210px",
        }}
      >
        {/* <div className="shimmerBG media"></div> */}
        <div className="p-5">
          <div className="flex flex-row justify-center items-center">
            <div className="shimmerBG content-circle "></div>
          </div>

          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>

          <div className="shimmerBG content-line end"></div>
        </div>
      </div>
    ));
  } else if (type === "search_collaborators") {
    returnhtml = repeat.map(() => (
      <div
        key={Math.random()}
        className="shimmer-card"
        style={{
          height: "265px",
          marginTop: "0px",
          marginBottom: "20px",
          width: "210px",
          minWidth: "210px",
        }}
      >
        {/* <div className="shimmerBG media"></div> */}
        <div className="p-5">
          <div className="flex flex-row justify-center items-center">
            <div className="shimmerBG content-circle "></div>
          </div>

          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>

          <div className="shimmerBG content-line end"></div>
        </div>
      </div>
    ));
  } else if (type === "search_collaborators_users") {
    returnhtml = repeat.map(() => (
      <div
        key={Math.random()}
        className="shimmer-card"
        style={{
          height: "165px",
          marginTop: "0px",
          marginBottom: "0px",
          width: "67%",
        }}
      >
        {/* <div className="shimmerBG media"></div> */}
        <div className="p-10">
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>

          <div className="shimmerBG content-line end"></div>
        </div>
      </div>
    ));
  }

  return returnhtml;
}
