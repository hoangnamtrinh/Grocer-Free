import './ItemCard.css'

const ItemCard = ({item}) => {
  return <div className='store-item-card'>
    <div className='store-item-number'><span>{item.num}</span></div>
    <div className='store-item-img'>
      <img src={item.imgUrl} alt='banana-img'></img>
    </div>
    <div className='store-item-name'>{item.name}</div>
    <div className='store-item-price'><span className="store-dollar-sign">$</span>{item.price}</div>
  </div>
}

export default ItemCard;