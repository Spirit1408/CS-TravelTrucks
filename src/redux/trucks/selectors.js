export const selectTrucks = (state) => state.trucks.items;
export const selectIsLoading = (state) => state.trucks.isLoading;
export const selectError = (state) => state.trucks.error;
export const selectCurrentTruck = (state) => state.trucks.currentTruck;
export const selectPage = (state) => state.trucks.page;
export const selectTotal = (state) => state.trucks.total;