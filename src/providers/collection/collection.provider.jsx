import { createContext, useRef } from "react";
import SHOP_DATA from "./shop.data";

export const CollectionContext = createContext({
    collections: {},
    getCollection: () => {},
});

export const CollectionProvider = ({ children }) => {
    const collections = useRef(SHOP_DATA);
    const getCollections = () => {
        return Object.keys(collections.current).map(
            (k) => collections.current[k]
        );
    };
    const getCollection = (title) => {
        return collections.current[title];
    };
    return (
        <CollectionContext.Provider value={{ getCollections, getCollection }}>
            {children}
        </CollectionContext.Provider>
    );
};
