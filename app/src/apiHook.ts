import { useEffect, useState, DependencyList } from "react";
import fetchData from "./api";

const useApiFetch = <T>(
  endpointUrl: string,
  refetchDeps: DependencyList = []
) => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    let closurePackage = { isCleaningUp: false };
    fetchData<T>(endpointUrl).then((data) => {
      if (!closurePackage.isCleaningUp) {
        setData(data);
      }
    });

    return () => {
      closurePackage.isCleaningUp = true;
    };
  }, refetchDeps);

  return data;
};

export default useApiFetch;
