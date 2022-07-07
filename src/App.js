import { getCategories, getCats } from "./api";
import { useDispatch, useSelector } from "react-redux/es/exports";

import { useEffect } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import RootRoutes from "./routes/rootRoutes";
import { categoriesAction, getCatsAction } from "./sotre/actions";

function App() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.categoryId);

  useEffect(() => {
    const getData = async () => {
      const categories = await getCategories();
      const cats = await getCats(categoryId);
      dispatch(categoriesAction(categories));
      dispatch(getCatsAction(cats));
    };

    getData();
  }, [categoryId]);

  return (
    <div className="App">
      <Sidebar>
        <RootRoutes />
      </Sidebar>
    </div>
  );
}

export default App;
