import React from "react";
import CustomSkeleton from "../CustomSkeleton";
import shortid from "shortid";

const RequestStatusUI = ({
  isError,
  isLoading,
  Skeleton,
  error,
  count = 1,
}) => {
  return (
    <div>
      {isError && (
        <div className="container mx-auto py-5">
          <h1 className="text-lg text-red-600 text-center">
            {error?.message || "Something went wrong!"}
          </h1>
        </div>
      )}
      {isLoading && (
        <div className="container mx-auto py-1">
          {Skeleton ? (
            <Skeleton />
          ) : (
            <>
              {Array(Math.ceil(count / 5))
                .fill(0)
                .map((el) => {
                  return (
                    <div key={shortid.generate()}>
                      <CustomSkeleton height={20} borderRadius={5} />
                      <CustomSkeleton height={30} />
                      <CustomSkeleton height={20} borderRadius={5} />
                      <CustomSkeleton height={15} />
                      <CustomSkeleton height={15} borderRadius={5} />
                    </div>
                  );
                })}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default RequestStatusUI;
