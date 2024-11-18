import { Routes, Route } from "react-router-dom"
import Dashboard from "./dashboard"
import Werknemers from "./werknemers"
import Requests from "./requests"
import Analytics from "./analytics"
import Settings from "./settings"

const Admin = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/werknemers" element={<Werknemers />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
}

export default Admin