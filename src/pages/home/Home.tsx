import { useAuth } from "src/hooks/useAuth";

import Landing from "./Landing";
import Dashboard from "./Dashboard";

export default function Home() {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Dashboard /> : <Landing />;
}