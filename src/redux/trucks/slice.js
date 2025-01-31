import { createSlice } from "@reduxjs/toolkit";
import { getTruckById, getTrucks } from "./operations";

const initialState = {
	items: [],
	currentTruck: null,
	isLoading: false,
	error: null,
	page: 1,
	total: 0,
};

const trucksSlice = createSlice({
	name: "trucks",
	initialState,
	reducers: {
		resetTrucks: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getTrucks.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(getTrucks.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.page = action.payload.page;
				state.total = action.payload.total;
				if (state.page === 1) {
					state.items = action.payload.items;
				} else {
					state.items = [...state.items, ...action.payload.items];
				}
			})
			.addCase(getTrucks.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(getTruckById.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getTruckById.fulfilled, (state, action) => {
				state.isLoading = false;
				state.currentTruck = action.payload;
			})
			.addCase(getTruckById.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { resetTrucks } = trucksSlice.actions;
export const trucksReducer = trucksSlice.reducer;
