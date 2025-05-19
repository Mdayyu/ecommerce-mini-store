import { Button } from "@mui/material";
import { SxProps } from "@mui/system";
import { ReactNode } from "react";

interface CustomButtonFalidProps {
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  size?: "small" | "medium" | "large";
  text?: ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  sx?: SxProps;
  children?: ReactNode;
}

export default function CustomButtonFalid({
  type = "submit",
  disabled = false,
  variant = "contained",
  color = "primary",
  size = "medium",
  text = "Lanjutkan",
  onClick,
  fullWidth = true,
  sx = {},
  children,
}: CustomButtonFalidProps) {
  return (
    <Button
      type={type}
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      onClick={onClick}
      fullWidth={fullWidth}
      sx={{
        backgroundColor: disabled ? "#A8A8BD" : "#8F85F3",
        color: "white",
        textTransform: "none",
        fontSize: "12px",
        "&.Mui-disabled": {
          backgroundColor: "#A8A8BD",
          color: "white",
        },
        ...(variant === "outlined" && {
          border: `1px solid ${disabled ? "#A8A8BD" : "#8F85F3"}`,
        }),
        "&:hover": {
          backgroundColor: "inherit",
          color: "#8F85F3",
        },
        ...sx,
      }}
    >
      {children || text}
    </Button>
  );
}
