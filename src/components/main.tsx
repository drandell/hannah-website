import React, { Component, createRef, RefObject } from 'react';
import { Jumbotron } from './jumbotron';
import { Fade } from "react-awesome-reveal";
import { Slide } from 'react-awesome-reveal';
import Footer from './footer';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

export class Main extends Component {

    private servicesRef = createRef<HTMLDivElement>();
    private aboutMeRef = createRef<HTMLDivElement>();
    scrollToContent: any;

    scrollToRef = (ref: RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    }

    render() {
        return (
            <>
                <header>
                    <Slide direction="down" triggerOnce>
                        <Navbar sticky="top" variant="light" bg="custom">
                            <Nav className="mr-auto">
                                <Nav.Link onClick={() => {this.scrollToRef(this.servicesRef)}}>Services</Nav.Link>
                                <Nav.Link onClick={() => {this.scrollToRef(this.aboutMeRef)}}>About Me</Nav.Link>
                            </Nav> 
                            <Nav className="ml-auto">
                                <Nav.Link href="#contact-me">Contact Me</Nav.Link>
                            </Nav>
                        </Navbar>
                    </Slide>
                </header>
                    <main role="main">
                        <Fade cascade triggerOnce fraction={0.25} duration={150}>
                            <Jumbotron />
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <p>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque sit amet metus non dolor condimentum aliquam at id libero.Duis ac viverra elit, et molestie nulla.Sed vitae leo est.Donec sollicitudin pretium ipsum vel eleifend.In sollicitudin leo vel blandit luctus.Curabitur ac leo eget nulla varius tempus.Cras ornare turpis quis tellus laoreet bibendum.Etiam et nisi varius, elementum nunc eu, aliquam quam.Mauris congue sem at libero accumsan, quis porttitor nisl                                        mmo                                                                           Nullam cursus felis congue leo ultricies, non imperdiet turpis pulvinar.Quisque accumsan tellus nec laoreet posuere.In pretium, ante ut tincidunt dictum, nulla leo viverra nisi, nec iaculis enim urna a velit.Nulla vitae turpis non felis euismod ornare ut quis felis.Curabitur arcu lectus, pulvinar ac vehicula eget, sollicitudin vitae ligula.Cras ullamcorper gravida lorem, ut auctor metus condimentum commodo.Aenean egestas eget turpis at cursus.Maecenas et sem a ligula blandit porttitor nec ut tortor.Proin tristique, nulla vitae faucibus ornare, ante ligula suscipit erat, et placerat orci lorem eget felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris et nunc turpis.Nunc sed scelerisque nibh, sed tempus felis.Morbi at congue quam.Integer molestie sem leo, eu vestibulum                                         t a                                        s.

                                            Praesent ac odio enim.Quisque dictum ultrices velit, quis sagittis tortor consequat in.Ut lorem justo, lacinia id odio eget, suscipit venenatis est.Donec mattis nibh ultrices facilisis faucibus.Suspendisse mi est, porttitor in dolor et, porta elementum nisl.Aenean congue rhoncus accumsan.Etiam ac cursus justo.In et sapien ut dui suscipit ornare sit amet nec orci.Duis nec volutpat sapien, nec efficitur massa.Fusce nec lectus id nisl molestie ullamcorper a volutpat libero.Duis sagittis iaculis semper.Etiam lectus purus, mollis eu magna sed, feugiat fermentum eros.Suspendisse diam mauris, accumsan eget arcu non, viverra tempor ligula.Suspendisse dignissim odio ac lorem porttitor blandit.Aenean iaculis efficitur porta.Praesent scelerisque, nulla cursus aliquam cursus, arcu diam egestas eros, et lob                                        is                                         non tellus.

                                            Proin est purus, facilisis vitae varius ac, efficitur et mi.Donec ultricies leo turpis.Morbi in erat sapien.Phasellus sollicitudin mauris neque, sit amet lacinia nibh rhoncus eu.Aliquam vel ligula molestie, luctus arcu ac, ullamcorper velit.Praesent et lectus ut erat ultrices aliquam a a dolor.Nunc vitae iaculis quam, et aliquam risus.In eleifend, ipsum et efficitur interdum, leo eros bibendum mi, et tincidunt ante sem fermentum leo.Fusce iaculis ante risus, at lacinia odio cursus in.Sed sed ipsum id risus finibus interdum sed a eros.Aliquam matti                                        rcu elementum velit sagittis vestibulum.

                                            In rhoncus viverra sagittis.Nam felis ante, auctor sed odio a, ultrices pharetra neque.Nulla sollicitudin finibus tristique.Nulla ac felis risus.Etiam ipsum metus, fermentum ac ultricies at, gravida maximus lectus.Donec ac orci velit.Nulla luctus justo nec mattis elementum.Vestibulum sollicitudin sollicitudin laoreet.Pellentesque quis accumsan elit.Suspendisse lacinia massa vitae dui consectetur, id placerat dui ullamcorper.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Phasellus finibus euismod porta.Nulla facilisi.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card" ref={this.servicesRef}>
                                    <div>
                                        <h4 className="card-title text-center">Services</h4>
                                        <Container fluid className="text-center">
                                            <Row>
                                                <Col>German to English</Col>
                                                <Col >French to English</Col>
                                            </Row>
                                            <Row>
                                                <Col>1 of 3</Col>
                                                <Col>2 of 3</Col>
                                                <Col>3 of 3</Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card" ref={this.aboutMeRef}>
                                    <div className="card-body">
                                        <h4 className="card-title text-center">About Me</h4>
                                        <p>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque sit amet metus non dolor condimentum aliquam at id libero.Duis ac viverra elit, et molestie nulla.Sed vitae leo est.Donec sollicitudin pretium ipsum vel eleifend.In sollicitudin leo vel blandit luctus.Curabitur ac leo eget nulla varius tempus.Cras ornare turpis quis tellus laoreet bibendum.Etiam et nisi varius, elementum nunc eu, aliquam quam.Mauris congue sem at libero accumsan, quis porttitor nisl                                        mmo                                                                           Nullam cursus felis congue leo ultricies, non imperdiet turpis pulvinar.Quisque accumsan tellus nec laoreet posuere.In pretium, ante ut tincidunt dictum, nulla leo viverra nisi, nec iaculis enim urna a velit.Nulla vitae turpis non felis euismod ornare ut quis felis.Curabitur arcu lectus, pulvinar ac vehicula eget, sollicitudin vitae ligula.Cras ullamcorper gravida lorem, ut auctor metus condimentum commodo.Aenean egestas eget turpis at cursus.Maecenas et sem a ligula blandit porttitor nec ut tortor.Proin tristique, nulla vitae faucibus ornare, ante ligula suscipit erat, et placerat orci lorem eget felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris et nunc turpis.Nunc sed scelerisque nibh, sed tempus felis.Morbi at congue quam.Integer molestie sem leo, eu vestibulum                                         t a                                        s.

                                            Praesent ac odio enim.Quisque dictum ultrices velit, quis sagittis tortor consequat in.Ut lorem justo, lacinia id odio eget, suscipit venenatis est.Donec mattis nibh ultrices facilisis faucibus.Suspendisse mi est, porttitor in dolor et, porta elementum nisl.Aenean congue rhoncus accumsan.Etiam ac cursus justo.In et sapien ut dui suscipit ornare sit amet nec orci.Duis nec volutpat sapien, nec efficitur massa.Fusce nec lectus id nisl molestie ullamcorper a volutpat libero.Duis sagittis iaculis semper.Etiam lectus purus, mollis eu magna sed, feugiat fermentum eros.Suspendisse diam mauris, accumsan eget arcu non, viverra tempor ligula.Suspendisse dignissim odio ac lorem porttitor blandit.Aenean iaculis efficitur porta.Praesent scelerisque, nulla cursus aliquam cursus, arcu diam egestas eros, et lob                                        is                                         non tellus.

                                            Proin est purus, facilisis vitae varius ac, efficitur et mi.Donec ultricies leo turpis.Morbi in erat sapien.Phasellus sollicitudin mauris neque, sit amet lacinia nibh rhoncus eu.Aliquam vel ligula molestie, luctus arcu ac, ullamcorper velit.Praesent et lectus ut erat ultrices aliquam a a dolor.Nunc vitae iaculis quam, et aliquam risus.In eleifend, ipsum et efficitur interdum, leo eros bibendum mi, et tincidunt ante sem fermentum leo.Fusce iaculis ante risus, at lacinia odio cursus in.Sed sed ipsum id risus finibus interdum sed a eros.Aliquam matti                                        rcu elementum velit sagittis vestibulum.

                                            In rhoncus viverra sagittis.Nam felis ante, auctor sed odio a, ultrices pharetra neque.Nulla sollicitudin finibus tristique.Nulla ac felis risus.Etiam ipsum metus, fermentum ac ultricies at, gravida maximus lectus.Donec ac orci velit.Nulla luctus justo nec mattis elementum.Vestibulum sollicitudin sollicitudin laoreet.Pellentesque quis accumsan elit.Suspendisse lacinia massa vitae dui consectetur, id placerat dui ullamcorper.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Phasellus finibus euismod porta.Nulla facilisi.
                                        </p>
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
