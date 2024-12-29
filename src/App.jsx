import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Contact} from "./routes/Contact.jsx";
import {Landing} from "./routes/Landing.jsx";
import {Error404} from "./routes/Error404.jsx";
import {Works} from "./routes/Works.jsx";
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
                        <Route path="/" element={<Landing/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="*" element={<Error404/>}/>
                        <Route path="/works" element={<Works/>}/>
                    </Routes>
                </MantineProvider>
            </BrowserRouter>
        </>
    )
}

export default App
