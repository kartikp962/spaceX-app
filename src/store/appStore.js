import { configureStore } from "@reduxjs/toolkit";
import CheckReducer from "./slices/checkSlice";
import popupReducer from "./slices/popupDataSlice";

const appStore = configureStore({
    reducer: {
        Check: CheckReducer,
        popupData:popupReducer
    }
});
export default appStore;