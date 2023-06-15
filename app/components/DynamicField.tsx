"use client";
import React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Select,
  useTheme,
  TextField,
} from "../lib/mui";
import Input from "./Input";
import { motion } from "framer-motion";
import { tokens } from "../lib/theme";
import AddIcon from "@mui/icons-material/Add";
import { Label } from "@mui/icons-material";
import { CourseProps } from "../types/_types";
import {
  Control,
  FieldArrayWithId,
  UseFormRegister,
  UseFormRegisterReturn,
  useForm,
} from "react-hook-form";

interface DynamicFieldProps {
  fields : FieldArrayWithId<CourseProps, "prerequisites", "id">[]  
  registeredName: string
  register: UseFormRegister<CourseProps>
  onAppendHandler: () => void
  label: string
  btnText: string
}

export default function DynamicField({
fields,
registeredName,
onAppendHandler,
register,
label,
btnText
}: DynamicFieldProps) {
  const MotionBtn = motion(Button);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const onChangeHandler = (value:any) => {
   console.log(value)
  };

  return (
    <>

        <Grid container item rowSpacing={3} columnSpacing={{ xs: 0, md: 3 }}>
          {fields.map((field, index) => (
            <TextField
            key={index}
              id="prerequisites"
              label={label}
              variant="filled"
              type="text"
              fullWidth
              {...register(`${registeredName}.${index}.name` as unknown as any  ) }
            />
          ))}

          <Grid container item>
            <MotionBtn
              whileHover={{ scale: 1.1, backgroundColor: colors.rose[600] }}
              variant="contained"
              size="large"
              onClick={onAppendHandler}
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
        </Grid>
    </>
  );
}
