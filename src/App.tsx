import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import SharedLayout from "./layouts/SharedLayout/SharedLayout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SignPage = lazy(()=> import("./pages/SingPage/SignPage"))

function App() {
  return (
    <>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign" element={<SignPage />} />
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
