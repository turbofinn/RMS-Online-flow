import React from "react";
import { Box, Paper, Typography, Button, Divider } from "@mui/material";
import { qaItems, cardData } from "../data/statsData";

export default function AboutUs() {
    return (
        <Box component="section" className="w-full">
            <div className="rounded-2xl" style={{ background: "#E0BDB3" }}>
                <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-8 py-8 sm:py-10 md:py-12">
                    {/* Title + Tabs */}
                    <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 text-center md:text-left">
                        <Typography
                            sx={{ fontWeight: 700 }}
                            variant="h4"
                            className="font-extrabold text-gray-900 text-base sm:text-lg md:text-xl"
                        >
                            Know more about us!
                        </Typography>
                        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center md:justify-end">
                            <Button
                                variant="outlined"
                                sx={{
                                    borderRadius: 9999,
                                    px: 3,
                                    py: 1,
                                    borderColor: "#3AA1C4",
                                    color: "#1f2937",
                                    textTransform: "none",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    "&:hover": {
                                        backgroundColor: "#3AA1C4",
                                        color: "#ffffff",
                                        borderColor: "#3AA1C4",
                                    },
                                }}
                            >
                                Frequent Questions
                            </Button>
                            {["Who we are?", "Partner Program", "Help & Support"].map(
                                (item) => (
                                    <Typography
                                        key={item}
                                        className="text-black cursor-pointer hover:text-black"
                                        sx={{ fontWeight: 400, fontSize: "14px" }}
                                    >
                                        {item}
                                    </Typography>
                                )
                            )}
                        </div>
                    </div>

                    {/* Main Card */}
                    <Paper elevation={1} className="rounded-2xl p-4 sm:p-5 md:p-8">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                            {/* FAQ Section */}
                            <div className="md:w-[40%] bg-white rounded-xl p-4 md:p-6">
                                <div className="mb-4">
                                    <div
                                        className="inline-flex items-center justify-center px-6 py-2 rounded-3xl"
                                        style={{ background: "#3AA1C4" }}
                                    >
                                        <Typography
                                            className="text-white font-semibold"
                                            sx={{ fontSize: "14px", fontWeight: 600 }}
                                        >
                                            {qaItems[0]}
                                        </Typography>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    {qaItems.slice(1).map((q) => (
                                        <Typography
                                            key={q}
                                            sx={{
                                                padding: "14px 0",
                                                fontSize: "14px",
                                                fontWeight: 700,
                                            }}
                                            className="font-semibold text-gray-900 text-sm md:text-base hover:text-[#3AA1C4] cursor-pointer transition-colors"
                                        >
                                            {q}
                                        </Typography>
                                    ))}
                                </div>
                            </div>

                            {/* Right Feature Cards */}
                            <div className="flex-1">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {cardData.map((card) => (
                                        <Paper
                                            key={card.title}
                                            variant="outlined"
                                            className="relative rounded-2xl p-4 text-center"
                                            sx={{
                                                borderColor: "#e5e7eb",
                                                backgroundColor: "#D9D9D9",
                                                borderRadius: "15px",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: "#03081F",
                                                    fontWeight: 700,
                                                    fontSize: "14px",
                                                    marginBottom: "8px",
                                                }}
                                                className="font-bold text-gray-900 mb-2"
                                            >
                                                {card.title}
                                            </Typography>
                                            <div className="flex items-center justify-center mb-3">
                                                <img
                                                    src={card.image}
                                                    alt={card.title}
                                                    className="w-16 h-16 object-contain"
                                                />
                                            </div>
                                            <Typography
                                                sx={{ fontSize: "12px", fontWeight: 500 }}
                                                className="text-black text-base whitespace-pre-line"
                                            >
                                                {card.text}
                                            </Typography>
                                        </Paper>
                                    ))}
                                </div>

                                {/* Bottom text */}
                                <Divider className="!my-6" />
                                <Typography
                                    sx={{ fontSize: "13px", fontWeight: 500 }}
                                    className="text-center text-xs md:text-sm leading-relaxed text-gray-600"
                                >
                                    Turbotreats simplifies the food ordering process. Browse
                                    through our diverse menu, select your favorite dishes, and
                                    proceed to checkout. Your delicious meal will be on its way to
                                    your doorstep in no time!
                                </Typography>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        </Box>
    );
}
