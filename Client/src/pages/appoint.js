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
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = useState({
    date: "",
    time: "",
    email: ""
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
      date: values.date,
      time: values.time,
      email: values.email
    };
    axios
      .post(
        "https://fitness-management.herokuapp.com/schedule/formresult",
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
      width: 280
    }
  }));
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="default" onClick={handleClickOpen}>
        Book an Appointment
      </Button>
      <Dialog
        open={open}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">{"Book An Appointment"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Choose a date and time according to your convenience!
          </DialogContentText>
        </DialogContent>
        <form className={classes.container} noValidate>
          <TextField
            id="datetime"
            label="Next session"
            type="date"
            value={values.date}
            className={classes.textField}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id="time"
            label="Time"
            type="time"
            defaultValue="07:30"
            value={values.time}
            className={classes.textField}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              step: 300 // 5 min
            }}
          />
          <TextField
            id="email"
            label="email"
            name="email"
            value={values.email}
            className={classes.textField}
            onChange={handleChange}
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
