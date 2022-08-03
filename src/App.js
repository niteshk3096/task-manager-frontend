import { AuthProvider } from "./router/AuthProvider";
import Router from "./router/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainContainer from "./components/MainContainer/MainContainer";
function App() {
  return (
    <>
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
      />
      <AuthProvider>
        <MainContainer>
          <Router />
        </MainContainer>
      </AuthProvider>
    </>
  );
}

export default App;
