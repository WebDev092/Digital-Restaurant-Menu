import React, { useState } from "react";
import ShowMoreText from "react-show-more-text";
import {
  Grid,
  Box,
  Typography,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  IconButton,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CutomTabs from "../Components/Tab";
import Map from "../Components/map";
import Header from "../Layout/header";
import bgImg from "../assets/background.png";
import {styles} from "./Home.styles";

const useStyles = makeStyles(styles);
const Home = () => {
  const classes = useStyles();
  const [expand, setExpand] = useState(false);
  const [guest, setGuest] = useState(0);
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const onClick = () => {
    setExpand(!expand);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container>
        <Grid xs={12}>
          <Header />
        </Grid>
        <Grid xs={12}>
          <Box m={2}>
            <Grid container>
              <Grid xs={2}></Grid>
              <Grid xs={8}>
                <Box m={1}>
                  <Grid container>
                    <Grid xs={8}>
                      <Box className={classes.leftImgWrapper}>
                        <img
                          src={bgImg}
                          alt=""
                          className={classes.imgWrapper}
                        />
                      </Box>
                    </Grid>
                    <Grid xs={4}>
                      <Box className={classes.leftImgWrapper}>
                        <Grid container>
                          <Grid xs={12}>
                            <img
                              src={bgImg}
                              alt=""
                              className={classes.imgWrapper}
                            />
                          </Grid>
                          <Grid xs={12}>
                            <img
                              src={bgImg}
                              alt=""
                              className={classes.imgWrapper}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid xs={8} style={{ color: "#4f4f65" }}>
                      <Box m={2}>
                        <Typography variant="h3" className={classes.title}>
                          Seven Reasons
                        </Typography>
                        <Typography variant="h6">
                          Washington, DC · Latin American · $$$
                        </Typography>
                      </Box>
                      <Box m={2}>
                        <Typography variant="h6">
                          Seven Reasons has a simple but challenging mission: to
                          take clients through a sensorial encounter, allowing
                          our guests to discover their very own Seven Reasons of
                          a magic culinary experience. Our kitchen is inspired
                          by the best Latin American culinary roots, brought to
                          life through Chef Enrique Limardo's bold, contemporary
                          approach. Chef Enrique aims to transport clients
                          through a route of exquisite flavors and textures,
                          each presented in his unique way.
                        </Typography>
                      </Box>
                      <Box m={2} style={{color:'#4f4f65'}}>
                        <ShowMoreText
                          lines={1}
                          more={"+ More"}
                          less={"Less"}
                          onClick={onClick}
                          expanded={expand}
                          width={400}
                        >
                          <Typography>
                            Seven Reasons has been named DC's Best Restaurant
                            (Washington Post, 2019), Best New Restaurant in the
                            Americas (Esquire, 2019), and among the 40 Most
                            Important Restaurant of the Decade (Esquire, 2019).
                            At Seven Reasons we offer six different experiences
                            1) The Chef Table Experience 2) The Cocktail
                            Experience 3) Regular Reservation 4) Patio
                            Reservation 5) Ceviche on Wheels (At Home) 6) Take
                            Out / Delivery (At Home) At Seven Reasons we charge
                            a 22% Service Fee, that is added to every check.
                            This fee allows us to pay competitive wages to all
                            of our staff. Please note that there are certain
                            types of allergies we might not be able to
                            accommodate. Our menu features Vegetarian and Gluten
                            *Friendly* options. But our kitchen has cross
                            contamination, meaning that we are not fully Gluten
                            "Free". If you have a severe Gluten or dairy
                            allergy, we might not be able to accommodate your
                            requests. Below you will find more information about
                            each experience. We look forward to seeing you soon!
                          </Typography>
                        </ShowMoreText>
                      </Box>
                      <Box m={2}>
                        <CutomTabs />
                      </Box>
                      <Box m={2}>
                        <Typography variant="h4" style={{ fontWeight: 600 }}>
                          Hours and location
                        </Typography>
                        <Box>
                          <Grid container>
                            <Grid xs={6}>
                              <Box className={classes.mapWrapper}>
                                <Map />
                              </Box>
                            </Grid>
                            <Grid xs={6}>
                              <Typography variant="h6">
                                <a>
                                  Seven Reasons 2208 14th Street Northwest
                                  Washington, DC 20009
                                </a>
                              </Typography>
                              <Box className={classes.boxWrapper}>
                                <div className={classes.borderBox}></div>
                              </Box>
                              <Typography variant="h6">
                                <a>http://www.sevenreasonsdc.com</a>
                              </Typography>
                              <Box className={classes.boxWrapper}>
                                <div className={classes.borderBox}></div>
                              </Box>
                              <Typography variant="h6">
                                <a>View menu</a>
                              </Typography>
                              <Box className={classes.boxWrapper}>
                                <div className={classes.borderBox}></div>
                              </Box>
                              <Typography variant="h6">
                                <a>Today 5:00PM - 10:45PM</a>
                              </Typography>
                              <Box className={classes.boxWrapper}>
                                <div className={classes.borderBox}></div>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                      <Box className={classes.boxWrapper}>
                        <div className={classes.borderBox}></div>
                      </Box>
                    </Grid>
                    <Grid xs={4}>
                      <Box m={2} className={classes.rightBox}>
                        <FormControl variant="outlined" margin="normal">
                          <InputLabel htmlFor="outlined-adornment-guests">
                            Guests
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-guests"
                            type="text"
                            value={`${guest} Guests`}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={() => setGuest(guest + 1)}
                                  edge="end"
                                >
                                  <AddIcon />
                                </IconButton>
                                <IconButton
                                  onClick={() => setGuest(guest - 1)}
                                  edge="end"
                                >
                                  <RemoveIcon />
                                </IconButton>
                              </InputAdornment>
                            }
                            labelWidth={70}
                          />
                        </FormControl>
                        <KeyboardDatePicker
                          disableToolbar
                          variant="outlined"
                          format="MM/dd/yyyy"
                          margin="normal"
                          id="date-picker-inline"
                          label="Date"
                          style={{ width: "85%" }}
                          value={selectedDate}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            "aria-label": "change date",
                          }}
                        />
                        <KeyboardTimePicker
                          margin="normal"
                          id="time-picker"
                          label="Time"
                          value={selectedDate}
                          style={{ width: "85%" }}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            "aria-label": "change time",
                          }}
                        />
                        <Button className={classes.searchBtn}>Search</Button>
                      </Box>
                      <Box m={2} className={classes.boxWrapper}>
                        <Typography>
                          Now booking through Sunday, December 27, 2020
                        </Typography>
                      </Box>
                      <Box className={classes.boxWrapper}>
                        <div
                          className={classes.borderBox}
                          style={{ width: "85%" }}
                        ></div>
                      </Box>
                      <Box m={2} className={classes.boxWrapper}>
                        <Typography style={{textAlign:'center'}}>
                          Reservations are scheduled for release on November 29,
                          2020 at 8:00 AM Pacific Standard Time.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid xs={2}></Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
};
export default Home;
