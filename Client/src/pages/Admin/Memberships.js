import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Membership Data
function createData(id, date, name, address, paymentMethod, amount) {
  return { id, date, name, address, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "16 Nov, 2020",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    "Gold Monthly"
  ),
  createData(
    1,
    "16 Nov, 2020",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    "Regular Yearly"
  ),
  createData(
    2,
    "16 Nov, 2020",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    "Gold-Family Monthly"
  ),
  createData(
    3,
    "16 Nov, 2020",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    "Regular-Family Yearly"
  ),
  createData(
    4,
    "15 Nov, 2020",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    "Gold Yearly"
  )
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Member() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Client Memberships</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Adress</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Membership</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more clients
        </Link>
      </div>
    </React.Fragment>
  );
}
