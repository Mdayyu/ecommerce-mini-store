import { Button } from "@mui/material";
import { SxProps, Theme } from "@mui/system";
import { ReactNode } from "react";

interface CustomButtonUnfalidProps {
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  size?: "small" | "medium" | "large";
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
  children?: ReactNode;
  useImportStyle?: SxProps<Theme>;
}

export default function CustomButtonUnfalid({
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
  useImportStyle, // jika ingin menggunakan full custom style dan mengabaikan style custom button
}: CustomButtonUnfalidProps) {
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
        ...(useImportStyle || {
          border: disabled ? "1px solid #A8A8BD" : "1px solid #8F85F3",
          backgroundColor: disabled ? "#A8A8BD" : "inherit",
          color: disabled ? "#7d7d8c" : "#8F85F3",
          fontSize: "12px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#D5D1FB",
            color: "#8F85F3",
          },
          "&.Mui-disabled": {
            backgroundColor: "#A8A8BD",
            color: "#7d7d8c",
          },
          ...(variant === "outlined" && {
            border: `1px solid ${disabled ? "#A8A8BD" : "#8F85F3"}`,
          }),
          ...sx,
        }),
      }}
    >
      {children || text}
    </Button>
  );
}
