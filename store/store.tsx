import create from 'zustand';
import {devtools} from 'zustand/middleware'

interface PageStore {
    initPaginateValue: number,
    endPaginateValue: number,
    loadMorePaginateValue: any
}

const usePageStore = create<PageStore>(devtools(
    set => ({
        initPaginateValue: 0,
        endPaginateValue: 5,
        loadMorePaginateValue: () => set(state => ({endPaginateValue: state.endPaginateValue + 3 })),
    })
));

export default usePageStore;