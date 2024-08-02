import { BedOutlined } from "@mui/icons-material";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function LogInPage() {
  return (
    <>
      <h1 className="text-green-700 font-main text-5xl">Log In Page</h1>
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
