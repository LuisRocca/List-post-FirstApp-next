"use client";

import { useMemo, useState } from "react";

export function useSort(infoToSort) {
  const [sortCondition, setSortCondition] = useState(false);
//  console.log(sortCondition)
  const activeSort = () => {
    setSortCondition(!sortCondition);
  };

  const sortElements = useMemo(() => {
    return sortCondition
      ? [...infoToSort].sort((a, b) => a.title.localeCompare(b.title))
      : infoToSort;
  }, [infoToSort, sortCondition]);

  return { sortElements , activeSort };
}
