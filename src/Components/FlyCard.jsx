import React from 'react';

//BOOTSTRAP-UI
import { Card, ListGroupItem, ListGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import FlightRoundedIcon from '@material-ui/icons/FlightRounded';

// SASS
import '../App.scss';
import '../Components/FlyCard.scss'

// reciving flyData props
function FlyCard(props) {

    /* IF LOADING COMPLETE AND THERE ARE SOME DATA IN FLYDATA PROP */
    if(props.flyData.states !== null) {
        return (
            <div>
                <h2 className="card-list-title">Nad tvojou hlavou práve letí</h2>
                <div className="card-list">
                    {
                        props.flyData.states.map((flight, index) => {
                        //console.log(index)
                        return(
                            <Card key={`${index}`} style={{ width: '20rem' }}>
                            <ul key={`${index}`}>
                            <Card.Body className="flight">
                                <Card.Title>
                                <div>
                                    <p className="card-subtitle">číslo letu</p>
                                    <h2 className="card-title"><FlightRoundedIcon style={{ fontSize: 40 }} />{flight[1]}</h2>
                                </div>
                                </Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                <li key={'a' + index} >Pôvod: {flight[2]}</li>
                                </ListGroupItem>
                                <ListGroupItem>
                                <li key={'b' + index} >Zemepisná dĺžka: {flight[5]}</li>
                                </ListGroupItem>
                                <ListGroupItem>
                                <li key={'c' + index} >Zemepisná šírka: {flight[6]}</li>
                                </ListGroupItem>
                                <ListGroupItem>
                                <li key={'d' + index} >Rýchlosť km/h: {(flight[9]*3.6).toFixed(2)}</li>
                                </ListGroupItem>
                                <ListGroupItem>
                                <li key={'e' + index} >Klesanie / Stúpanie: {flight[11]}</li>
                                </ListGroupItem>
                            </ListGroup>
                                <Button 
                                    className="card-button"
                                    variant="contained"
                                    color="secondary" 
                                    style={{
                                        backgroundColor: "#b91327",
                                        padding: "5px 30px",
                                    }}
                                    href={`https://flightaware.com/live/flight/${flight[1]}`}
                                    rel="noreferrer"  
                                    target="_blank" >Viac
                                </Button>
                            </ul>
                            </Card>
                        )
                        }
                        )
                    }
                </div>
            </div>
        )
    }

    /* IF THERE IS NO DATA IN FLYDATA PROPS - NO DATA LOADED */
    else {
        return (
            <div className="card-list no-data">
                <ErrorOutlineIcon style={{ fontSize: 40 }} />
                <h2>Žiadne lety neboli nájdené!</h2>
            </div>
        )
    }
}
export default FlyCard
