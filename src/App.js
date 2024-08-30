import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";
import PrivateRoute from "./components/authorisation/PrivateRoute";

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
          {/* Public Routes */}
          <Route path="/" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          {/* Protected Routes */}
          <Route
            path="/home"
            element={
              <PrivateRoute allowedUserTypes={["user"]}>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/listings"
            element={
              <PrivateRoute allowedUserTypes={["user"]}>
                <ListingsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/listing/:houseId"
            element={
              <PrivateRoute allowedUserTypes={["user"]}>
                <ListingDetailPage />
              </PrivateRoute>
            }
          />
          {/* Only a home owner can edit their own house */}
          <Route
            path="/edit/:houseId"
            element={
              <PrivateRoute
                allowedUserTypes={["user"]}
                userIdRequired={true}
                houseOwnerCheck={true}
              >
                <EditListingPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/add"
            element={
              <PrivateRoute allowedUserTypes={["user"]}>
                <CreateListingPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute allowedUserTypes={["user"]}>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-listings"
            element={
              <PrivateRoute allowedUserTypes={["agent"]}>
                <AdminListingsDash />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-buyers"
            element={
              <PrivateRoute allowedUserTypes={["agent"]}>
                <AdminBuyDash />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-tenants"
            element={
              <PrivateRoute allowedUserTypes={["agent"]}>
                <AdminRentDash />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-closed"
            element={
              <PrivateRoute allowedUserTypes={["agent"]}>
                <AdminClosedDealsDash />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-rejected"
            element={
              <PrivateRoute allowedUserTypes={["agent"]}>
                <AdminRejectedDash />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
