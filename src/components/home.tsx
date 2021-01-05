
import React, { Component, createRef, RefObject } from "react";
import { Fade } from "react-awesome-reveal";
import { Col, Container, Nav, Navbar, Row,  Modal, Button } from "react-bootstrap";
import { MDBNavbar, MDBHamburgerToggler, MDBCollapse, MDBNavbarNav } from "mdbreact";
import Media from "react-media";
import Footer from "./footer";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { JumbotronLogo } from "./jumbotron-logo";
import ReactMarkdownWithHtml from 'react-markdown/with-html'

import aboutMe from "../markdown/about_me.md";
import learnMore from "../markdown/learn_more.md";
import testimonials from "../markdown/testimonials.md";
import { IconContext } from "react-icons/lib";
import { JumbotronPromo } from "./jumbotron-promo";
import hlm from '../images/hlm.jpg'; 

interface HomeProps {
    files: Map<string, string>;
    show: boolean;
    collapsed: boolean;
}

export class Home extends Component<{}, HomeProps> {

    private servicesRef = createRef<HTMLDivElement>();
    private aboutMeRef = createRef<HTMLDivElement>();
    private testimonialsRef = createRef<HTMLDivElement>();
    private contactRef = createRef<HTMLDivElement>();
    scrollToContent: any;

    constructor(props: HomeProps) {
        super(props);

        this.state = { 
            files: new Map([]),
            show: false,
            collapsed: false,
        }
    }
    
    componentDidMount() {
        let map = new Map();
        //this.getData(map, aboutMe, 'about');
        //this.getData(map, learnMore, 'learnMore');
        //this.getData(map, testimonials, 'testimonials');
        
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

        this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
    }

    getData(map: Map<any, any>, file: string, key: string) {
        let isMounted = true; // note this flag denote mount status
        fetch(file).then((res) => res.text()).then((md) => {
            map.set(key, md);
            if (isMounted) this.setState({ files: map })
        });

        return () => { isMounted = false }; 
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

    setCollapsed(newCollapse: boolean) {
        this.setState( { collapsed: newCollapse });
    }

    render() {
        let markdown = this.state;
        return (
            <>
                <header style={{ backgroundColor: "#9bc8c9" }}>
                    <Media query="(min-width: 800px)" render={() => (
                        <Navbar sticky="top" variant="light" bg="custom">
                            <Nav className="mx-auto">
                                <Nav.Link onClick={() => {this.scrollToRef(this.aboutMeRef)}}>ABOUT ME</Nav.Link>
                                <Nav.Link onClick={() => {this.scrollToRef(this.servicesRef)}}>SERVICES</Nav.Link>
                                <Nav.Link onClick={() => {this.scrollToRef(this.testimonialsRef)}}>TESTIMONIALS</Nav.Link>
                                <Nav.Link onClick={() => {this.scrollToRef(this.contactRef)}}>CONTACT ME</Nav.Link>
                            </Nav>
                        </Navbar>)}
                    />
                    <Media query="(max-width: 799px)" render={() => (
                        <MDBNavbar>
                            <MDBHamburgerToggler color="white" id="hamburger1" onClick={() => { this.setCollapsed(!this.state.collapsed); }} />
                            <MDBCollapse id='navbarCollapse1' isOpen={this.state.collapsed} navbar >
                                <MDBNavbarNav >
                                    <Nav.Link onClick={() => {this.scrollToRef(this.aboutMeRef)}}>ABOUT ME</Nav.Link >
                                    <Nav.Link onClick={() => {this.scrollToRef(this.servicesRef)}}>SERVICES</Nav.Link>
                                    <Nav.Link onClick={() => {this.scrollToRef(this.testimonialsRef)}}>TESTIMONIALS</Nav.Link>
                                    <Nav.Link onClick={() => {this.scrollToRef(this.contactRef)}}>CONTACT ME</Nav.Link>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    )}
                    />
                </header>
                    <main role="main">
                        <JumbotronLogo />
                        <Fade cascade triggerOnce fraction={0.25} duration={150}>
                        <div className="card card-custom" ref={this.aboutMeRef}>
                            <div className="card-body">
                                
                                <div>
                                    <h4 className="card-main-title text-center">About Me</h4>
                                    <img src={hlm} alt="HLM" className="img" />
                                </div>
                                <ReactMarkdownWithHtml children={markdown.files.get('about') || ''} skipHtml={true} />
                            </div>
                        </div>
                        <JumbotronPromo />
                        <div className="card card-custom bg-custom" ref={this.servicesRef}>
                            <div>
                                    <h4 className="card-main-title-offset text-center">Services</h4>
                                    <Container fluid className="text-center">
                                        <Row>
                                            <Col>
                                                <div className="card card-custom-mini shadow rounded">
                                                    <div className="card-body">
                                                        <h4 className="card-title text-center">German &amp; French into English</h4>
                                                        <p> 
                                                        I offer a range of linguistic solutions and specialise in translation for various industries. My high attention to detail means that your texts will be translated to an excellent standard. 
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                                <Col >
                                                    <div className="card card-custom-mini shadow rounded">
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
                                                    <div className="card card-custom-mini shadow rounded">
                                                        <div className="card-body">
                                                            <h4 className="card-title text-center">MT Post-Editing</h4>
                                                            <p> 
                                                            Machine translation has drastically improved over the last few years thanks to AI, but certain texts will still require a native English speaker to check for and correct any errors.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="card card-custom-mini shadow rounded">
                                                        <div className="card-body">
                                                            <h4 className="card-title text-center">Localisation</h4>
                                                            <p> 
                                                            Localisation is a process that involves adapting content to a particular language and culture to make it sound natural and culturally appropriate. I can tailor your text for a specific English-speaking market.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Button className="btn-lg button-padding" onClick={this.handleShow}> Learn More </Button>
                                            <Modal size="lg" show={this.state.show} onHide={this.handleClose} centered>
                                                <Modal.Header className="text-center">
                                                <Modal.Title>Services</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <ReactMarkdownWithHtml skipHtml={true} children={markdown.files.get('learnMore') || ''} />
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
                                <div className="card card-custom" ref={this.testimonialsRef}>
                                    <div className="card-body">
                                        <h4 className="card-main-title text-center">Testimonials</h4>
                                        <ReactMarkdownWithHtml children={markdown.files.get('testimonials') || ''} />
                                    </div>
                                </div>
                                <div className="card card-custom bg-custom" ref={this.contactRef}>
                                    <div>
                                        <h4 className="card-main-title-offset text-center" >
                                            Contact Me
                                            
                                            <IconContext.Provider value={{ className: 'react-icons' }}>
                                                <div style={{ position: "absolute", right: "40px", top: "28px" }}>
                                                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/hlmtranslations/"> <FaInstagram style={{ marginRight: "5px"  }} /> </a>
                                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/hlm-translations/"> <FaLinkedin /> </a>
                                                </div> 
                                            </IconContext.Provider>  
                                        </h4>                               
                                        <Container fluid className="text-center">
                                            <Row>
                                                <Col>
                                                    <p>If you would like to request a quote or wish to learn more about my services, please do not hesitate to contact me at <a href="mailto:info@hlm-translations.co.uk?subject=Email Enquiry">info@hlm-translations.co.uk</a></p>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>
                        </Fade>
                    </main>
                <Footer />
            </>
        );
    }
}
