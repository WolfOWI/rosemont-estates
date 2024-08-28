import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";

// Pages
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import ListingsPage from "./pages/ListingsPage";
import ListingDetailPage from "./pages/ListingDetailPage";
import CreateListingPage from "./pages/CreateListingPage";
import EditListingPage from "./pages/EditListingPage";
import ProfilePage from "./pages/ProfilePage";
import AdminListingsDash from "./pages/AdminListingsDash";
import AdminBuyDash from "./pages/AdminBuyDash";
import AdminRentDash from "./pages/AdminRentDash";
import AdminClosedDealsDash from "./pages/AdminClosedDealsDash";
import AdminRejectedDash from "./pages/AdminRejectedDash";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/listing/:houseId" element={<ListingDetailPage />} />
          <Route path="/edit/:houseId" element={<EditListingPage />} />
          <Route path="/add" element={<CreateListingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin-listings" element={<AdminListingsDash />} />
          <Route path="/admin-buyers" element={<AdminBuyDash />} />
          <Route path="/admin-tenants" element={<AdminRentDash />} />
          <Route path="/admin-closed" element={<AdminClosedDealsDash />} />
          <Route path="/admin-rejected" element={<AdminRejectedDash />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
