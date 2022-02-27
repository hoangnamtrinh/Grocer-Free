import "./StorePage.css";
import ItemCard from "./ItemCard/ItemCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const StorePage = () => {

  const items = [
    {num: 1, name: "Sunrice Jasmine Microwavable Rice", price: "2.00", imgUrl:"https://shop.coles.com.au/wcsstore/Coles-CAS/images/4/8/5/4854380-th.jpg"},
    {num: 2, name: "Free Range RSPCA Approved Chicken Drumsticks", price: "1.99", imgUrl:"https://shop.coles.com.au/wcsstore/Coles-CAS/images/3/2/2/3228774-th.jpg"},
    {num: 3, name: "Coles Full Cream Milk", price: "2.60", imgUrl:"https://shop.coles.com.au/wcsstore/Coles-CAS/images/4/3/9/439693-th.jpg"},
    {num: 4, name: "BullaLight Thickened Cooking Cream", price: "2.30", imgUrl:"https://shop.coles.com.au/wcsstore/Coles-CAS/images/5/8/2/5823407-th.jpg"},
    {num: 5, name: "Daily Pulp Free No Added Sugar Orange Juice", price: "2.30", imgUrl:"https://shop.coles.com.au/wcsstore/Coles-CAS/images/5/7/3/5738160-th.jpg"},
    {num: 6, name: "Coles Mini Chocolate Chip Muffins", price: "3.50", imgUrl:"https://shop.coles.com.au/wcsstore/Coles-CAS/images/2/4/0/2409310-th.jpg"},
    {num: 7, name: "Coles Deli Fresh Tasmanian Salmon Portions Skin On", price: "6.75", imgUrl:"https://shop.coles.com.au/wcsstore/Coles-CAS/images/8/1/0/8106800-th.jpg"},
    {num: 8, name: "Latina Fresh Creamy Sundried Tomato Pasta Sauce", price: "4.50", imgUrl:"https://shop.coles.com.au/wcsstore/Coles-CAS/images/6/0/2/6026890-th.jpg"},
    {num: 9, name: "Coles Medium Lemons", price: "1.70", imgUrl:"https://shop.coles.com.au/wcsstore/Coles-CAS/images/5/3/1/5318302-th.jpg"},
    {num: 10, name: "Denada Ice Cream Mango Split", price: "8.50", imgUrl:"https://shop.coles.com.au/wcsstore/Coles-CAS/images/4/5/0/4507139-th.jpg"},
    {num: 11, name: "Old El Paso Tortilla Pockets 8 Pack", price: "3.80", imgUrl:"https://shop.coles.com.au/wcsstore/Coles-CAS/images/3/8/0/3801549-th.jpg"},
  ];

  return (
    <div className="store-page-bg">
      <div className="store-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Coles_logo.svg/1200px-Coles_logo.svg.png"
          alt="coles-logo"
        ></img>
      </div>
      <div className="grocery-list-ctn">
        <div className="grocery-list">
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ sm: 6, md: 12 }}
            >
              {items.map((element, index) => (
                <Grid item xs={12} sx={12} md={6} key={index}>
                  <ItemCard item={element} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
        <button className="find-location-btn"><span className="store-dollar-sign">$</span>39.94</button>
      </div>
    </div>
  );
};

export default StorePage;
