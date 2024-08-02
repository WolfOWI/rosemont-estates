import { BedOutlined } from "@mui/icons-material";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

// TODO Delete Later (Temporary)
import Navbar from "../components/navigation/Navbar";

function LogInPage() {
  return (
    <>
      <Navbar />
      <h1 className="text-thorn-M1 font-main text-5xl">Log In Page</h1>
      <BedOutlined />
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default LogInPage;
