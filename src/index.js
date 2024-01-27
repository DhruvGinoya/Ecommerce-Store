import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {AppProvider} from "./context/productcontext"
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import {KindeProvider} from "@kinde-oss/kinde-auth-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <KindeProvider
        clientId="<your_kinde_client_id>"
        domain="<your_kinde_domain>"
        logoutUri={window.location.origin}
        redirectUri={window.location.origin}
    >
        <AppProvider>
            <FilterContextProvider>
                <CartProvider>
                    <App />   
                </CartProvider>     
            </FilterContextProvider>
        </AppProvider>
    </KindeProvider>
    );


reportWebVitals();
