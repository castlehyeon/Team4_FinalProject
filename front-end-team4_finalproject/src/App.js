import { Route, Routes } from "../node_modules/react-router-dom/dist/index";
import "./App.css";
import BasicLayout from "./pages/basicLayout/index";
import LoginForm from "./pages/loginForm/index";
import NotFound from "./pages/notFound/index";
import RegisterForm from "./pages/registerForm/index";
import BasicTemplate from "./pages/basicTemplate/index";

function App() {
  return (
    <Routes>
      <Route element={<BasicLayout />}>
        <Route index path="/" element={<LoginForm />}></Route>
        <Route path="/registerForm" element={<RegisterForm />}></Route>
        <Route path="/basicTemplate" element={<BasicTemplate />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
