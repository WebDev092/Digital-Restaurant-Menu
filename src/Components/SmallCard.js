import React, { useState } from "react";
import ShowMoreText from "react-show-more-text";
import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import MoneyIcon from "@material-ui/icons/Money";

const styles = (theme) => ({
  containerWrapper: {
    color: "#2b2b2b",
  },
  boxWrapper: {
    paddingTop: 20,
    display: "flex",
    alignItems: "center",
  },
  orderBtn: {
    borderRadius: 50,
    fontWeight: 600,
    backgroundColor: "#2a2ae9 !important",
    height: "auto",
    width: 150,
    color: "white",
  },
  borderBox: {
    width: "100%",
    height: 1,
    background: "#2b2b2b59",
  },
});

const useStyles = makeStyles(styles);

const SmallCard = (props) => {
  const classes = useStyles();
  const title = props.title;
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };

  return (
    <Box m={2} className={classes.containerWrapper}>
      <Typography style={{ fontWeight: 400 }}>{title}</Typography>
      <Typography variant="h6" style={{ fontWeight: 600 }}>
        The Chef Table Experience
      </Typography>
      <ShowMoreText
        lines={1}
        more={"+ More"}
        less={"Less"}
        onClick={onClick}
        expanded={expand}
        width={400}
      >
        <Typography>
          Seven Reasons has been named DC's Best Restaurant (Washington Post,
          2019), Best New Restaurant in the Americas (Esquire, 2019), and among
          the 40 Most Important Restaurant of the Decade (Esquire, 2019). At
          Seven Reasons we offer six different experiences 1) The Chef Table
          Experience 2) The Cocktail Experience 3) Regular Reservation 4) Patio
          Reservation 5) Ceviche on Wheels (At Home) 6) Take Out / Delivery (At
          Home) At Seven Reasons we charge a 22% Service Fee, that is added to
          every check. This fee allows us to pay competitive wages to all of our
          staff. Please note that there are certain types of allergies we might
          not be able to accommodate. Our menu features Vegetarian and Gluten
          *Friendly* options. But our kitchen has cross contamination, meaning
          that we are not fully Gluten "Free". If you have a severe Gluten or
          dairy allergy, we might not be able to accommodate your requests.
          Below you will find more information about each experience. We look
          forward to seeing you soon!
        </Typography>
      </ShowMoreText>
      <Box className={classes.boxWrapper}>
        <RestaurantIcon />
        &nbsp;&nbsp;&nbsp;
        <Typography variant="h6">
          Prepaid reservation for paties of 2 to 5
        </Typography>
      </Box>
      <Box className={classes.boxWrapper}>
        <MoneyIcon />
        &nbsp;&nbsp;&nbsp;
        <Typography variant="h6">$25 deposit per person</Typography>
      </Box>
      <Box className={classes.boxWrapper}>
        <Button className={classes.orderBtn}>
          {title === "RESERVATION" ? "Book Now" : "Order Now"}
        </Button>
      </Box>
      <Box className={classes.boxWrapper}>
        <div className={classes.borderBox}></div>
      </Box>
    </Box>
  );
};

export default SmallCard;
