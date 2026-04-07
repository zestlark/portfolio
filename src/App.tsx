import { Home } from "@/views";
import { NavStyleProvider } from "./providers";

export const App = () => {
  return (
    <NavStyleProvider>
      <Home />
    </NavStyleProvider>
  );
};
