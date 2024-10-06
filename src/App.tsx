import { GoTopBtn } from "./components/goTopBtn/GoTopBtn";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { Contacts } from "./layout/sections/Contacts/Contacts";

import { Main } from "./layout/sections/Main/Main";
import { Passions } from "./layout/sections/Passions/Passions";
import { Portfolios } from "./layout/sections/Portfolios/Portfolios";

function App() {
	return (
		<div className="App">
			<GoTopBtn />
			<Header />
			<Main />
			<Passions />
			<Portfolios />
			<Contacts />
			<Footer />
		</div>
	);
}

export default App;
