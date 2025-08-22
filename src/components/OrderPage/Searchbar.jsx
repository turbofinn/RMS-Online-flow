import { Box, Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = ({ restaurantName = "McDonald's East London" }) => {
  const fullTitle = `All Offers from ${restaurantName}`;

  return (
    <Box sx={{ maxWidth: 1728, mx: "auto", px: { xs: 2, md: 3 }, py: 2 }}>
      <Grid
        container
        alignItems="center"
        spacing={2}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Title */}
        <Grid item>
          <Box
            component="h2"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              fontWeight: 600,
              color: "#000000",
            }}
          >
            {fullTitle}
          </Box>
        </Grid>

        {/* Search Input */}
        <Grid item sx={{ width: { xs: "100%", md: "300px" } }}>
          <TextField
            placeholder="Search from menu..."
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "grey.500" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              bgcolor: "#fff",
              borderRadius: "9999px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "9999px",
                pl: "8px",
              },
              "& .MuiOutlinedInput-input": {
                py: "8.5px",
              },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Searchbar;
