import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchValue: '',
    currentPage: 1,
    categoryId: 0,
    sort: {
        name: "популярности",
        sortProperty: "rating",
      }
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload
        },
        setSort (state, action) {
            state.sort = action.payload
        },
        setCurrentPage (state, action) {
            state.currentPage = action.payload
        },
        setFilters (state, action) {
            state.sort = action.payload.sort
            state.currentPage = Number(action.payload.currentPage)
            state.categoryId = Number(action.payload.categoryId)
        }
    }
})

export const selectFilter = (state) => state.filter
export const selectSort = (state) => state.filter.sort

export const { setCategoryId, setSearchValue , setSort, setCurrentPage, setFilters } = filterSlice.actions

export default filterSlice.reducer
