import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import ListingsPage from "./pages/ListingsPage";
import ListingDetailPage from "./pages/ListingDetailPage";
import CreateListingPage from "./pages/CreateListingPage";
import ProfilePage from "./pages/ProfilePage";
import AdminListingsDash from "./pages/AdminListingsDash";
import AdminBuyDash from "./pages/AdminBuyDash";
import AdminRentDash from "./pages/AdminRentDash";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/detail" element={<ListingDetailPage />} />
        <Route path="/add" element={<CreateListingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin-listings" element={<AdminListingsDash />} />
        <Route path="/admin-buyers" element={<AdminBuyDash />} />
        <Route path="/admin-tenants" element={<AdminRentDash />} />
      </Routes>
    </Router>
  );
}

export default App;
