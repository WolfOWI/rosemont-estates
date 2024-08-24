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
import CustomerCard from "../components/admin/CustomerCard";
import Sidebar from "../components/navigation/Sidebar";

// Imagery
// -

// -----------------------------------------------------------

function AdminBuyDash() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col mx-8 mt-8 ml-[18rem] w-full">
          <h1 className="mb-2">Potential Buyers</h1>
          <CustomerCard type="buyer" />
          <CustomerCard type="buyer" />
          <CustomerCard type="buyer" />
          <CustomerCard type="buyer" />
        </div>
      </div>
    </>
  );
}

export default AdminBuyDash;
