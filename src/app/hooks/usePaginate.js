'use client'

import { useState } from "react";
export function usePaginate (countPage) {

    const [ currentPage, setCurrentPage ] = useState(0);
    const pagination = (elements) => {
      return elements.slice(currentPage, currentPage + countPage);
    };
    return {setCurrentPage, pagination, currentPage}
}