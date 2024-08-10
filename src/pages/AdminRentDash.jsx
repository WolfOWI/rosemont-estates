import Sidebar from "../components/navigation/Sidebar";

function AdminRentDash() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col mx-8 mt-8 ml-[18rem] w-full">
          <h1>Potential Tenants</h1>
          <div className="bg-green-300 w-full h-screen"></div>
        </div>
      </div>
    </>
  );
}

export default AdminRentDash;
