import "./StoreList.css";
import StoreListOption from "./StoreListOption/StoreListOption";
import aldi_logo from "./Aldi-logo.png";
import coles_logo from "./Coles-logo.png";
import woolworths_logo from "./woolworths-logo.png";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";

const StoreList = ({items, prices}) => {
  
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  const goToStore = () => {
    navigate("/store-page");
  };
  console.log(items)
  const loadingHandler = () => {
    setLoading(true);
    setTimeout(() => {
      goToStore();
    }, 2000);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [storeList, setStoreList] = useState([true, true, true]);

  const optionToggle = (event) => {
    let index = 0;
    console.log(event.target.id);
    let tempStoreList = [...storeList];
    if (event.target.id === "aldi") {
      index = 0;
    } else if (event.target.id === "coles") {
      index = 1;
    } else if (event.target.id === "woolworths") {
      index = 2;
    }
    if (tempStoreList[index] === true) {
      tempStoreList[index] = false;
    } else {
      tempStoreList[index] = true;
    }
    console.log(tempStoreList);
    setStoreList([...tempStoreList]);
  };

  return (
    <div className="store-list-ctn">
      <StoreListOption
        name={"aldi"}
        logo={aldi_logo}
        price={prices[0]}
        items={items[0]}
        onLoadingHandler={loadingHandler}
      />
      {/* <Link to="/store-page" style={{ textDecoration: 'none' }}> */}
      <StoreListOption
        name={"coles"}
        logo={coles_logo}
        price={prices[1]}
        items={items[1]}
        onLoadingHandler={loadingHandler}
      />
      {/* </Link> */}
      <StoreListOption
        name={"woolworths"}
        logo={woolworths_logo}
        price={prices[2]}
        items={items[2]}
        onLoadingHandler={loadingHandler}
      />
      <div className="store_option">
        <div className="store-icon">
          <button className="choose-store-btn" onClick={handleOpen}>
            Choose Your Stores
          </button>
        </div>
        <div className="items">
          {items[3].map((element, index) => {
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
        <div className="store-price">${prices[3]}</div>
        <div className="store-toggle">
          <DoubleArrowIcon sx={{ fontSize: 70 }} />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-box">
          <h1>Choose Your Store</h1>
          <div className="store-option-modal">
            <div className="store-option-modal-card">
              <div className="aldi-modal store-option-modal-card-logo">
                <img src={aldi_logo} alt="aldi-logo"></img>
              </div>
              {storeList[0] ? (
                <div
                  id="aldi"
                  className="inactive-backdrop"
                  style={{ opacity: "0" }}
                  onClick={optionToggle}
                ></div>
              ) : (
                <div
                  id="aldi"
                  className="inactive-backdrop"
                  style={{ opacity: "1" }}
                  onClick={optionToggle}
                ></div>
              )}
            </div>
            <div className="store-option-modal-card">
              <div className="coles-modal store-option-modal-card-logo">
                <img src={coles_logo} alt="coles-logo"></img>
              </div>
              {storeList[1] ? (
                <div
                  id="coles"
                  className="inactive-backdrop"
                  style={{ opacity: "0" }}
                  onClick={optionToggle}
                ></div>
              ) : (
                <div
                  id="coles"
                  className="inactive-backdrop"
                  style={{ opacity: "1" }}
                  onClick={optionToggle}
                ></div>
              )}
            </div>
            <div className="store-option-modal-card">
              <div className="woolworths-modal store-option-modal-card-logo">
                <img src={woolworths_logo} alt="woolworths-logo"></img>
              </div>
              {storeList[2] ? (
                <div
                  id="woolworths"
                  className="inactive-backdrop"
                  style={{ opacity: "0" }}
                  onClick={optionToggle}
                ></div>
              ) : (
                <div
                  id="woolworths"
                  className="inactive-backdrop"
                  style={{ opacity: "1" }}
                  onClick={optionToggle}
                ></div>
              )}
            </div>
          </div>
        </Box>
      </Modal>
      {loading ? <div>
        <div className="loading-backdrop"></div>
        <div className="loading-ctn">
          <div className="loading-card">
            <svg className="loading-svg">
              <circle
                className="loading-circle"
                cx="70"
                cy="70"
                r="70"
              ></circle>
            </svg>
          </div>
        </div>
      </div> : <></>}
      
    </div>
  );
};

export default StoreList;
