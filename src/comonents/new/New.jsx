import React from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { useState } from "react";
import "./New.css";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, color: "white" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const New = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        background: "rgb(12, 35, 35)",
        padding: "20px",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: "orange",
          },
        }}
      >
        <Tab
          label="What We Do"
          className={value === 0 ? "active-tab" : "inactive-tab"}
        />
        <Tab
          label="About Us"
          className={value === 1 ? "active-tab" : "inactive-tab"}
        />
        <Tab
          label="Contact Us"
          className={value === 2 ? "active-tab" : "inactive-tab"}
        />
        <Tab
          label="Careers"
          className={value === 3 ? "active-tab" : "inactive-tab"}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        We offer high-quality organic vegetables, fruits, food items, and
        groceries to our customers. At manaChoice, we are dedicated to building
        a better future!
      </TabPanel>
      <TabPanel value={value} index={1}>
        We are a team of passionate individuals dedicated to promoting organic
        farming. manaChoice is a startup company registered in Pakala, India.
        Utilizing emerging technologies, including web and mobile app-based
        services, we aim to transform the food industry. Initially, our goal is
        to connect not only vegetable lovers, but also fruit enthusiasts, and
        those seeking groceries, mineral water, and milk, on one platform to
        deliver freshly made, hygienic produce and products to the community.
      </TabPanel>
      <TabPanel value={value} index={2}>
        If you have any questions or inquiries, feel free to reach out to us.
      </TabPanel>
      <TabPanel value={value} index={3}>
        Join our team and contribute to our mission of sustainable agriculture.
      </TabPanel>
    </Box>
  );
};

export default New;
