import { Providers } from "./providers/providers.tsx";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routers/routers.tsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("app started");
  }, []);
  return (
    <Providers>
      <RouterProvider router={AppRouter} />
    </Providers>
  );
}

export default App;
