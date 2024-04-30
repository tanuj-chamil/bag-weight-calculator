import { useState } from "react"
import "./App.css"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import { Typography } from "@mui/material"

function App() {
  const [w, setW] = useState(15)
  const [h, setH] = useState(12)
  const [l, setL] = useState(100)
  const [bagl, setBagL] = useState(114)
  const [gsm, setGSM] = useState(90)
  const [weight, setWeight] = useState(0)

  function calculateWeight() {
    const area = (2 * (w + h) * bagl) / 10000
    setWeight(Math.round(area * gsm * 100) / 100)
  }

  return (
    <div style={{ width: "100vw" }}>
      <div style={{ maxWidth: "400px", padding: "0 3rem", margin: "0 auto" }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1.25rem",
            fontWeight: "700",
            pt: "2rem",
            pb: "4rem",
            textTransform: "uppercase"
          }}
        >
          Bag Weight Calculator
        </Typography>
        <div
          style={{
            fontFamily: "Seven Segment",
            fontSize: "4rem",
            justifyContent: "center",
            display: "flex",
            alignContent: "bottom",
            paddingBottom: "3rem"
          }}
        >
          {weight}{" "}
          <span
            style={{
              fontFamily: "sans-serif",
              fontSize: "2rem",
              paddingLeft: "1rem"
            }}
          >
            g
          </span>
        </div>
        <div>
          <Grid container spacing={3}>
            {/* <Grid item xs={3}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Block Width
              </InputLabel>
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                required
                inputProps={{
                  step: 0.5
                }}
                id="blockWidth"
                name="blockwiedth"
                label="Block Width"
                fullWidth
                // size="large"
                autoComplete="off"
                variant="outlined"
                type="number"
                value={w}
                onChange={(event) => setW(parseInt(event.target.value))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                inputProps={{
                  step: 0.5
                }}
                id="blockHeight"
                name="blockHeight"
                label="Block Height"
                fullWidth
                // size="large"
                autoComplete="off"
                variant="outlined"
                type="number"
                value={h}
                onChange={(event) => setH(parseInt(event.target.value))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                inputProps={{
                  step: 0.5
                }}
                id="blockLength"
                name="blockLength"
                label="Block Length"
                fullWidth
                // size="large"
                autoComplete="off"
                variant="outlined"
                type="number"
                value={l}
                onChange={(event) => setL(parseInt(event.target.value))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                inputProps={{
                  step: 0.5
                }}
                id="bagLength"
                name="bagLength"
                label="Bag Length"
                fullWidth
                // size="large"
                autoComplete="off"
                variant="outlined"
                type="number"
                value={bagl}
                onChange={(event) => setBagL(parseInt(event.target.value))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                inputProps={{
                  step: 0.5
                }}
                id="gsm"
                name="gsm"
                label="GSM"
                fullWidth
                // size="large"
                autoComplete="off"
                variant="outlined"
                type="number"
                value={gsm}
                onChange={(event) => setGSM(parseInt(event.target.value))}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button variant="contained" onClick={calculateWeight}>
                Calculate
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default App
