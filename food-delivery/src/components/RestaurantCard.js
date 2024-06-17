import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { restaurantData } = props;
    const { name, cloudinaryImageId, cuisines, areaName } = restaurantData?.info;
    return (
        <div className="restaurant-card">
            <img src={CDN_URL + cloudinaryImageId} alt="R S Mani"></img>
            <div className="restaurant-card-details-wrapper">
                <div className="restaurant-card-details">
                    <div className="restaurant-type">Restaurant</div>
                    <div className="restaurant-name">{name}</div>
                    <div className="restaurant-cuisine">{cuisines.join(', ')}</div>
                    <div className="restaurant-location">{areaName}</div>
                </div>
            </div>
        </div>
    )
}

export const withRecommendedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="recommended-rest-wrapper">
                <div className="recommended-label">Recommended</div>
                <RestaurantCard {...props} />
            </div>
        );
    }
}

export default RestaurantCard;