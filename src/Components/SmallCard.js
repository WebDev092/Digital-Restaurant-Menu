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
  const menuData = props.menuData;
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };

  return (
    <Box m={2} className={classes.containerWrapper}>
      <Typography style={{ fontWeight: 600,color:'rgb(79, 79, 101)' }}>{title}</Typography>
      <Typography variant="h6" style={{ fontWeight: 600 }}>
       {menuData.name}
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
         {menuData.info}
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
        <Typography variant="h6">${menuData.price} deposit per person</Typography>
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
