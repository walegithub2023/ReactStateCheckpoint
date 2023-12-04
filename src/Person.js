import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//import Container, Row, col and PlayersList
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Transform the App.js into a class-based component.
class Person extends Component {
    constructor(props) {
    super(props);
    this.state = {
    person: {
        fullName: 'Mikel Arteta',
        bio: 'Mikel Arteta Amatriain (born 26 March 1982) is a Spanish professional football manager and former player who is the manager of Premier League club Arsenal. Arteta is known for his tactical innovation and his comprehensive football philosophy. Born and raised in San Sebastián, Arteta began his senior club career at Barcelona in 1999, but limited playing time led to a loan to Paris Saint-Germain in 2001, aged 18. After winning the UEFA Intertoto Cup during his second season in France, he then signed for Scottish club Rangers for a fee of £6 million. During his debut season, Arteta won the Scottish Premier League and Scottish League Cup double, where he notably scored a 93rd-minute penalty against Dunfermline Athletic which secured the league title over rivals Celtic on goal difference. After a brief return to hometown club Real Sociedad, Arteta joined English club Everton on loan in 2005; he later signed permanently. There, Arteta grew into a pivotal and influential player, winning Everton Player of the Season twice. Signing for Arsenal in 2011 for a reported fee of £10 million, Arteta won two FA Cups and served as captain from 2014 until his retirement in 2016.',
        imgSrc: 'images/photo2.jpg',
        profession: 'Football Coach - Arsenal FC',
    },
        show: false,
        intervalId: null,
        timeSinceMount: 0,
    };
}
//Create a field that shows the time interval since the last component was mounted using the component lifecycle. use the setInterval method.
    componentDidMount() {
        const intervalId = setInterval(() => {
        this.setState((prevState) => ({
            timeSinceMount: prevState.timeSinceMount + 1,
        }));
        }, 1000);

        this.setState({ intervalId });
    }

    //clear interval
    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    //create the toggleshow function to set state
    toggleShow = () => {
        this.setState((prevState) => ({
        show: !prevState.show,
        }));
    };

    render() {
        const { person, show, timeSinceMount } = this.state;

        return (
        <div>
           {/* call the toggleshow function when the button is clicked */}
            <div style={{marginBottom:"10px"}}><button style={{border:"0px", width:"50%", padding:"20px", borderRadius:"2px", textTransform:"uppercase"}} id="toggleProfile" onClick={this.toggleShow}>Click to Toggle Profile</button></div>
            {show && (

                    <Container id='div1a'>
                        <Row id='div1aRow2'>
                            <Col md={6}>
                                <p style={{textAlign:"justify", padding:"20px"}}><img style={{width:"80%", height:"500px", borderRadius:"2px"}} src={person.imgSrc} alt={person.fullName}/></p>
                            </Col>
                            <Col md={5}>
                                <h3 style={{paddingTop:"10px"}} id='fullName'>{person.fullName}</h3>
                                <h3 id='fullName' style={{fontFamily:"arial"}}>{person.profession}</h3>
                                <p id='bio' style={{textAlign:"justify", padding:"20px"}}>{person.bio}</p>
                            </Col>
                        </Row>
                    </Container>
            )}
            <p id='timeSinceMount'>Time since mount: {timeSinceMount} seconds</p>
        </div>
        );
    }
}

export default Person;