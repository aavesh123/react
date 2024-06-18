
const RestaurantItem = ({ item }) => {
    return (
        <div className="rest-category-item-details">
            <div>{item.name}</div>
            <div>{item?.finalPrice ?? item?.defaultPrice}</div>
            <div>{item.ratings.aggregatedRating.rating}</div>
            <p>{item.description}</p>
        </div>
    )
}

export default RestaurantItem;