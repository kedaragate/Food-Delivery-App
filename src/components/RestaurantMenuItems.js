import { IMG_URL } from "../utils/constants";

export default RestaurantMenuItems = ({ menuItems }) => {
  const { categories } = menuItems[5]?.card?.card;

  return (
    <div>
      <h2 className="menu-category-name">{menuItems[5]?.card?.card?.title}</h2>
      {categories.map((cat) => {
        return (
          <div className="menu-container">
            <h3 className="menu-type">{cat?.title}</h3>
            {cat.itemCards?.map((item) => {
              return (
                <div className="menu-item">
                  <div className="menu-item-info">
                    <h4 className="menu-item-name">{item?.card?.info?.name}</h4>
                    <p className="menu-item-price">
                      ₹{item?.card?.info?.price / 100}
                    </p>
                  </div>
                  <div className="menu-item-image-container">
                    <img
                      className="menu-item-image"
                      src={IMG_URL + item?.card?.info.imageId}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
