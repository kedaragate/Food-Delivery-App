export const IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

//const latLang = "lat=18.524545&lng=73.6981481";//Pune
const latLang = "lat=19.0819577&lng=72.5514986"; //Mumbai
/*const actualResDataUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?${latLang}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;*/

const actualResDataUrl =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.655142&lng=73.901186&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&COVCELQ4KICAo7G+v9a2ETCnEw==";

/*export const RESTAURANT_DATA_URL = actualResDataUrl;*/
export const RESTAURANT_DATA_URL = `https://api.allorigins.win/raw?url=${encodeURIComponent(
  actualResDataUrl
)}`;

const actualResMenuUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&${latLang}&restaurantId=`;

export const RESTAURANTS_MENU_URL = `https://api.allorigins.win/raw?url=${encodeURIComponent(
  actualResMenuUrl
)}`;
