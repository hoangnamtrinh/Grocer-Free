import "./StoreListOption.css";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import "react-multi-carousel/lib/styles.css";

const StoreListOption = ({ name, logo, price, items, onLoadingHandler }) => {
  return (
    <div className="store_option" onClick={onLoadingHandler}>
      <div className={name + " store-icon"}>
        <img src={logo} alt="logo"></img>
      </div>
      <div className="items">
        {items.map((element, index) => {
          return (
            <div className="item-card">
              <div className="item-img">
                <img src={element.img} alt="item-img"></img>
              </div>
              <div className="item-price">
                <span className="dollar-sign">$</span>
                <span>{element.price}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="store-price">${price}</div>
      <div className="store-toggle">
        <DoubleArrowIcon sx={{ fontSize: 70 }} />
      </div>
    </div>
  );
};

export default StoreListOption;
