export  function createPages(pages, pagesCount, currentPage) {
    let tempArrPages = [...pages];

    if (pagesCount <= 5) {
        return pages
    } 

    else if (currentPage >= 1 && currentPage <= 2) {
        tempArrPages = [1, 2, 3, '...', pagesCount]
    }
    else if (currentPage === 3) {
        const sliced = pages.slice(0, 4)
        tempArrPages = [...sliced, '...', pagesCount]
    }
    else if (currentPage > 3 && currentPage < pagesCount - 1) {
        const slicedFirst = pages.slice(currentPage - 2, currentPage)
        const slicedSecond = pages.slice(currentPage, currentPage + 1)
        tempArrPages = ([1, '...', ...slicedFirst, ...slicedSecond, '...', pagesCount])
    }
    else if (currentPage > pagesCount - 2) {
        const sliced = pages.slice(currentPage - 3)
        tempArrPages = ([1, '...', ...sliced])
    }
    return tempArrPages;
}