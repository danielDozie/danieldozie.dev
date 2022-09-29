import React from 'react'

export const PaginationContext = React.createContext({
    initPaginateValue: 0,
    endPaginateValue: 0,
    loadMorePagination: () => {}
})

interface PAGINATION {
    initPaginateValue: number,
    endPaginateValue: number,
    loadMorePagination: () => void
}

export const PaginationProvider = ({ children }) => { 
    const [initPaginateValue, setInitPaginateValue] = React.useState<PAGINATION['initPaginateValue']>(0)
    const [endPaginateValue, setEndPaginateValue] = React.useState<PAGINATION['endPaginateValue']>(5)
    const loadMorePagination:PAGINATION['loadMorePagination'] = () => setEndPaginateValue(endPaginateValue + 3)
    return (
        <PaginationContext.Provider value={{initPaginateValue, endPaginateValue, loadMorePagination}}>
            {children}
        </PaginationContext.Provider>
    )
}