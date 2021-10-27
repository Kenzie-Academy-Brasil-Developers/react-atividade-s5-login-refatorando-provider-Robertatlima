import { ReactNode } from "react";
import { AuthProvider } from "./Auth";

interface AuthProps {
  children: ReactNode;
}
const Providers = ({ children }: AuthProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};
export default Providers;
