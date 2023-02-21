import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CustomInput from "./CustomInput";
import CustomTextArea from "./CustomTextArea";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

import styles from "./EmailForm.module.css";
import { faEnvelope, faPen } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";

const formSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("A Valid Email is required"),
  name: Yup.string()
    .min(10, "Too Short!")
    .max(40, "Too Long!")
    .required("Must have a name"),
  message: Yup.string().min(20, "Too Short!").required("Write me a message :)"),
});

const EmailForm = ({ close }) => {
  const theme = useTheme();
  const [sentStatus, setSentStatus] = useState(false);
  return (
    <Box
      className={styles.container}
      sx={{ background: theme.palette.primary.light }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          color: theme.palette.primary.main,
          fontFamily: "Playfair Display",
          fontWeight: "bold",
          borderBottom: "1px solid",
          marginBottom: "1rem",
          borderColor: theme.palette.primary.main,
        }}
      >
        Get In Touch
      </Typography>
      <Formik
        initialValues={{ email: "", subject: "", message: "" }}
        validationSchema={formSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            setSentStatus(true);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.inputs}>
              <Field
                component={CustomInput}
                type="email"
                name="email"
                placeholder="Email"
                icon={faEnvelope}
              />
            </div>

            <div className={styles.inputs}>
              <Field
                component={CustomInput}
                type="text"
                name="name"
                placeholder="Name"
                icon={faPen}
              />
            </div>

            <div className={styles.inputs}>
              <Field component={CustomTextArea} type="text" name="message" />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className={styles.button}
              sx={{
                background: theme.palette.primary.main,
                color: theme.palette.secondary.light,
                border: "1px solid",
                gap: "1rem",
                "&:hover": {
                  color: theme.palette.primary.main,
                  background: "white",
                },
              }}
            >
              Send Mail
              <SendIcon />
              {/* {sentStatus ? "Sending..." : "Send Mail"} */}
              {/* {sentStatus ? <CheckIcon close={close} /> : <SendIcon />} */}
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default EmailForm;

function CheckIcon({ close }) {
  return (
    <motion.div
      animate={{
        borderColor: "white",
        backgroundColor: "blue",
      }}
      transition={{ duration: 5 }}
      onAnimationComplete={close}
      style={{
        borderRadius: "50%",
        height: 30,
        border: "1px solid blue",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width="30px"
        height="30px"
        stroke="white"
        strokeWidth={3}
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 0.5,
            type: "tween",
            ease: "easeOut",
            delay: 0.5,
          }}
          d="M5 13l4 4L19 7"
        />
      </svg>
    </motion.div>
  );
}
