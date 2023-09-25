import React from "react";
import CustomSkeleton from "../CustomSkeleton";

const RequestStatusUI = ({ isError, isLoading, Skeleton, count = 1 }) => {
  return (
    <div>
      {isError && (
        <div className="container mx-auto py-5">
          <h1 className="text-2xl text-red-400 text-center">
            Something went wrong!
          </h1>
        </div>
      )}
      {isLoading && (
        <div className="container mx-auto py-5">
          {Skeleton ? (
            <Skeleton />
          ) : (
            <>
              {Array(Math.ceil(count / 5))
                .fill(0)
                .map((el) => {
                  return (
                    <div className="">
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
