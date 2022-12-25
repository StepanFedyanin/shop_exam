import { Provider, useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { changeGlobalThemas } from "../../Redux/Reducer/PageSettings";
import DescriptionContent from "../DescriptionContent/DescriptionContent";
import { GlobalStyles } from "../Theme/GlobalStyles";
import { darkTheme, lightTheme } from "../Theme/Themes";
import './App.scss'
import '../../Style/Reset.scss'

function App() {
	const dispath = useDispatch()
	const theme = useSelector(state => state.GlobalThemas.themes)
	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<>
				<button onClick={() => dispath(changeGlobalThemas('dark'))}>change</button>
				<GlobalStyles />
				<div className="App">
					<DescriptionContent />
				</div>
			</>
		</ThemeProvider>
	);
}

export default App;
