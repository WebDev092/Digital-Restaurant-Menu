import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Popover, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { setRestaurant } from "../actions/home";
import { detailJson } from "../Constants/detailJson";
import { submenu } from "../Constants/submenu";

const SearchDropDown = () => {
  const dispatch = useDispatch();
  const mapInfo = useSelector((state) => state.home.mapInfo);
  const [open, setOpen] = useState(false);
  const address = useSelector((state) => state.home.address);
  const [anchorEl, setAnchorEl] = useState("");
  const [buttonLabel, setButtonLabel] = useState("Search");

  const handleClick = (e) => {
    setOpen(true);
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    const searchRes = e.target.textContent;
    let fillterRes = detailJson.filter((res) => res.label.includes(address));
    dispatch(setRestaurant(fillterRes[0].wine))
    const infowindow = new window.google.maps.InfoWindow();
    const sydney = new window.google.maps.LatLng(mapInfo.lat, mapInfo.lng);
    const map = new window.google.maps.Map(document.getElementById("myMap"), {
      center: sydney,
      zoom: 10,
    });
    const service = new window.google.maps.places.PlacesService(map);
    const request = {
      location: sydney,
      radius: "500",
      query: searchRes,
    };
    service.textSearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        map.setCenter(results[0].geometry.location);
        results.map((res) => {
          const marker = new window.google.maps.Marker({
            map,
            position: res.geometry.location,
          });
          new window.google.maps.event.addListener(marker, "click", () => {
            infowindow.setContent(res.name);
            infowindow.open(map);
          });
        });
      }
    });
    setButtonLabel(searchRes);
    setOpen(false);
    setAnchorEl(null);
  };
  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <Button
              variant="contained"
              {...bindTrigger(popupState)}
              style={{ width: 200,backgroundColor:'white',fontWeight:700 }}
              onClick={handleClick}
            >
              {buttonLabel ? buttonLabel : "Search"}
            </Button>
            <Popover
              {...bindPopover(popupState)}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={open}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <Box p={2}>
                <Autocomplete
                  id="combo-box-demo"
                  options={submenu}
                  getOptionLabel={(option) => option.label}
                  style={{ width: 300 }}
                  onChange={handleClose}
                  renderInput={(params) => (
                    <TextField {...params} label="Search" variant="outlined" />
                  )}
                />
              </Box>
            </Popover>
          </div>
        )}
      </PopupState>
    </>
  );
};

export default SearchDropDown;
