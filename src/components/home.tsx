
import React, { Component, createRef, RefObject } from "react";
import { Fade } from "react-awesome-reveal";
import { Col, Container, Nav, Navbar, Row,  Modal, Button } from "react-bootstrap";
import Footer from "./footer";
import { JumbotronLogo } from "./jumbotron-logo";
import ReactMarkdown from 'react-markdown/with-html'
import { France, Germany, UnitedKingdom, UnitedStates } from 'react-flat-flags';

import aboutMe from "../markdown/about_me.md";
import learnMore from "../markdown/learn_more.md";
import testimonials from "../markdown/testimonials.md";

interface HomeProps {
    files: Map<string, string>;
    show: boolean;
}

export class Home extends Component<{}, HomeProps> {

    private servicesRef = createRef<HTMLDivElement>();
    private aboutMeRef = createRef<HTMLDivElement>();
    private testimonialsRef = createRef<HTMLDivElement>();
    scrollToContent: any;

    constructor(props: HomeProps) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
    
        this.state = { 
            files: new Map([]),
            show: false,
        }
    }
    
    componentWillMount() {
        let map = new Map();
        fetch(aboutMe).then((res) => res.text()).then((md) => {
            map.set('about', md);
            this.setState({ files: map })
        });
        fetch(learnMore).then((res) => res.text()).then((md) => {
            map.set('learnMore', md);
            this.setState({ files: map })
        });
        fetch(testimonials).then((res) => res.text()).then((md) => {
            map.set('testimonials', md);
            this.setState({ files: map })
        });
    }

    scrollToRef = (ref: RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    }

    handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

    render() {
        let markdown = this.state;

        return (
            <>
                <header>
                    <Navbar sticky="top" variant="light" bg="custom">
                        <Nav className="mx-auto">
                            <Nav.Link onClick={() => {this.scrollToRef(this.aboutMeRef)}}>ABOUT ME</Nav.Link>
                            <Nav.Link onClick={() => {this.scrollToRef(this.servicesRef)}}>SERVICES</Nav.Link>
                            <Nav.Link onClick={() => {this.scrollToRef(this.testimonialsRef)}}>TESTIMONIALS</Nav.Link>
                            <Nav.Link href="/contact-me">CONTACT ME</Nav.Link>
                        </Nav> 
                    </Navbar>
                </header>
                    <main role="main">
                        <Fade triggerOnce>
                            <JumbotronLogo />
                        </Fade>
                        <Fade cascade triggerOnce fraction={0.25} duration={150}>
                        <div className="col-md-4">
                                <div className="card" ref={this.aboutMeRef}>
                                    <div className="card-body">
                                        <h4 className="card-title text-center">About Me</h4>
                                        <ReactMarkdown source={markdown.files.get('about')} skipHtml={true} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card" ref={this.servicesRef}>
                                    <div>
                                        <h4 className="card-main-title text-center">Services</h4>
                                        <Container fluid className="text-center">
                                            <Row>
                                                <Col>
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h4 className="card-title text-center"><Germany size={30} /> + <France size={30} /> &gt; <UnitedKingdom size={30} /> Translation</h4>
                                                            <p> 
                                                            I offer a range of linguistic solutions and specialise in translation for various industries. My high attention to detail means that your texts will be translated to an excellent standard. 
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col >
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h4 className="card-title text-center">Proofreading</h4>
                                                            <p> 
                                                            It’s quite common for non-native English speakers to translate documents into English. Unfortunately, this is when mistakes are made. I can proofread your text and ensure that it is completely accurate. 
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h4 className="card-title text-center">MT Post-Editing</h4>
                                                            <p> 
                                                            Machine translation has drastically improved over the last few years thanks to AI, but certain texts will still require a native English speaker to check for and correct any errors.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h4 className="card-title text-center"><UnitedStates size={30} /> into <UnitedKingdom size={30} /> English</h4>
                                                            <p> 
                                                            Despite being the same language, both US English and UK English often use different spelling or even completely different terms to describe the same thing. I can tailor your text for the British market.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Button className="button-padding" onClick={this.handleShow}> Learn More </Button>
                                            <Modal size="lg" show={this.state.show} onHide={this.handleClose} centered>
                                                <Modal.Header closeButton>
                                                <Modal.Title>Learn More</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <ReactMarkdown source={markdown.files.get('learnMore')} skipHtml={true} />
                                                </Modal.Body>
                                                <Modal.Footer>
                                                <Button variant="secondary" onClick={this.handleClose}>
                                                    Close
                                                </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </Container>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card" ref={this.testimonialsRef}>
                                    <div className="card-body">
                                        <h4 className="card-title text-center">Testimonials</h4>
                                        <ReactMarkdown source={markdown.files.get('testimonials')} skipHtml={false} escapeHtml={false} />
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </main>
                <Footer />
            </>
        );
    }
}
