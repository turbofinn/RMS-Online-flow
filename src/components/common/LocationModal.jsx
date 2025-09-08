import { useEffect, useRef, useReducer, useCallback } from "react";
import {
    Dialog,
    DialogContent,
    TextField,
    Button,
    IconButton,
    Box,
    List,
    ListItem,
    ListItemText,
    Paper,
    CircularProgress,
    Typography,
    Slide,
    InputAdornment,
} from "@mui/material";
import {
    Close,
    LocationOn,
    Home,
    Business,
    Place,
    Check
} from "@mui/icons-material";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// State management with useReducer 
const initialAddressState = {
    houseNo: "",
    streetName: "",
    city: "",
    landmark: ""
};

const initialUIState = {
    showSuggestions: false,
    loadingSuggestions: false,
    focusedField: null
};

const initialGoogleState = {
    autocompleteService: null,
    citySuggestions: []
};

// Reducers for different state groups
const addressReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return { ...state, [action.field]: action.value };
        case 'RESET':
            return initialAddressState;
        default:
            return state;
    }
};

const uiReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, loadingSuggestions: action.payload };
        case 'SET_SUGGESTIONS_VISIBILITY':
            return { ...state, showSuggestions: action.payload };
        case 'SET_FOCUSED_FIELD':
            return { ...state, focusedField: action.payload };
        case 'RESET_UI':
            return initialUIState;
        default:
            return state;
    }
};

const googleReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SERVICE':
            return { ...state, autocompleteService: action.payload };
        case 'SET_SUGGESTIONS':
            return { ...state, citySuggestions: action.payload };
        case 'RESET_SUGGESTIONS':
            return { ...state, citySuggestions: [] };
        default:
            return state;
    }
};

const LocationModal = ({
    open,
    onClose,
    onLocationSave,
    googleMapsApiKey
}) => {
    // Grouped state using useReducer
    const [addressState, dispatchAddress] = useReducer(addressReducer, initialAddressState);
    const [uiState, dispatchUI] = useReducer(uiReducer, initialUIState);
    const [googleState, dispatchGoogle] = useReducer(googleReducer, initialGoogleState);

    // Refs
    const cityInputRef = useRef(null);
    const suggestionsTimeoutRef = useRef(null);
    const modalRef = useRef(null);

    // Memoized callbacks for better performance
    const initializeGoogleService = useCallback(() => {
        if (window.google && window.google.maps && window.google.maps.places) {
            const service = new window.google.maps.places.AutocompleteService();
            dispatchGoogle({ type: 'SET_SERVICE', payload: service });
        } else {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places&callback=initAutocomplete`;
            script.async = true;
            script.defer = true;

            window.initAutocomplete = () => {
                if (window.google && window.google.maps && window.google.maps.places) {
                    const service = new window.google.maps.places.AutocompleteService();
                    dispatchGoogle({ type: 'SET_SERVICE', payload: service });
                }
            };

            document.head.appendChild(script);
        }
    }, [googleMapsApiKey]);

    const fetchCitySuggestions = useCallback((input) => {
        if (!input || input.length < 2 || !googleState.autocompleteService) {
            dispatchGoogle({ type: 'RESET_SUGGESTIONS' });
            dispatchUI({ type: 'SET_SUGGESTIONS_VISIBILITY', payload: false });
            return;
        }

        dispatchUI({ type: 'SET_LOADING', payload: true });

        const request = {
            input: input,
            types: ['(cities)'],
            componentRestrictions: { country: 'in' }
        };

        googleState.autocompleteService.getPlacePredictions(request, (predictions, status) => {
            dispatchUI({ type: 'SET_LOADING', payload: false });

            if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
                dispatchGoogle({ type: 'SET_SUGGESTIONS', payload: predictions.slice(0, 5) });
                dispatchUI({ type: 'SET_SUGGESTIONS_VISIBILITY', payload: true });
            } else {
                dispatchGoogle({ type: 'RESET_SUGGESTIONS' });
                dispatchUI({ type: 'SET_SUGGESTIONS_VISIBILITY', payload: false });
            }
        });
    }, [googleState.autocompleteService]);

    const handleCityChange = useCallback((e) => {
        const value = e.target.value;
        dispatchAddress({ type: 'UPDATE_FIELD', field: 'city', value });

        if (suggestionsTimeoutRef.current) {
            clearTimeout(suggestionsTimeoutRef.current);
        }

        suggestionsTimeoutRef.current = setTimeout(() => {
            fetchCitySuggestions(value);
        }, 200);
    }, [fetchCitySuggestions]);

    const handleCitySelect = useCallback((suggestion) => {
        dispatchAddress({ type: 'UPDATE_FIELD', field: 'city', value: suggestion.description });
        dispatchUI({ type: 'SET_SUGGESTIONS_VISIBILITY', payload: false });
        dispatchGoogle({ type: 'RESET_SUGGESTIONS' });
    }, []);

    const handleFieldChange = useCallback((field, value) => {
        dispatchAddress({ type: 'UPDATE_FIELD', field, value });
    }, []);

    const handleFieldFocus = useCallback((field) => {
        dispatchUI({ type: 'SET_FOCUSED_FIELD', payload: field });
        if (field === 'city' && googleState.citySuggestions.length > 0) {
            dispatchUI({ type: 'SET_SUGGESTIONS_VISIBILITY', payload: true });
        }
    }, [googleState.citySuggestions.length]);

    const handleFieldBlur = useCallback(() => {
        dispatchUI({ type: 'SET_FOCUSED_FIELD', payload: null });
    }, []);

    const handleSubmitManualAddress = useCallback(() => {
        const { houseNo, streetName, city, landmark } = addressState;

        if (!city.trim()) {
            return;
        }

        const addressParts = [houseNo, streetName, city, landmark].filter(part => part.trim());
        const formattedAddress = addressParts.join(", ");

        onLocationSave(formattedAddress);
        handleClose();
    }, [addressState, onLocationSave]);

    const handleClose = useCallback(() => {
        onClose();
        dispatchUI({ type: 'RESET_UI' });
        dispatchGoogle({ type: 'RESET_SUGGESTIONS' });
        dispatchAddress({ type: 'RESET' });

        if (suggestionsTimeoutRef.current) {
            clearTimeout(suggestionsTimeoutRef.current);
        }
    }, [onClose]);

    // Initialize Google Service
    useEffect(() => {
        if (open) {
            initializeGoogleService();
        }
    }, [open, initializeGoogleService]);

    // Handle click outside modal
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                dispatchUI({ type: 'SET_SUGGESTIONS_VISIBILITY', payload: false });
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    // Computed values
    const isFormValid = addressState.city.trim().length > 0;

    // Common field configuration to reduce repetition
    const fieldConfigs = {
        houseNo: {
            label: "House / Flat Number",
            placeholder: "Enter house/flat number",
            icon: Home,
            required: false
        },
        streetName: {
            label: "Street Name",
            placeholder: "Enter street name",
            icon: Business,
            required: false
        },
        city: {
            label: "City",
            placeholder: "Enter your city",
            icon: Place,
            required: true
        },
        landmark: {
            label: "Landmark",
            placeholder: "Enter nearby landmark",
            icon: LocationOn,
            required: false,
            optional: true
        }
    };

    const renderTextField = (fieldKey, config) => {
        const IconComponent = config.icon;
        const isSpecialCity = fieldKey === 'city';

        return (
            <Box sx={{ position: isSpecialCity ? "relative" : "static" }} key={fieldKey}>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    fontSize: "12px",
                    color: "#475569",
                    mb: 0.75,
                    ml: 0.25
                }}>
                    {config.label}
                    {config.required && <span style={{ color: "#ef4444", fontSize: "12px" }}> *</span>}
                    {config.optional && <span style={{ color: "#94a3b8", fontSize: "11px" }}> (Optional)</span>}
                </Typography>
                <TextField
                    ref={isSpecialCity ? cityInputRef : null}
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={addressState[fieldKey]}
                    onChange={isSpecialCity ? handleCityChange : (e) => handleFieldChange(fieldKey, e.target.value)}
                    onFocus={() => handleFieldFocus(fieldKey)}
                    onBlur={handleFieldBlur}
                    placeholder={config.placeholder}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconComponent sx={{
                                    color: uiState.focusedField === fieldKey ? "#33a9c9" : "#94a3b8",
                                    fontSize: "16px"
                                }} />
                            </InputAdornment>
                        ),
                        ...(isSpecialCity && uiState.loadingSuggestions && {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <CircularProgress size={18} sx={{ color: "#33a9c9" }} />
                                </InputAdornment>
                            )
                        })
                    }}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "10px",
                            backgroundColor: "#fafbfc",
                            border: "1.5px solid transparent",
                            transition: "all 0.25s ease",
                            "&:hover": {
                                backgroundColor: "#f1fafc",
                                border: "1.5px solid rgba(51, 169, 201, 0.3)"
                            },
                            "&.Mui-focused": {
                                backgroundColor: "#ffffff",
                                border: "1.5px solid #33a9c9",
                                boxShadow: "0 0 0 3px rgba(51, 169, 201, 0.12)"
                            },
                            "& fieldset": { border: "none" }
                        },
                        "& .MuiInputBase-input": {
                            fontFamily: "Poppins",
                            fontSize: "13px",
                            py: 1.25,
                            "&::placeholder": {
                                color: "#94a3b8",
                                opacity: 1
                            }
                        }
                    }}
                />

                {/* City Suggestions - only for city field */}
                {isSpecialCity && uiState.showSuggestions && googleState.citySuggestions.length > 0 && (
                    <Paper
                        elevation={3}
                        sx={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            right: 0,
                            zIndex: 20,
                            mt: 0.5,
                            borderRadius: "10px",
                            border: "1px solid rgba(51, 169, 201, 0.2)",
                            boxShadow: "0 8px 25px -5px rgba(51, 169, 201, 0.25)",
                            backgroundColor: "#ffffff",
                            maxHeight: "250px",
                            overflowY: "auto",
                        }}
                    >

                        <List sx={{ py: 0.25 }}>
                            {googleState.citySuggestions.map((suggestion, index) => (
                                <ListItem
                                    key={suggestion.place_id || index}
                                    button
                                    onClick={() => handleCitySelect(suggestion)}
                                    sx={{
                                        py: 1,
                                        px: 1.5,
                                        margin: "2px 4px",
                                        borderRadius: "6px",
                                        transition: "all 0.2s ease",
                                        cursor: "pointer",
                                        "&:hover": {
                                            backgroundColor: "rgba(51, 169, 201, 0.08)",
                                            transform: "translateX(2px)"
                                        }
                                    }}
                                >
                                    <Place sx={{
                                        color: "#33a9c9",
                                        fontSize: "15px",
                                        mr: 1.25,
                                        flexShrink: 0
                                    }} />
                                    <ListItemText
                                        primary={suggestion.description}
                                        primaryTypographyProps={{
                                            fontSize: "12px",
                                            fontFamily: "Poppins",
                                            fontWeight: 500,
                                            color: "#334155"
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                )}
            </Box>
        );
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            keepMounted
            maxWidth={false}
            PaperProps={{
                sx: {
                    borderRadius: "16px",
                    width: "90vw",
                    maxWidth: "400px",
                    minHeight: "auto",
                    boxShadow: "0 20px 40px -12px rgba(51, 169, 201, 0.35)",
                    overflow: "visible",
                    background: "linear-gradient(145deg, #ffffff 0%, #f0fdff 100%)",
                    border: "1px solid rgba(51, 169, 201, 0.08)",
                }
            }}
        >
            <Box ref={modalRef}>
                {/* Compact Header */}
                <Box sx={{
                    px: 2.5,
                    pt: 2.5,
                    pb: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <Box sx={{
                            p: 0.75,
                            borderRadius: "10px",
                            background: "linear-gradient(135deg, #33a9c9 0%, #2596be 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <LocationOn sx={{ color: "white", fontSize: "16px" }} />
                        </Box>
                        <Typography sx={{
                            fontFamily: "Poppins",
                            fontWeight: 600,
                            fontSize: "16px",
                            color: "#1e293b",
                            letterSpacing: "-0.015em"
                        }}>
                            Add Address
                        </Typography>
                    </Box>

                    <IconButton
                        onClick={handleClose}
                        sx={{
                            p: 0.75,
                            borderRadius: "8px",
                            backgroundColor: "rgba(51, 169, 201, 0.08)",
                            color: "#64748b",
                            "&:hover": {
                                backgroundColor: "rgba(51, 169, 201, 0.15)",
                                color: "#33a9c9"
                            }
                        }}
                    >
                        <Close sx={{ fontSize: "16px" }} />
                    </IconButton>
                </Box>

                <DialogContent sx={{ px: 2.5, py: 0, pb: 1.5 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8 }}>
                        {Object.entries(fieldConfigs).map(([fieldKey, config]) =>
                            renderTextField(fieldKey, config)
                        )}
                    </Box>
                </DialogContent>

                {/* Compact Footer */}
                <Box sx={{ px: 2.5, pb: 2.5, pt: 1 }}>
                    <Box sx={{ display: "flex", gap: 1.5 }}>
                        <Button
                            onClick={handleClose}
                            sx={{
                                flex: 1,
                                py: 1.25,
                                px: 2.5,
                                borderRadius: "10px",
                                fontFamily: "Poppins",
                                fontWeight: 500,
                                fontSize: "13px",
                                textTransform: "none",
                                color: "#64748b",
                                backgroundColor: "#f8fafc",
                                border: "1px solid #e2e8f0",
                                transition: "all 0.2s ease",
                                "&:hover": {
                                    backgroundColor: "#f1f5f9",
                                    borderColor: "#cbd5e1",
                                    color: "#475569"
                                }
                            }}
                        >
                            Cancel
                        </Button>

                        <Button
                            onClick={handleSubmitManualAddress}
                            disabled={!isFormValid}
                            sx={{
                                flex: 2,
                                py: 1.25,
                                px: 2.5,
                                borderRadius: "10px",
                                fontFamily: "Poppins",
                                fontWeight: 600,
                                fontSize: "13px",
                                textTransform: "none",
                                color: "white",
                                background: isFormValid
                                    ? "linear-gradient(135deg, #33a9c9 0%, #2596be 100%)"
                                    : "#e2e8f0",
                                boxShadow: isFormValid
                                    ? "0 4px 14px rgba(51, 169, 201, 0.35)"
                                    : "none",
                                transition: "all 0.2s ease",
                                "&:hover": {
                                    ...(isFormValid && {
                                        background: "linear-gradient(135deg, #2596be 0%, #1e7a96 100%)",
                                        boxShadow: "0 6px 18px rgba(51, 169, 201, 0.4)",
                                        transform: "translateY(-1px)"
                                    })
                                },
                                "&:disabled": {
                                    color: "#94a3b8"
                                }
                            }}
                        >
                            {isFormValid && <Check sx={{ fontSize: "15px", mr: 1 }} />}
                            Save Address
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Dialog>
    );
};

export default LocationModal;