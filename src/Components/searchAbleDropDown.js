import React, { useState } from "react";
import Geocode from "react-geocode";
import { useDispatch } from "react-redux";
import { Box, Button, Popover, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { setMapInfo, setMarkInfo, setAddress } from "../actions/home";
import { detailJson } from "../Constants/detailJson";

const SearchDropDown = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState("");
  const [buttonLabel, setButtonLabel] = useState("Search");

  const handleClick = (e) => {
    setOpen(true);
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    const searchRes = e.target.textContent;
    dispatch(setAddress(searchRes));
    let mark = [];
    Geocode.setApiKey("AIzaSyCDgCqSP7r9bnQ_oxU4uVk_eSZYSLcoGkc");
    Geocode.fromAddress(searchRes).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        dispatch(setMapInfo({lat:lat,lng:lng}));
        response.results.map((res) => {
          mark.push(res.geometry.location);
        })
        dispatch(setMarkInfo(mark));
      },
      (error) => {
        console.error(error);
      }
    );
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
              style={{ width: 250,backgroundColor:'white',fontWeight:700 }}
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
                  options={detailJson}
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
