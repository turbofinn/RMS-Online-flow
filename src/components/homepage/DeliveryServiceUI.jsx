import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function PartnerRideSection() {
  return (
    <div className="flex flex-col md:flex-row gap-6 px-4 md:px-0">
      {/* Partner with us */}
      <Card className="flex-1 rounded-xl overflow-hidden relative">
        {/* Badge */}
        <div className="hidden sm:block absolute top-0 left-5 bg-white text-black px-14 py-3.5 rounded-b-2xl font-semibold text-base">
          Earn more with lower fees
        </div>

        <CardMedia
          component="img"
          height="240"
          image="/assets/DelivUi.svg"
          alt="Partner with us"
          className="object-cover h-full"
        />

        <CardContent
          className="absolute bottom-0 left-5 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white p-5
                     flex flex-col sm:items-start items-center text-center sm:text-left"
        >
          {/* Hide on small screens */}
          <Typography
            sx={{ marginBottom: "5px" }}
            className="text-blue-300 mb-3 hidden sm:block"
          >
            Signup as a business
          </Typography>

          <Typography
            sx={{ marginBottom: "12px", whiteSpace: "nowrap" }}
            variant="h4"
            fontWeight="bold"
            className="mb-4"
          >
            Partner with us
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3AA1C4",
              "&:hover": { backgroundColor: "#0ea5e9" },
              color: "white",
              fontSize: { xs: "12px", sm: "14px" },
              fontWeight: "600",
              textTransform: "none",
              borderRadius: "9999px",
              marginTop: "12px",
              paddingX: { xs: "30px", sm: "50px" },
              paddingY: { xs: "6px", sm: "10px" },
            }}
          >
            Get Started
          </Button>
        </CardContent>
      </Card>

      {/* Ride with us */}
      <Card className="flex-1 rounded-xl overflow-hidden relative">
        {/* Badge */}
        <div className="hidden sm:block absolute top-0 left-5 bg-white text-black px-14 py-3.5 rounded-b-2xl font-semibold text-base">
          Avail exclusive perks
        </div>

        <CardMedia
          component="img"
          height="240"
          image="/assets/deliui2.svg"
          alt="Ride with us"
          className="object-cover h-full"
        />

        <CardContent
          className="absolute bottom-0 left-5 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white p-5
                     flex flex-col sm:items-start items-center text-center sm:text-left"
        >
          {/* Hide on small screens */}
          <Typography
            sx={{ marginBottom: "5px", fontWeight: "bold" }}
            className="text-blue-300 mb-3 hidden sm:block"
          >
            Signup as a rider
          </Typography>

          <Typography
            sx={{ marginBottom: "12px", whiteSpace: "nowrap" }}
            variant="h4"
            fontWeight="bold"
            className="mb-4"
          >
            Ride with us
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3AA1C4",
              "&:hover": { backgroundColor: "#0ea5e9" },
              color: "white",
              fontSize: { xs: "12px", sm: "14px" },
              fontWeight: "600",
              textTransform: "none",
              borderRadius: "9999px",
              marginTop: "12px",
              paddingX: { xs: "30px", sm: "50px" },
              paddingY: { xs: "6px", sm: "10px" },
            }}
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
