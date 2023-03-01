import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { Header, Router, Footer, GlobalStyles } from "./common";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="container">
          <Header />
          <Router />
        </div>
        <Footer />
      </GlobalStyles>
    </BrowserRouter>
  );
}

export default App;
