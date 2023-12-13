import { useEffect, useState } from "react";

import { useLocation} from "react-router-dom";

import { ToastContainer } from "react-toastify";

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      {locationChanged && <PageLoading />}
      {locationChanged && <ScrollTop />}
    </div>
  );
}

export default App;

