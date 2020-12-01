import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box } from "@material-ui/core";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import KitchenIcon from "@material-ui/icons/Kitchen";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import { makeStyles } from "@material-ui/core/styles";
import SmallCard from "./SmallCard";

const styles = (theme) => ({
  tabInner: {
    marginTop: 0,
    paddingTop: 20,
    borderTop: "1px solid lightgrey",
    width: "100%",
  },
});

const useStyles = makeStyles(styles);

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ marginTop: -3, width: "100%" }}
      {...other}
    >
      {value === index && (
        <>
          <div>{children}</div>
        </>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const CutomTabs = (props) => {
  const classes = useStyles();
  const menuList = props.menuList;
  const [selectedTabValue, setSelectedTabValue] = useState(0);

  const onTabChange = (event, value) => {
    setSelectedTabValue(value);
  };
  return (
    <>
      <Tabs
        value={selectedTabValue}
        indicatorColor="primary"
        textColor="primary"
        aria-label="Awarded project sections"
        style={{ width: "100%" }}
        onChange={onTabChange}
      >
        <Tab
          label={
            <>
              <RestaurantIcon />
              Reservations
            </>
          }
        />
        <Tab
          label={
            <>
              <KitchenIcon />
              PickUp
            </>
          }
        />
        <Tab
          label={
            <>
              <MotorcycleIcon />
              Delivery
            </>
          }
        />
      </Tabs>
      <TabPanel value={selectedTabValue} index={0}>
        <Box className={classes.tabInner}>
          {menuList.map((item, ind) => {
            return (
              <SmallCard
                key={`${ind}-menuitem`}
                title="RESERVATION"
                menuData={item}
              />
            );
          })}
        </Box>
      </TabPanel>
      <TabPanel value={selectedTabValue} index={1}>
        <Box className={classes.tabInner}>
          {menuList.map((item, ind) => {
            return (
              <SmallCard
                key={`${ind}-menuitem`}
                title="PICKUP"
                menuData={item}
              />
            );
          })}
        </Box>
      </TabPanel>
      <TabPanel value={selectedTabValue} index={2}>
        <Box className={classes.tabInner}>
          {menuList.map((item, ind) => {
            return (
              <SmallCard
                key={`${ind}-menuitem`}
                title="DELIVERY"
                menuData={item}
              />
            );
          })}
        </Box>
      </TabPanel>
    </>
  );
};

export default CutomTabs;
