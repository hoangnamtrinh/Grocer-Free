import "./FirstPage.css";
import shopping_cart_img from "./shopping-cart.png";
// import dish_img from "./dish.png";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Link } from "react-router-dom";

const FirstPage = () => {
  return (
    <div className="first-bg">
      <div className="plan-box">
        <div className="plan-img">
          <img src={shopping_cart_img} alt="normal-shopping"></img>
        </div>
        <div className="plan-title">Let's Go Shopping</div>
        <Link to="/option-page">
          <div className="plan-arrow">
            <ArrowForwardRoundedIcon sx={{ fontSize: 70 }} />
          </div>
        </Link>
      </div>

      {/* <div className="plan-box">
        <div className="plan-img">
          <img src={dish_img} alt="normal-shopping"></img>
        </div>
        <div className="plan-title">Plan Your Meal</div>
        <div className="plan-arrow">
          <ArrowForwardRoundedIcon sx={{ fontSize: 70 }} />
        </div>
      </div> */}
    </div>
  );
};

export default FirstPage;
