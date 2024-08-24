// IMPORT
// -----------------------------------------------------------
// React & Hooks
// -

// Services
// -

// Utility Functions
// -

// Third-Party Components
// -

// Internal Components
import Sidebar from "../components/navigation/Sidebar";
import CustomerCard from "../components/admin/CustomerCard";

// Imagery
// -

// -----------------------------------------------------------

function AdminRentDash() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col mx-8 mt-8 ml-[18rem] w-full">
          <h1 className="mb-2">Potential Buyers</h1>
          <CustomerCard type="tenant" />
          <CustomerCard type="tenant" />
        </div>
      </div>
    </>
  );
}

export default AdminRentDash;
