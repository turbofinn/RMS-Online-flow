const API_BASE_URL =
    "https://v3xm78zikc.execute-api.us-east-1.amazonaws.com/dev";

const RestaurantService = {
    async fetchRestaurant({ mobileNo }) {
        try {
            const response = await fetch(`${API_BASE_URL}/fetch-restaurant`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mobileNo }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to fetch restaurant");
            }

            return {
                success: true,
                data,
                message: "Restaurant fetched successfully",
            };
        } catch (error) {
            console.error("Fetch Restaurant Error:", error);
            return {
                success: false,
                error: error.message || "Network error occurred",
            };
        }
    },

    // Store restaurant data in session storage
    storeRestaurantData(restaurantData) {
        try {
            sessionStorage.setItem(
                "turboTreatsRestaurant",
                JSON.stringify(restaurantData)
            );
            return true;
        } catch (error) {
            console.error("Failed to store restaurant data:", error);
            return false;
        }
    },

    // Get restaurant data from session storage
    getRestaurantData() {
        try {
            const restaurantData = sessionStorage.getItem("turboTreatsRestaurant");
            return restaurantData ? JSON.parse(restaurantData) : null;
        } catch (error) {
            console.error("Failed to get restaurant data:", error);
            return null;
        }
    },
};

export default RestaurantService;
