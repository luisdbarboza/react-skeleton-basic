import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import {
  makeStyles,
  Typography,
  CssBaseline,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  app: {
    width: "100%",
    height: "100vh",
  },
  table: {
    minWidth: 650,
  },
}));

const createData = (id, nombre, puntos) => {
  return { id, nombre, puntos };
};

const App = () => {
  const classes = useStyles();

  const rows = [
    createData(1, "Venezuela", 256),
    createData(2, "Argentina", 241),
    createData(3, "Panama", 90),
    createData(4, "Brazil", 235),
  ];

  const [loading, setLoading] = useState(true);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    //Aja, sin backend no es necesario inicializar la data en el useEffect, pero lo hace mas realista jajaj
    setTimeout(() => {
      setRowData(rows);
      setLoading(false);
    }, 1000);
  }, [rowData]);

  const Loader = () => {
    return (
      <>
        <CssBaseline />
        <div className={classes.app}>
          <br />
          <Typography variant="h3">Cargando...</Typography>

          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">Nombre</TableCell>
                  <TableCell align="right">Puntos</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      <Skeleton />
                    </TableCell>
                    <TableCell align="right">
                      <Skeleton />
                    </TableCell>
                    <TableCell align="right">
                      <Skeleton />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </>
    );
  };
  

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <CssBaseline />
          <div className={classes.app}>
            <br />
            <Typography variant="h3">
              Paises latinoamericanos con mayor brecha entre clases
            </Typography>

            <TableContainer component={Paper}>
              <Table
                className={classes.table}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Nombre</TableCell>
                    <TableCell align="right">Puntos</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.nombre}</TableCell>
                      <TableCell align="right">{row.puntos}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      )}
    </>
  );
};

export default App;
