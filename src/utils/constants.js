export const IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const latLang = "lat=18.524545&lng=73.6981481";
 const actualResDataUrl=`https://www.swiggy.com/dapi/restaurants/list/v5?${latLang}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
export const RESTAURANT_DATA_URL =`https://api.allorigins.win/get?url=${encodeURIComponent(actualResDataUrl)}`

export const RESTAURANTS_MENU_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&${latLang}&restaurantId=`;
