"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  IconButton,
  Rating,
  Typography,
  CircularProgress,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FeedbackService from "@/services/feedbackService";

// helper to format timestamp → readable date
const formatDate = (timestamp) => {
  if (!timestamp) return "N/A";
  const date = new Date(Number(timestamp));
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export default function RestaurantReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadReviews() {
      setLoading(true);
      try {
        const payload = {

          action: "FETCH",
          feedbackId: "6ee32697-1146-45f3-9f8b-30bbd82b758e",
          restaurantId: "04d68d60-4887-4b52-839d-3f2b2a9d4f8a",
          userId: "9a884b16-054a-4b24-9f16-84e40c0b9526",
          message: "Updated review: Food was tasty, but service was a little slow.",
          rating: "5"

        };


        const res = await FeedbackService.fetchFeedback(payload);
        console.log("API response:", res);

        if (res.response?.responseCode === 1001 && Array.isArray(res.feedback)) {
          setReviews(res.feedback);
        } else {
          setReviews([]);
        }
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    }

    loadReviews();
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        backgroundColor: "#f5f5f5",
        marginBottom: "80px",
        py: { xs: 6, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: "bold",
              fontFamily: "poppins",
              fontSize: { xs: "1.5rem", md: "2rem" },
              color: "#000000",
            }}
          >
            Customer Reviews
          </Typography>

          <Box>
            <IconButton
              sx={{
                mr: 1,
                backgroundColor: "#33a9c9",
                color: "white",
                "&:hover": { backgroundColor: "#2a8fb3" },
              }}
            >
              <ArrowBackIosIcon fontSize="small" />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "#33a9c9",
                color: "white",
                "&:hover": { backgroundColor: "#2a8fb3" },
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* Loader */}
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
            <CircularProgress />
          </Box>
        ) : reviews.length > 0 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              pb: 2,
              flexWrap: "wrap",
            }}
          >
            {reviews.map((review) => (
              <Card
                key={review.feedbackId}
                elevation={0}
                sx={{
                  flex: 1,
                  minWidth: { xs: "100%", md: "300px" },
                  backgroundColor: "white",
                  borderRadius: 2,
                  p: 2,
                  boxShadow: 2,
                  transition: "transform 0.2s",
                  "&:hover": { transform: "translateY(-4px)" },
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 2,
                    }}
                  >
                    {/* Left - User */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box
                        component="img"
                        src="/assets/Profile.svg"
                        alt="Profile"
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "2px solid #f5f5f5",
                        }}
                      />

                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                          height: 34,
                          borderColor: " #3AA1C4",
                          alignSelf: "center",
                        }}
                      />

                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            fontFamily: "poppins",
                            fontSize: { xs: "0.7rem", md: "0.8rem" },
                          }}
                        >
                          User: {review.userId?.slice(0, 6) || "Anonymous"}
                        </Typography>
                        <Typography
                          variant="body2"
                          color=" #3AA1C4"
                          fontSize={{ xs: "0.6rem", md: "0.7rem" }}
                        >
                          Feedback ID: {review.feedbackId?.slice(0, 6)}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Right - Rating + Date */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                      }}
                    >
                      <Rating
                        value={Number(review.rating) || 0}
                        size="small"
                        readOnly
                      />
                      <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
                        <Box
                          component="img"
                          src="/assets/Time Span.svg"
                          alt=""
                          sx={{
                            width: "14px",
                            height: "14px",
                            mr: 0.5,
                            filter:
                              "brightness(0) saturate(100%) invert(65%) sepia(6%) saturate(370%) hue-rotate(169deg) brightness(90%) contrast(86%)",
                          }}
                        />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          fontFamily="poppins"
                          fontSize={{ xs: "0.6rem", md: "0.75rem" }}
                        >
                          {formatDate(review.createdDate)}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Review Content */}
                  <Typography
                    variant="body1"
                    sx={{
                      mt: 2,
                      fontSize: { xs: "0.8rem", md: "0.9rem" },
                      fontFamily: "poppins",
                      fontWeight: 500,
                      lineHeight: 1.6,
                    }}
                  >
                    {review.message || "No review text"}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        ) : (
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "poppins",
              color: "text.secondary",
              py: 4,
            }}
          >
            No reviews found.
          </Typography>
        )}
      </Container>
    </Box>
  );
}
