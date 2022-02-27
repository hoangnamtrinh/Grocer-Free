import "./OptionPage.css";
import { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import StoreList from "./StoreList/StoreList";

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];
const OptionPage = () => {
  const [tags, setTags] = useState([]);
  const [items, setItems] = useState([[], [], [], []]);
  const [prices, setPrices] = useState(["0.00", "0.00", "0.00", "0.00"]);
  const [loading, setLoading] = useState(false);

  const updateItems = () => {
    setItems([
      [
        {
          name: "Willowton Free Range Chicken",
          img: "https://www.aldi.com.au/fileadmin/_processed_/7/f/csm_ALN3401-19_REDUCTIONS_FUTURE-PRICE-_RND19__1x1_228x128_2_e9b1ca5d4f.jpg",
          price: "16.49",
        },
        {
          name: "Lodge Farms Extra Large Free Range Eggs 12pk/700g",
          img: "https://www.aldi.com.au/fileadmin/_processed_/0/c/csm_ALN3510_Q3_DAIRY_1x1_228x128_20_bbe3521a1c.jpg",
          price: "3.99",
        },
        {
          name: "Farmdale Lactose Free Full Cream Milk 1L",
          img: "https://www.aldi.com.au/fileadmin/_processed_/0/9/csm_ALN3077_DAIRY-EGGS_1x1_228x128__3b333d29cc.jpg",
          price: "1.99",
        },
      ],
      [
        {
          name: "Denada Ice Cream Mango Split",
          img: "https://shop.coles.com.au/wcsstore/Coles-CAS/images/4/5/0/4507139-th.jpg",
          price: "8.50",
        },
        {
          name: "Coles Deli Fresh Tasmanian Salmon Portions Skin On",
          img: "https://shop.coles.com.au/wcsstore/Coles-CAS/images/8/1/0/8106800-th.jpg",
          price: "6.75",
        },
        
        {
          name: "Latina Fresh Creamy Sundried Tomato Pasta Sauce",
          img: "https://shop.coles.com.au/wcsstore/Coles-CAS/images/6/0/2/6026890-th.jpg",
          price: "4.50",
        },
      ],
      [
        {
          name: "Macro Free Range Chicken Thigh Fillet 600 - 1.2kg",
          img: "https://cdn0.woolworths.media/content/wowproductimages/medium/764859.jpg",
          price: "18.00",
        },

        {
          name: "Farm Pride 12 Jumbo Free Range Eggs 800g",
          img: "https://cdn0.woolworths.media/content/wowproductimages/medium/761107.jpg",
          price: "7.00",
        },
        {
          name: "Woolworths Drought Relief Full Cream Milk 3l",
          img: "https://cdn0.woolworths.media/content/wowproductimages/medium/807384.jpg",
          price: "3.90",
        },
      ],
      [
        {
          name: "Free Range RSPCA Approved Chicken Drumsticks",
          img: "https://shop.coles.com.au/wcsstore/Coles-CAS/images/3/2/2/3228774-th.jpg",
          price: "1.99",
        },

        {
          name: "Farm Pride 12 Jumbo Free Range Eggs 800g",
          img: "https://cdn0.woolworths.media/content/wowproductimages/medium/761107.jpg",
          price: "7.00",
        },
        {
          name: "Woolworths Drought Relief Full Cream Milk 3l",
          img: "https://cdn0.woolworths.media/content/wowproductimages/medium/807384.jpg",
          price: "3.90",
        },
      ],
    ]);
    setPrices(["45.61", "39.94", "41.45", "30.57"])
  };

  const searchHandler = () => {
    setLoading(true);
    setTimeout(() => {
      updateItems();
      setLoading(false);
    }, 3000);
  };
  const removeTags = () => {
    setTags([]);
  };

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };

  return (
    <div className="option-page-bg">
      <div className="search-ctn">
        <div className="search-title">
          <h1>Search Your Meal</h1>
        </div>

        <div>
          <ReactTags
            tags={tags}
            delimiters={delimiters}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            handleTagClick={handleTagClick}
            inputFieldPosition="inline"
            placeholder="Type Your Food and Enter"
            autocomplete
          />
        </div>
        <button className="search-btn" onClick={searchHandler}>
          Search
        </button>
        <button className="remove-all" onClick={removeTags}>
          Remove All
        </button>
      </div>
      <StoreList items={items} prices={prices}/>
      {loading ? (
        <div>
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
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default OptionPage;
