import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	location: "",
	AC: false,
	bathroom: false,
	kitchen: false,
	TV: false,
	radio: false,
	refrigerator: false,
	microwave: false,
	gas: false,
	water: false,
	form: "",
	transmission: "",
	engine: "",
};

const filtersSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		setLocation: (state, action) => {
			state.location = action.payload;
		},
		setAC: (state, action) => {
			state.AC = action.payload;
		},
		setBathroom: (state, action) => {
			state.bathroom = action.payload;
		},
		setKitchen: (state, action) => {
			state.kitchen = action.payload;
		},
		setTV: (state, action) => {
			state.TV = action.payload;
		},
		setRadio: (state, action) => {
			state.radio = action.payload;
		},
		setRefrigerator: (state, action) => {
			state.refrigerator = action.payload;
		},
		setMicrowave: (state, action) => {
			state.microwave = action.payload;
		},
		setGas: (state, action) => {
			state.gas = action.payload;
		},
		setWater: (state, action) => {
			state.water = action.payload;
		},
		setForm: (state, action) => {
			state.form = action.payload;
		},
		setTransmission: (state, action) => {
			state.transmission = action.payload;
		},
		setEngine: (state, action) => {
			state.engine = action.payload;
		},
	},
});

export const {
	setLocation,
	setAC,
	setBathroom,
	setKitchen,
	setTV,
	setRadio,
	setRefrigerator,
	setMicrowave,
	setGas,
	setWater,
	setForm,
	setTransmission,
	setEngine,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
