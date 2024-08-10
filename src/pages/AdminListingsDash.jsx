import Sidebar from "../components/navigation/Sidebar";
import PropertyAccordion from "../components/admin/PropertyAccordion";

function AdminListingsDash() {
  const property = {
    title: "Modern Riversands Villa",
    style: "Italian-Style",
    availableDate: "01/09/2024",
    address: "22 Century Boulevard, Riversands, Johannesburg, 1684",
    description:
      "Modern bedroom with en-suite bathroom available in two bedroom apartment. Are you looking for a vibrant living experience in the heart of River-sands, near the University of Johannesburg? Look no further than this fantastic opportunity at Urban Quarter!",
    bedrooms: 6,
    bathrooms: 5,
    kitchens: 2,
    swimmingPools: 1,
    sportsCourts: 1,
    rentPrice: "R64,500",
    perMonth: "per month",
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col mx-8 mt-8 ml-[18rem] w-full">
          <h1>New Homes</h1>
          <div className=" w-full h-screen">
            <PropertyAccordion property={property} />
            <PropertyAccordion property={property} />
            <PropertyAccordion property={property} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminListingsDash;
