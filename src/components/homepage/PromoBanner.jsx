import React from "react";
import { Box, Typography } from "@mui/material";

export default function PromoBanner() {
    return (
        <>
            {/* ===== Desktop Version ===== */}
            <Box
                component="section"
                className="mx-auto my-4 rounded-2xl relative items-center overflow-visible shadow-lg hidden lg:flex"
                sx={{
                    maxWidth: 1533,
                    height: 500,
                    background: "linear-gradient(180deg, #EEEEEE 0%, #E0BDB3 100%)",
                    padding: 0,
                    position: "relative",
                }}
            >
                {/* Left: hero image */}
                <div
                    className="flex-none"
                    style={{
                        width: 832,
                        height: 590,
                        position: "absolute",
                        left: 0,
                        top: -14,
                        overflow: "visible",
                        zIndex: 10,
                    }}
                >
                    <img
                        src="/assets/orderinghero.svg"
                        alt="ordering hero"
                        style={{
                            height: "87%",
                            width: "100%",
                            objectFit: "contain",
                            display: "block",
                            zIndex: 10,
                        }}
                    />
                </div>

                {/* Right: content, pulled left to overlap image */}
                <div
                    className="flex-1 px-0 py-0 flex flex-col justify-center relative z-auto"
                    style={{
                        marginLeft: 600,
                        paddingLeft: 0,
                        paddingRight: 0,
                        width: "calc(100% - 832px)",
                    }}
                >
                    {/* Top logo and heading */}
                    <div className="flex items-center mb-2 ml-10 mt-5">
                        <img
                            src="/assets/logo.svg"
                            alt="logo"
                            style={{
                                width: 200,
                                height: 110,
                                objectFit: "cover",
                                marginBottom: 2,
                                marginLeft: 100,
                            }}
                        />
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontWeight: 800,
                                fontFamily: "Poppins",
                                color: "#071a2a",
                                fontSize: 50,
                                ml: 0,
                                mb: -5,
                            }}
                        >
                            is more
                        </Typography>
                    </div>

                    {/* Big headline with pill */}
                    <div className="mb-6 ml-6" style={{ marginTop: 12 }}>
                        <div
                            className="inline-block align-middle rounded-full px-12 py-2"
                            style={{
                                background: "#03081F",
                                display: "inline-flex",
                                alignItems: "center",
                                minWidth: 450,
                                justifyContent: "center",
                            }}
                        >
                            <Typography
                                variant="h3"
                                component="div"
                                sx={{
                                    fontWeight: 600,
                                    color: "#3AA1C4",
                                    fontSize: 38,
                                    lineHeight: 1.1,
                                    letterSpacing: 1,
                                    padding: "0 30px",
                                    textAlign: "center",
                                }}
                            >
                                <span style={{ color: "#3AA1C4", textDecoration: "underline" }}>
                                    Personalised
                                </span>{" "}
                                <span style={{ color: "#FFFFFF" }}>& Instant</span>
                            </Typography>
                        </div>
                    </div>

                    {/* Subtext */}
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#111111",
                            mb: 1,
                            fontSize: 18,
                            fontWeight: 500,
                            textAlign: "center",
                        }}
                    >
                        Download the Turbotreats app for faster ordering
                    </Typography>

                    {/* App store buttons */}
                    <div className="flex items-center ml-14 justify-center">
                        <a href="#" aria-label="Download on the App Store">
                            <img
                                src="/assets/appstore.svg"
                                alt="App Store"
                                width={150}
                                height={62}
                                style={{ objectFit: "contain" }}
                            />
                        </a>
                        <a
                            href="#"
                            aria-label="Get it on Google Play"
                            style={{ marginLeft: "8px" }}
                        >
                            <img
                                src="/assets/googleplay.svg"
                                alt="Google Play"
                                width={150}
                                height={62}
                                style={{ objectFit: "contain" }}
                            />
                        </a>
                    </div>
                </div>
            </Box>

            {/* ===== Mobile / Small screens (SEPARATE UI) ===== */}
            <Box
                component="section"
                className="lg:hidden mx-2 my-4 rounded-2xl relative flex flex-col items-center overflow-hidden shadow-lg"
                sx={{
                    maxWidth: 1533,
                    background: "linear-gradient(180deg, #EEEEEE 0%, #E0BDB3 100%)",
                    padding: 0,
                    position: "relative",
                }}
            >
                {/* Hero image on top */}
                <div className="w-full px-4 pt-4">
                    <img
                        src="/assets/orderinghero.svg"
                        alt="ordering hero"
                        className="w-full h-auto object-contain block"
                    />
                </div>

                {/* Content below */}
                <div className="w-full px-4 pb-6 flex flex-col items-center">
                    {/* Logo + heading */}
                    <div className="flex items-center justify-center mt-4 mb-2">
                        <img
                            src="/assets/logo.svg"
                            alt="logo"
                            className="w-36 h-auto object-contain block"
                        />
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontWeight: 800,
                                fontFamily: "Poppins",
                                color: "#071a2a",
                                fontSize: 28,
                                ml: 1,
                                mb: 0,
                            }}
                        >
                            is more
                        </Typography>
                    </div>

                    {/* Pill headline */}
                    <div className="mt-2 mb-4">
                        <div
                            className="inline-flex items-center rounded-full px-4 py-2"
                            style={{
                                background: "#03081F",
                                minWidth: 0,
                                justifyContent: "center",
                            }}
                        >
                            <Typography
                                component="div"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: 20,
                                    lineHeight: 1.1,
                                    letterSpacing: 0.5,
                                    px: 1,
                                    textAlign: "center",
                                }}
                            >
                                <span style={{ color: "#3AA1C4", textDecoration: "underline" }}>
                                    Personalised
                                </span>{" "}
                                <span style={{ color: "#FFFFFF" }}>& Instant</span>
                            </Typography>
                        </div>
                    </div>

                    {/* Subtext */}
                    <Typography
                        component="p"
                        sx={{
                            color: "#111111",
                            mb: 2,
                            fontSize: 14,
                            fontWeight: 500,
                            textAlign: "center",
                            px: 2,
                        }}
                    >
                        Download the Turbotreats app for faster ordering
                    </Typography>

                    {/* Store badges */}
                    <div className="flex gap-2 justify-center">
                        <a href="#" aria-label="Download on the App Store">
                            <img
                                src="/assets/appstore.svg"
                                alt="App Store"
                                className="w-32 h-auto object-contain block"
                            />
                        </a>
                        <a href="#" aria-label="Get it on Google Play">
                            <img
                                src="/assets/googleplay.svg"
                                alt="Google Play"
                                className="w-32 h-auto object-contain block"
                            />
                        </a>
                    </div>
                </div>
            </Box>
        </>
    );
}
