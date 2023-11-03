import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home/Home.tsx";
import {client} from "@/services/pokedex/client.ts";
import {ApolloProvider} from "@apollo/client";

function App() {
    return (
        <>
            <ApolloProvider client={client}>
                <Routes>
                    <Route path={'/'} element={<Home/>}></Route>
                </Routes>
            </ApolloProvider>
        </>
    )
}

export default App
