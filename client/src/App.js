import { useEffect, useState } from "react";

import { useLocation} from "react-router-dom";

import AppRoutes from "./router/AppRoutes";
import PageLoading from "./components/PageLoading/PageLoading";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function App() {
  const location = useLocation();
  let [locationChanged, setLocationChanged] = useState(false);

  useEffect(() => {
    console.log(`Route changed to ${location.pathname}`);
    setLocationChanged(true);

    const id = setTimeout(() => {
      setLocationChanged(false);
    }, 6000);

    return () => {
      clearTimeout(id);
    }
  }, [location]);

  return (
    <div className="App">
      <AppRoutes />
      {locationChanged && <PageLoading />}
      {locationChanged && <ScrollTop />}
    </div>
  );
}

export default App;