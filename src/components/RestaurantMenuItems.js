import { IMG_URL } from "../utils/constants";

const RestaurantMenuItems = ({ menuItems }) => {
  const { itemCards } = menuItems[2]?.card?.card;
  const { categories } = menuItems[2]?.card?.card;
  //console.log(categories);
  return (
    <div className="menu-page-menus-container">
      <h2 className="menu-category-name">{menuItems[2]?.card?.card?.title}</h2>
      {(itemCards || categories)?.map((item) => {
        if (item.itemCards) {
          return item.itemCards.map((itemCard) => {
            return (
              <div
                className="menu-page-menu-container"
                key={itemCard?.card?.info?.id}
              >
                <div className="menu-item">
                  <div className="menu-item-info">
                    <h4 className="menu-item-name">
                      {itemCard?.card?.info?.name ||
                        itemCard?.card?.info?.title}
                    </h4>
                    <p className="menu-item-price">
                      ₹
                      {itemCard?.card?.info?.defaultPrice / 100 ||
                        itemCard?.card?.info?.price / 100}
                    </p>
                  </div>

                  <div className="menu-item-image-container">
                    {itemCard?.card?.info?.imageId ? (
                      <img
                        className="menu-item-image"
                        src={IMG_URL + itemCard?.card?.info?.imageId}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            );
          });
        }

        return (
          <div className="menu-item" key={item?.card?.info?.id}>
            <div className="menu-item-info">
              <h4 className="menu-item-name">
                {item?.card?.info?.name || item?.card?.info?.title}
              </h4>
              <p className="menu-item-price">
                ₹
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </p>
            </div>
            <div className="menu-item-image-container">
              {item?.card?.info?.imageId ? (
                <img
                  className="menu-item-image"
                  src={IMG_URL + item?.card?.info?.imageId}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default RestaurantMenuItems;
