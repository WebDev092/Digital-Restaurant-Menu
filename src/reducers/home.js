const initialState = {
  mapInfo: { lat: 43.4869008, lng: -79.9856679 },
  markInfo: {},
  address: '',
  showrestaurant: [],
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case "HOME/SETMAPDATA":
      return {
        ...state,
        mapInfo: action.mapInfo,
      };
    case "HOME/SETMARKDATA":
      return {
        ...state,
        markInfo: action.markInfo,
      }
    case "HOME/SETADDRESS":
      return {
        ...state,
        address: action.address,
      }
    case "HOME/SETRESTAURANT":
      return {
        ...state,
        showrestaurant: action.showrestaurant,
      }
    default:
      return state;
  }
}
