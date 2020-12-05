import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Member() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Your Memberships</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Plan</TableCell>
            <TableCell>Validity</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Membership</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Premium-Yearly</TableCell>
            <TableCell>Till 09-03-2021</TableCell>
            <TableCell>Online Payment</TableCell>
            <TableCell align="right">Valid</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Premium-Monthly</TableCell>
            <TableCell>Till 17-12-2020</TableCell>
            <TableCell>Online payment</TableCell>
            <TableCell align="right">Validity ending soon</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
