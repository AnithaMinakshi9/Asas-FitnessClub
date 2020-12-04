import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  Content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(15, 0, 6)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main className="main_page">
        <div className={classes.Content}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Meet the Team
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              We believe the quality of our health determines the quality of our
              lives—and nothing is more important than that. We believe fitness
              is about strengthening and conditioning your body and mind so you
              can get out there, explore the world, seek new adventures and be
              the person you were meant to be.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Trainer
                    </Typography>
                    <Typography>
                      Trainer description
                      <br />
                      We strive to help you become a better you!
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

/*  import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../Cards/cards.css";

const useStyles = makeStyles({
  root: {
    marginLeft: 40,
    maxWidth: 260,
    background: "linear-gradient(to right, #e4b639d2,#ffa)"
  },
  pos: {
    marginBottom: 15
  }
});

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <>
      <div className="main">
        <h1 className="tra">OUR TRAINERS</h1>
        <div className="card1">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.pos} color="textSecondary">
                Trainer1
                
              </Typography>
              <Typography variant="body2" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tincidunt semper mauris, et ullamcorper dui mattis in. Nullam
                egestas ligula ipsum, ut vulputate mauris luctus sed. Curabitur
                congue ultricies elit, eu convallis magna sagittis in. Nam
                vehicula felis non erat ornare faucibus a vel lectus. Sed
                rhoncus quam lorem. s, sed pulvinar lacus.
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="card2">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.pos} color="textSecondary">
                Trainer2
              </Typography>
              <Typography variant="body2" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tincidunt semper mauris, et ullamcorper dui mattis in. Nullam
                egestas ligula ipsum, ut vulputate mauris luctus sed. Curabitur
                congue ultricies elit, eu convallis magna sagittis in. Nam
                vehicula felis non erat ornare faucibus a vel lectus. Sed
                rhoncus quam lorem. s, sed pulvinar lacus.
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="card3">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.pos} color="textSecondary">
                Trainer2
              </Typography>
              <Typography variant="body2" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tincidunt semper mauris, et ullamcorper dui mattis in. Nullam
                egestas ligula ipsum, ut vulputate mauris luctus sed. Curabitur
                congue ultricies elit, eu convallis magna sagittis in. Nam
                vehicula felis non erat ornare faucibus a vel lectus. Sed
                rhoncus quam lorem. s, sed pulvinar lacus.
              </Typography>
            </CardContent>
          </Card>
        </div>

        <h1 className="nut">OUR NUTRITIONISTS</h1>
        <div className="card4">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.pos} color="textSecondary">
                Nutritionist1
              </Typography>
              <Typography variant="body2" component="p">
                Curabitur congue ultricies elit, eu convallis magna sagittis in.
                Nam vehicula felis non erat ornare faucibus a vel lectus. Sed
                rhoncus quam lorem. s, sed pulvinar lacus.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="card6">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.pos} color="textSecondary">
                Nutritionist2
              </Typography>
              <Typography variant="body2" component="p">
                Nullam egestas ligula ipsum, ut vulputate mauris luctus sed.
                Curabitur congue convallis magna sagittis in. Nam vehicula felis
                non erat ornare faucibus a vel lectus.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
  */
