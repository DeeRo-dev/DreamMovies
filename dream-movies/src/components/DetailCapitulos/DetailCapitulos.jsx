import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCapitulos } from "../../store/actions";
import NavBar from "../NavBar/NavBar";
import CardCapitulos from "../CardCapitulos/CardCapitulos.jsx";
import "./DetailCapitulos.css";

export default function DetailCapitulos() {
  const dispatch = useDispatch();
  const capitulos = useSelector((state) => state.allCapitulos.episodes);
  const { idSerie, idTemporada } = useParams();



  useEffect(() => {
    dispatch(getAllCapitulos(idSerie, idTemporada));
  }, [dispatch]);

  return (
    <div className="DetailCapitulos__Content">
      <NavBar />
      <Container fluid className="DetailCapitulos__Container">
        <div className="DetailCapitulos__ContentTitleTemp">
          <h3 className="DetailCapitulos__TitleTemp">Capitulos</h3>
        </div>
        <Container fluid className="DetailCapitulos__ContentCards">
          {capitulos?.map((i) => {
            return (
              <Link
                to={`/movie/${idSerie}/${i.season_number}/${i.episode_number}`}
              >
                <div key={i.id} className="DetailCapitulos__Cards">
                  <CardCapitulos
                    img={i.still_path}
                    estreno={i.air_date}
                    temp={i.name}
                  />
                </div>
              </Link>
            );
          })}
        </Container>
      </Container>
    </div>
  );
}
