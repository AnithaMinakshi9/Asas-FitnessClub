import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recently Joined Clients</Title>
      <Typography component="p" variant="h5">
        Client 1
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2020
      </Typography>
      <Typography component="p" variant="h5">
        Client 2
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 03 February, 2020
      </Typography>
      <Typography component="p" variant="h5">
        Client 3
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 27 April, 2020
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
