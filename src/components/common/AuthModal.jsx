"use client";
import React, { useState, useRef, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    IconButton,
    Box,
    TextField,
    Button,
    Typography,
    InputAdornment,
    Alert,
    CircularProgress,
    Fade,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import {
    Close as CloseIcon,
    // Email, // FUTURE: Uncomment when email functionality is needed
    Phone,
    Person,
    Sms,
    ArrowBack,
} from "@mui/icons-material";
import Image from "next/image";
import AuthService from "@/services/authService";

// Form validation functions
// FUTURE: Uncomment email validation when email functionality is needed
// const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
// };

const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
};

const validateOTP = (otp) => {
    const re = /^[0-9]{4}$/;
    return re.test(otp);
};

const validateName = (name) => {
    return name.trim().length >= 2;
};

// OTP Input Component
const OTPInput = ({ value, onChange, disabled = false }) => {
    const valueLength = 4;
    const [activeInput, setActiveInput] = useState(0);
    const inputRefs = useRef([]);

    const getOtpValue = () => (value ? value.toString().split("") : []);

    const handleOtpChange = (otp) => {
        const otpValue = otp.join("");
        onChange(otpValue);
    };

    const focusInput = (index) => {
        const ref = inputRefs.current[index];
        if (ref) {
            ref.focus();
            ref.select();
        }
    };

    const focusNextInput = () => {
        setActiveInput((prev) => Math.min(prev + 1, valueLength - 1));
    };

    const focusPrevInput = () => {
        setActiveInput((prev) => Math.max(prev - 1, 0));
    };

    const changeCodeAtFocus = (number) => {
        const otp = getOtpValue();
        otp[activeInput] = number;
        handleOtpChange(otp);
    };

    const handleInputFocus = (index) => {
        setActiveInput(index);
    };

    const handleOnChange = (e) => {
        const { value } = e.target;
        const number = value.trim() ? value[0] : " ";

        if (isNaN(number)) return;

        changeCodeAtFocus(number);
        if (number) {
            focusNextInput();
        }
    };

    const handleOnKeyDown = (e) => {
        if (e.key === "Backspace") {
            e.preventDefault();
            changeCodeAtFocus("");
            focusPrevInput();
        } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            focusPrevInput();
        } else if (e.key === "ArrowRight") {
            e.preventDefault();
            focusNextInput();
        }
    };

    const handleOnPaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData
            .getData("text/plain")
            .slice(0, valueLength - activeInput)
            .split("");

        if (pastedData.some((char) => isNaN(char))) return;

        const otp = getOtpValue();
        pastedData.forEach((number, index) => {
            if (activeInput + index < valueLength) {
                otp[activeInput + index] = number;
            }
        });

        handleOtpChange(otp);
        focusInput(Math.min(activeInput + pastedData.length, valueLength - 1));
    };

    useEffect(() => {
        focusInput(activeInput);
    }, [activeInput]);

    return (
        <Box sx={{ display: "flex", gap: 1, justifyContent: "center", mb: 3 }}>
            {Array(valueLength)
                .fill("")
                .map((_, index) => (
                    <TextField
                        key={index}
                        value={getOtpValue()[index] || ""}
                        onChange={handleOnChange}
                        onFocus={() => handleInputFocus(index)}
                        onKeyDown={handleOnKeyDown}
                        onPaste={handleOnPaste}
                        inputRef={(ref) => (inputRefs.current[index] = ref)}
                        inputProps={{
                            maxLength: 1,
                            style: { textAlign: "center", fontSize: "20px", padding: "8px" },
                        }}
                        disabled={disabled}
                        sx={{
                            width: 50,
                            height: 50,
                            "& .MuiOutlinedInput-root": {
                                height: "100%",
                                "& input": {
                                    textAlign: "center",
                                    padding: 0,
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#33a9c9",
                                },
                            },
                        }}
                    />
                ))}
        </Box>
    );
};

const AuthModal = ({
    open,
    onClose,
    onLoginSuccess,
    restaurantId = "2c00d801-e515-4ceb-9ccb-1353d48c3de4",
    tableNo = "14",
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    // UI states
    const [uiState, setUiState] = useState({
        step: "details", // 'details' or 'otp'
        loading: false,
        error: "",
        success: "",
        otpSent: false,
        resendCooldown: 0,
    });

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        mobileNo: "",
        // emailId: "", // FUTURE: Uncomment when email functionality is needed
        otp: "",
    });

    const [errors, setErrors] = useState({});

    // Color scheme
    const colors = {
        primary: "#33a9c9",
        secondary: "#1976d2",
        accent: "#ff7a00",
        background: "#f8fafc",
        text: "#374151",
        error: "#d32f2f",
        success: "#2e7d32",
    };

    const handleClose = () => {
        setUiState({
            step: "details",
            loading: false,
            error: "",
            success: "",
            otpSent: false,
            resendCooldown: 0,
        });
        setFormData({
            name: "",
            mobileNo: "",
            // emailId: "", // FUTURE: Uncomment when email functionality is needed
            otp: "",
        });
        setErrors({});
        onClose();
    };

    const validateDetailsForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (!validateName(formData.name)) {
            newErrors.name = "Name must be at least 2 characters";
        }

        // FUTURE: Uncomment email validation when email functionality is needed
        // if (!formData.emailId) {
        //     newErrors.emailId = "Email is required";
        // } else if (!validateEmail(formData.emailId)) {
        //     newErrors.emailId = "Please enter a valid email address";
        // }

        if (!formData.mobileNo) {
            newErrors.mobileNo = "Mobile number is required";
        } else if (!validatePhone(formData.mobileNo)) {
            newErrors.mobileNo = "Please enter a valid 10-digit mobile number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateOTPForm = () => {
        const newErrors = {};

        if (!formData.otp) {
            newErrors.otp = "OTP is required";
        } else if (!validateOTP(formData.otp)) {
            newErrors.otp = "Please enter a valid 4-digit OTP";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const startResendCooldown = () => {
        setUiState((prev) => ({ ...prev, resendCooldown: 30 }));
        const interval = setInterval(() => {
            setUiState((prev) => {
                if (prev.resendCooldown <= 1) {
                    clearInterval(interval);
                    return { ...prev, resendCooldown: 0 };
                }
                return { ...prev, resendCooldown: prev.resendCooldown - 1 };
            });
        }, 1000);
    };

    const handleSendOTP = async (e) => {
        e.preventDefault();

        if (!validateDetailsForm()) return;

        setUiState((prev) => ({ ...prev, loading: true, error: "", success: "" }));

        try {
            const result = await AuthService.sendOTP({
                mobileNo: formData.mobileNo,
                name: formData.name,
                // emailId: formData.emailId, // FUTURE: Uncomment when email functionality is needed
            });

            if (result.success) {
                setUiState((prev) => ({
                    ...prev,
                    loading: false,
                    step: "otp",
                    otpSent: true,
                    success: result.message,
                }));
                startResendCooldown();
            } else {
                setUiState((prev) => ({
                    ...prev,
                    loading: false,
                    error: result.error,
                }));
            }
        } catch (err) {
            console.error("Send OTP Error:", err);
            setUiState((prev) => ({
                ...prev,
                loading: false,
                error: "An unexpected error occurred. Please try again.",
            }));
        }
    };

    const handleVerifyOTP = async (e) => {
        e.preventDefault();

        if (!validateOTPForm()) return;

        setUiState((prev) => ({ ...prev, loading: true, error: "", success: "" }));

        try {
            const result = await AuthService.verifyOTP({
                mobileNo: formData.mobileNo,
                otp: formData.otp,
                restaurantId: restaurantId,
                tableNo: tableNo,
                userName: formData.name,
            });

            if (result.success) {
                const user = {
                    ...result.data,
                    name: formData.name,
                    mobile: formData.mobileNo,
                    // email: formData.emailId, // FUTURE: Uncomment when email functionality is needed
                    restaurantId,
                    tableNo,
                };

                AuthService.storeUserData(user);

                setUiState((prev) => ({
                    ...prev,
                    loading: false,
                    success: "Login successful! Welcome to TurboTreats...",
                }));

                setTimeout(() => {
                    handleClose();
                    if (onLoginSuccess) {
                        onLoginSuccess(user);
                    }
                }, 1500);

            } else {
                setUiState((prev) => ({
                    ...prev,
                    loading: false,
                    error: result.error,
                }));
            }
        } catch (err) {
            console.error("Verify OTP Error:", err);
            setUiState((prev) => ({
                ...prev,
                loading: false,
                error: "An unexpected error occurred. Please try again.",
            }));
        }
    };

    const handleResendOTP = async () => {
        if (uiState.resendCooldown > 0) return;

        setUiState((prev) => ({ ...prev, loading: true, error: "", success: "" }));

        try {
            const result = await AuthService.sendOTP({
                mobileNo: formData.mobileNo,
                name: formData.name,
                // emailId: formData.emailId, // FUTURE: Uncomment when email functionality is needed
            });

            if (result.success) {
                setUiState((prev) => ({
                    ...prev,
                    loading: false,
                    success: "OTP resent successfully!",
                }));
                startResendCooldown();
            } else {
                setUiState((prev) => ({
                    ...prev,
                    loading: false,
                    error: result.error,
                }));
            }
        } catch (err) {
            setUiState((prev) => ({
                ...prev,
                loading: false,
                error: "Failed to resend OTP. Please try again.",
            }));
        }
    };

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors({ ...errors, [field]: "" });
        }
        // Clear success message when user types
        if (uiState.success) {
            setUiState((prev) => ({ ...prev, success: "" }));
        }
    };

    const handleOTPChange = (otpValue) => {
        setFormData({ ...formData, otp: otpValue });
        // Clear error when user starts typing
        if (errors.otp) {
            setErrors({ ...errors, otp: "" });
        }
        // Clear success message when user types
        if (uiState.success) {
            setUiState((prev) => ({ ...prev, success: "" }));
        }
    };

    const handleBackToDetails = () => {
        setUiState((prev) => ({
            ...prev,
            step: "details",
            error: "",
            success: "",
            otpSent: false,
            resendCooldown: 0,
        }));
        setFormData((prev) => ({ ...prev, otp: "" }));
        setErrors({});
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="xs"
            fullWidth
            fullScreen={isMobile}
            sx={{
                "& .MuiDialog-paper": {
                    borderRadius: isMobile ? 0 : 2,
                    overflow: "hidden",
                    backgroundColor: "#ffffff",
                    maxHeight: "90vh",
                    boxShadow: isMobile ? "none" : "0px 8px 24px rgba(0,0,0,0.15)",
                    margin: isMobile ? 0 : "16px",
                    width: "100%",
                    maxWidth: isMobile ? "100%" : "420px",
                },
            }}
        >
            <DialogContent sx={{ p: 0, position: "relative", overflow: "hidden" }}>
                {/* Close Button */}
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        zIndex: 1,
                        backgroundColor: "rgba(255,255,255,0.9)",
                        backdropFilter: "blur(10px)",
                        "&:hover": {
                            backgroundColor: "rgba(255,255,255,1)",
                            transform: "rotate(90deg)",
                        },
                        transition: "all 0.3s ease",
                        width: 32,
                        height: 32,
                    }}
                >
                    <CloseIcon sx={{ fontSize: 20 }} />
                </IconButton>

                {/* Header */}
                <Box
                    sx={{
                        backgroundColor: colors.primary,
                        p: 2,
                        textAlign: "center",
                        color: "white",
                        position: "relative",
                    }}
                >
                    {uiState.step === "otp" && (
                        <IconButton
                            onClick={handleBackToDetails}
                            sx={{
                                position: "absolute",
                                left: 8,
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "white",
                                "&:hover": {
                                    backgroundColor: "rgba(255,255,255,0.1)",
                                },
                            }}
                        >
                            <ArrowBack />
                        </IconButton>
                    )}

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 0.5,
                        }}
                    >
                        <Image
                            src="/assets/logo.svg"
                            alt="TurboTreats"
                            width={isMobile ? 80 : 80}
                            height={isMobile ? 50 : 50}
                        />
                        <Typography variant="h6" sx={{ fontWeight: 600, marginLeft: 1 }}>
                            {uiState.step === "details"
                                ? "Welcome to TurboTreats"
                                : "Verify OTP"}
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ opacity: 0.9 }}>
                        {uiState.step === "details"
                            ? ""
                            : `We've sent an OTP to +91 ${formData.mobileNo}`}
                    </Typography>
                </Box>

                {/* Form Content */}
                <Box sx={{ p: 3 }}>
                    {uiState.error && (
                        <Fade in={true}>
                            <Alert
                                severity="error"
                                sx={{
                                    mb: 2,
                                    borderRadius: 1,
                                    "& .MuiAlert-message": {
                                        fontSize: "0.875rem",
                                    },
                                }}
                            >
                                {uiState.error}
                            </Alert>
                        </Fade>
                    )}

                    {uiState.success && (
                        <Fade in={true}>
                            <Alert
                                severity="success"
                                sx={{
                                    mb: 2,
                                    borderRadius: 1,
                                    "& .MuiAlert-message": {
                                        fontSize: "0.875rem",
                                    },
                                }}
                            >
                                {uiState.success}
                            </Alert>
                        </Fade>
                    )}

                    {uiState.step === "details" ? (
                        // Details Form
                        <Box component="form" onSubmit={handleSendOTP}>
                            <TextField
                                fullWidth
                                label="Full Name"
                                variant="outlined"
                                size="small"
                                margin="normal"
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                error={!!errors.name}
                                helperText={errors.name}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Person sx={{ color: colors.primary, fontSize: 20 }} />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    mb: 2,
                                    "& .MuiOutlinedInput-root": {
                                        "&.Mui-focused fieldset": {
                                            borderColor: colors.primary,
                                        },
                                    },
                                    "& .MuiInputLabel-root.Mui-focused": {
                                        color: colors.primary,
                                    },
                                }}
                            />

                            {/* FUTURE: Uncomment email field when email functionality is needed */}
                            {/* <TextField
                                fullWidth
                                label="Email Address"
                                variant="outlined"
                                type="email"
                                margin="dense"
                                size="small"
                                value={formData.emailId}
                                onChange={(e) => handleInputChange("emailId", e.target.value)}
                                error={!!errors.emailId}
                                helperText={errors.emailId}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Email sx={{ color: colors.primary, fontSize: 20 }} />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    mb: 2,
                                    "& .MuiOutlinedInput-root": {
                                        "&.Mui-focused fieldset": {
                                            borderColor: colors.primary,
                                        },
                                    },
                                    "& .MuiInputLabel-root.Mui-focused": {
                                        color: colors.primary,
                                    },
                                }}
                            /> */}

                            <TextField
                                fullWidth
                                label="Mobile Number"
                                variant="outlined"
                                size="small"
                                margin="normal"
                                value={formData.mobileNo}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, ""); // Only allow digits
                                    if (value.length <= 10) {
                                        handleInputChange("mobileNo", value);
                                    }
                                }}
                                error={!!errors.mobileNo}
                                helperText={errors.mobileNo || "Enter 10-digit mobile number"}
                                inputProps={{
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Phone sx={{ color: colors.primary, fontSize: 20 }} />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    mb: 3,
                                    "& .MuiOutlinedInput-root": {
                                        "&.Mui-focused fieldset": {
                                            borderColor: colors.primary,
                                        },
                                    },
                                    "& .MuiInputLabel-root.Mui-focused": {
                                        color: colors.primary,
                                    },
                                }}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={uiState.loading}
                                sx={{
                                    backgroundColor: colors.primary,
                                    py: 1,
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    textTransform: "none",
                                    borderRadius: 1,
                                    boxShadow: "0 2px 8px rgba(51, 169, 201, 0.3)",
                                    "&:hover": {
                                        backgroundColor: colors.secondary,
                                        boxShadow: "0 4px 12px rgba(51, 169, 201, 0.4)",
                                    },
                                    "&:disabled": {
                                        backgroundColor: colors.primary,
                                        opacity: 0.7,
                                    },
                                }}
                            >
                                {uiState.loading ? (
                                    <CircularProgress size={24} color="inherit" />
                                ) : (
                                    "Send OTP"
                                )}
                            </Button>

                            {/* Table Info */}
                            <Box
                            // sx={{
                            //     mt: 2,
                            //     p: 2,
                            //     backgroundColor: colors.background,
                            //     borderRadius: 1,
                            //     border: `1px solid ${colors.primary}33`,
                            //     textAlign: "center",
                            // }}
                            >
                                {/* <Typography
                  variant="body2"
                  sx={{ color: colors.text, mb: 0.5 }}
                >
                  <strong>Restaurant ID:</strong> {restaurantId}
                </Typography>
                <Typography variant="body2" sx={{ color: colors.text }}>
                  <strong>Table Number:</strong> {tableNo}
                </Typography> */}
                            </Box>
                        </Box>
                    ) : (
                        // OTP Form
                        <Box component="form" onSubmit={handleVerifyOTP}>
                            <OTPInput
                                value={formData.otp}
                                onChange={handleOTPChange}
                                disabled={uiState.loading}
                            />

                            {errors.otp && (
                                <Typography
                                    variant="caption"
                                    color="error"
                                    sx={{ display: "block", textAlign: "center", mb: 2 }}
                                >
                                    {errors.otp}
                                </Typography>
                            )}

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={uiState.loading}
                                sx={{
                                    backgroundColor: colors.primary,
                                    py: 1,
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    textTransform: "none",
                                    borderRadius: 1,
                                    mb: 2,
                                    boxShadow: "0 2px 8px rgba(51, 169, 201, 0.3)",
                                    "&:hover": {
                                        backgroundColor: colors.secondary,
                                        boxShadow: "0 4px 12px rgba(51, 169, 201, 0.4)",
                                    },
                                    "&:disabled": {
                                        backgroundColor: colors.primary,
                                        opacity: 0.7,
                                    },
                                }}
                            >
                                {uiState.loading ? (
                                    <CircularProgress size={24} color="inherit" />
                                ) : (
                                    "Verify & Login"
                                )}
                            </Button>

                            {/* Resend OTP */}
                            <Box sx={{ textAlign: "center" }}>
                                {uiState.resendCooldown > 0 ? (
                                    <Typography variant="body2" sx={{ color: colors.text }}>
                                        Resend OTP in {uiState.resendCooldown}s
                                    </Typography>
                                ) : (
                                    <Button
                                        variant="text"
                                        onClick={handleResendOTP}
                                        disabled={uiState.loading}
                                        sx={{
                                            color: colors.primary,
                                            textTransform: "none",
                                            "&:hover": {
                                                backgroundColor: colors.background,
                                            },
                                        }}
                                    >
                                        Resend OTP
                                    </Button>
                                )}
                            </Box>
                        </Box>
                    )}
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default AuthModal;