import {createContext, useState, useEffect} from "react";
import {getCategoriesAndDocuments} from "../utils/firebase.util.jsx";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categorysMap = await getCategoriesAndDocuments();
      console.log(categorysMap);
      setCategoriesMap(categorysMap);
    };

    getCategoriesMap();
  }, []);
  const value = {categoriesMap};

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
