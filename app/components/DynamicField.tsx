"use client";
import React from "react";
import { Box, Button, Grid, Typography, Select, useTheme } from "../lib/mui";
import Input from "./Input";
import { motion } from "framer-motion";
import { tokens } from "../lib/theme";
import AddIcon from "@mui/icons-material/Add";
import { Label } from "@mui/icons-material";

interface DynamicFieldProps {
  label: string;
  btnText: string;
}

export default function DynamicField({ label, btnText }: DynamicFieldProps) {
  const MotionBtn = motion(Button);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [text, setText] = React.useState<string[]>([]);

  const addTextFieldHandler = () => {
    setText([...text, ""]);
  };
  return (
    <>
      {text.map((value, index) => (
        <Grid container item xs={12} md={6}>
          <Input id={`${index}`} label={label} type="text" />
        </Grid>
      ))}
      <Grid container item>
        <MotionBtn
          whileHover={{ scale: 1.1, backgroundColor: colors.rose[600] }}
          variant="contained"
          size="large"
          onClick={addTextFieldHandler}
          sx={{
            backgroundColor: colors.rose[500],
            fontWeight: "bold",
            textTransform: "none",
            fontSize: "18px",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          <AddIcon sx={{ fontSize: "28px", fontWeight: "bold" }} /> {btnText}
        </MotionBtn>
      </Grid>
    </>
  );
}
