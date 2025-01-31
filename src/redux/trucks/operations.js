import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getTrucks = createAsyncThunk(
	"trucks/getTrucks",
	async (params, thunkAPI) => {
		try {
			const trucks = thunkAPI.getState().trucks;
			const filters = thunkAPI.getState().filters;
			const page = params?.page || trucks.page;
			const limit = 4;
			const queryParams = {
				page,
				limit,
				...(filters.location && { location: filters.location }),
				...(filters.form && { form: filters.form }),
				...(filters.AC && { AC: filters.AC }),
				...(filters.bathroom && { bathroom: filters.bathroom }),
				...(filters.kitchen && { kitchen: filters.kitchen }),
				...(filters.TV && { TV: filters.TV }),
				...(filters.radio && { radio: filters.radio }),
				...(filters.refrigerator && { refrigerator: filters.refrigerator }),
				...(filters.microwave && { microwave: filters.microwave }),
				...(filters.gas && { gas: filters.gas }),
				...(filters.water && { water: filters.water }),
				...(filters.transmission && { transmission: filters.transmission }),
				...(filters.engine && { engine: filters.engine }),
			};
			const { data } = await axios.get("/campers", { params: queryParams });
			return { ...data, page };
		} catch (error) {
			if (error.message === "Request failed with status code 404")
				return thunkAPI.rejectWithValue(
					"Not found trucks with these parameters",
				);

			if (error.message === "Request failed with status code 429")
				return thunkAPI.rejectWithValue("Too many requests");

			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const getTruckById = createAsyncThunk(
	"trucks/getTruckById",
	async (id, thunkAPI) => {
		try {
			const { data } = await axios.get(`/campers/${id}`);
			return data;
		} catch (error) {
			if (error.message === "Request failed with status code 404")
				return thunkAPI.rejectWithValue(
					"Not found truck with this id",
				);

			return thunkAPI.rejectWithValue(error.message);
		}
	},
);
