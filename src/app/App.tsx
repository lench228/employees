import { Providers } from "./providers/providers.tsx";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routers/routers.tsx";

function App() {
  return (
    <Providers>
      <RouterProvider router={AppRouter} />
    </Providers>
  );
}

export default App;
