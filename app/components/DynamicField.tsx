"use client";
import React from "react";
import { Box, Button, Grid, Typography, Select, useTheme } from "../lib/mui";
import Input from "./Input";
import { motion } from "framer-motion";
import { tokens } from "../lib/theme";
import AddIcon from "@mui/icons-material/Add";
import { Label } from "@mui/icons-material";
import { CourseProps } from "../types/_types";

interface DynamicFieldProps {
  label: string;
  btnText: string;
  name?: string
  value: string[]
  addTextFieldHandler: () => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, index:number) => void;
}

export default function DynamicField({ label, btnText, name,value , onChange, addTextFieldHandler}: DynamicFieldProps) {
  const MotionBtn = motion(Button);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);



  
 
  return (
    <>
      {value?.map((value, index) => (
        <Grid container item xs={12} md={6} key={index}>
          <Input id={`${index}`} label={label} type="text"  name={`${name }`} value={value} onChange={(e)=>onChange!(e,index)}/>
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
