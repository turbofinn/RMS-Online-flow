
const API_BASE = "https://v3xm78zikc.execute-api.us-east-1.amazonaws.com/dev";

const FeedbackService = {
  async fetchFeedback(payload) {
    try {
      const response = await fetch(`${API_BASE}/fetch-feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching feedback:", error);
      return { success: false, data: [] };
    }
  },
};

export default FeedbackService;
