import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header } from "./Header/Header";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home/Home.jsx"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog.jsx"));
const TruckInfo = lazy(() => import("../pages/TruckInfo/TruckInfo.jsx"));

const App = () => {
	return (
		<>
			<Header />

			<Suspense fallback={null}>
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/catalog" element={<Catalog />} />
						<Route path="/catalog/:id" element={<TruckInfo />} />
					</Routes>
				</main>
			</Suspense>

			<ToastContainer position="bottom-right" />
		</>
	);
};

export default App;
