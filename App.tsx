import Routes from "./src/routes";
import { ListProvider } from "./src/Context/list";

const App = () => (
	<ListProvider>
		<Routes />
	</ListProvider>
);

export default App;
