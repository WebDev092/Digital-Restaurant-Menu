import React, { useState, useEffect } from "react";
import Geocode from "react-geocode";
import { useDispatch } from "react-redux";
import { InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { setMapInfo, setMarkInfo } from "../../actions/home";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    display: "flex",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    width:250
  },
}));

const AddressAutocomplete = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [floatingLabelText, setFolationLabelText] = useState("");
  const [hintText, setHintText] = useState("");

  useEffect(() => {
    const input = document.getElementById("addressAutocompleteField");
    const options = {
      componentRestrictions: { country: "ca" },
      types: ["address"],
    };
    const geoAutocomplete = new window.google.maps.places.Autocomplete(
      input,
      options
    );
    geoAutocomplete.addListener("place_changed", () => {
      const selectedPlace = geoAutocomplete.getPlace();
      const componentForm = {
        street_number: "short_name",
        route: "long_name",
        locality: "long_name",
        administrative_area_level_1: "short_name",
        country: "long_name",
        postal_code: "short_name",
      };
      let selectedSuggest = {};
      for (let addressComponent of selectedPlace.address_components) {
        const addressType = addressComponent.types[0];
        if (componentForm[addressType]) {
          selectedSuggest[addressType] =
            addressComponent[componentForm[addressType]];
        }
      }
      input.value = `${selectedSuggest.street_number}, ${selectedSuggest.route}`;
      onChange(selectedSuggest);
    });
  }, []);

  const onChange = (selectedSuggest) => {
    let mark = [];
    Geocode.setApiKey("AIzaSyBXBj0qc9RgX_JNV192YnBUGsIWGAm405o");
    Geocode.fromAddress(selectedSuggest.route).then(
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
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search Google Map"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        id="addressAutocompleteField"
        floatingLabelText={floatingLabelText}
        variant="outlined"
        hintText={hintText}
        value={value}
        onChange={handleChange}
        inputProps={{ "aria-label": "search" }}
      />
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default AddressAutocomplete;
