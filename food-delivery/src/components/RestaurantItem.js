
const RestaurantItem = ({ items }) => {
    return (
        <section className="category-item-wrapper">
            {items?.map(item =>
                <div className="category-item" key={item?.card?.info?.id}>
                    <div className="category-item-type">{item?.card?.info?.isVeg === 1 ? <span className="veg"><span></span></span> : <span className="non-veg"><span></span></span>}</div>
                    <div className="category-item-name"><h3>{item?.card?.info?.name}</h3></div>
                    <div className="category-item-price"><h4>RS.{item?.card?.info?.price / 100}</h4></div>
                    <div className="category-item-rating"><h5>{item?.card?.info?.ratings?.aggregatedRating?.rating + '- (' + item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 + ')'}</h5></div>
                </div>
            )}
        </section>
    )
}

export default RestaurantItem;