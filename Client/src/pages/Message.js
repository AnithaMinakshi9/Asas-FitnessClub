import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import axios from "axios";

export default function AlertDialog() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    message: ""
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const userObject = {
      name: values.name,
      email: values.email,
      message: values.message
    };
    axios
      .post(
        "https://fitness-management.herokuapp.com/message/formresult",
        userObject
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setOpen(false);
  };

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      margin: theme.spacing(2),
      width: 350
    }
  }));
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="default" onClick={handleClickOpen}>
        Message us here
      </Button>
      <Dialog
        open={open}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">{"Reach out to us here!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Send us a message by entering your email ID, and we'll get back to
            you
          </DialogContentText>
        </DialogContent>
        <form className={classes.container} noValidate>
          <TextField
            id="name"
            label="name"
            name="name"
            value={values.name}
            className={classes.textField}
            onChange={handleChange}
          />
          <TextField
            id="email"
            label="email"
            name="email"
            value={values.email}
            className={classes.textField}
            onChange={handleChange}
          />
          <TextField
            id="standard-textarea"
            label="message"
            name="message"
            value={values.message}
            className={classes.textField}
            onChange={handleChange}
            multiline
          />
        </form>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
