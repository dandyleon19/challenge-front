import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexHome from "./pages/home/index-home";
import IndexClients from "./pages/clients/index-clients";
import IndexTemplate from "./templates/index-template";
import IndexClientsCreate from "./pages/clients-create/index-clients-create";

const CustomRoutes = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <IndexTemplate>
        <Routes>
          <Route path="/" element={<IndexHome/>}/>
          <Route path="/clients" element={<IndexClients/>}/>
          <Route path="/clients/create" element={<IndexClientsCreate/>}/>
          <Route path="/clients/edit/:id" element={<IndexClientsCreate/>}/>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Not Found!!</p>
              </main>
            }
          />
        </Routes>
      </IndexTemplate>
    </BrowserRouter>
  )
}

export default CustomRoutes
