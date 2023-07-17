import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

export enum sortPropertyEnum {
        RATING_DECS = "rating",
        PRICE_DECS = "price",
        TITLE_DECS = "title",
        RATING_ASC = "-rating",
        PRICE_ASC = "-price",
        TITLE_ASC = "-title",
}

export type Sort = {
    name: string,
    sortProperty: sortPropertyEnum
  }

export interface FilterSliceState {
    searchValue: string,
    currentPage: number,
    categoryId: number,
    sort: Sort
}

const initialState: FilterSliceState = {
    searchValue: '',
    currentPage: 1,
    categoryId: 0,
    sort: {
        name: "популярности",
        sortProperty: sortPropertyEnum.RATING_DECS,
      }
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload
        },
        setSort (state, action: PayloadAction<Sort>) {
            state.sort = action.payload
        },
        setCurrentPage (state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
        setFilters (state, action: PayloadAction<FilterSliceState>) {
            state.sort = action.payload.sort
            state.currentPage = Number(action.payload.currentPage)
            state.categoryId = Number(action.payload.categoryId)
        }
    }
})

export const selectFilter = (state: RootState) => state.filter
export const selectSort = (state: RootState) => state.filter.sort

export const { setCategoryId, setSearchValue , setSort, setCurrentPage, setFilters } = filterSlice.actions

export default filterSlice.reducer
