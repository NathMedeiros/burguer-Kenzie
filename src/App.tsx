import { ToastContainer } from "react-toastify";
import GlobalStyles from "./GlobalStyles";
import RoutesPage from "./Routes/routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <RoutesPage />
      <GlobalStyles />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
