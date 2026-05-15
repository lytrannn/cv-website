import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Contact} from "./routes/Contact.jsx";
import {Landing} from "./routes/Landing.jsx";
import {Error404} from "./routes/Error404.jsx";
import {Works} from "./routes/Works.jsx";
import {Admin} from "./routes/Admin.jsx";
import {Gate} from "./components/admin/Gate.jsx";
import {createTheme, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';

function App() {
    const theme = createTheme({
        /** Put your mantine theme override here */
    });
    return (
        <>

            <BrowserRouter>
                <MantineProvider theme={theme}>
                    <Routes>
                        <Route path="/" element={<Gate><Landing/></Gate>}/>
                        <Route path="/contact" element={<Gate><Contact/></Gate>}/>
                        <Route path="/works" element={<Gate><Works/></Gate>}/>
                        <Route path="/admin" element={<Admin/>}/>
                        <Route path="*" element={<Error404/>}/>
                    </Routes>
                </MantineProvider>
            </BrowserRouter>
        </>
    )
}

export default App
