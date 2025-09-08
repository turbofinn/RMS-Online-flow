const API_BASE_URL =
    "https://v3xm78zikc.execute-api.us-east-1.amazonaws.com/dev";

const AuthService = {
    async sendOTP({ mobileNo, name, emailId, otp = "1234" }) {
        try {
            const response = await fetch(`${API_BASE_URL}/send-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mobileNo, name, emailId, otp }),
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.message || "Failed to send OTP");

            return { success: true, data, message: "OTP sent successfully" };
        } catch (error) {
            console.error("Send OTP Error:", error);
            return {
                success: false,
                error: error.message || "Network error occurred",
            };
        }
    },

    async verifyOTP({ mobileNo, otp, restaurantId, tableNo, userName }) {
        try {
            const response = await fetch(`${API_BASE_URL}/verify-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mobileNo, otp, restaurantId, tableNo, userName }),
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.message || "Invalid OTP");


            const user = data.user || data.data || data;

            return {
                success: true,
                user,
                message: "Login successful",
            };
        } catch (error) {
            console.error("Verify OTP Error:", error);
            return { success: false, error: error.message || "Network error occurred" };
        }
    },


    generateOTP(length = 4) {
        return Array.from({ length }, () => Math.floor(Math.random() * 10)).join(
            ""
        );
    },

    storeUserData(userData) {
        try {
            sessionStorage.setItem("turboTreatsUser", JSON.stringify(userData));
            return true;
        } catch (error) {
            console.error("Failed to store user data:", error);
            return false;
        }
    },

    getUserData() {
        try {
            const userData = sessionStorage.getItem("turboTreatsUser");
            return userData ? JSON.parse(userData) : null;
        } catch (error) {
            console.error("Failed to get user data:", error);
            return null;
        }
    },

    clearUserData() {
        try {
            sessionStorage.removeItem("turboTreatsUser");
            return true;
        } catch (error) {
            console.error("Failed to clear user data:", error);
            return false;
        }
    },

    isAuthenticated() {
        return this.getUserData() !== null;
    },

    logout() {
        try {
            localStorage.removeItem("userData");
            localStorage.removeItem("authToken");
            sessionStorage.removeItem("turboTreatsUser");
            return true;
        } catch (error) {
            console.error("Logout failed:", error);
            return false;
        }
    },
};

export default AuthService;
