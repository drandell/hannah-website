import React, { useRef } from 'react';
import { Jumbotron } from './jumbotron';
import { Fade } from "react-awesome-reveal";

export const Main = () => {  
    return (
        <main role="main">
            <Fade cascade triggerOnce fraction={0.40} duration={500}>
                <Jumbotron />
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet metus non dolor condimentum aliquam at id libero. Duis ac viverra elit, et molestie nulla. Sed vitae leo est. Donec sollicitudin pretium ipsum vel eleifend. In sollicitudin leo vel blandit luctus. Curabitur ac leo eget nulla varius tempus. Cras ornare turpis quis tellus laoreet bibendum. Etiam et nisi varius, elementum nunc eu, aliquam quam. Mauris congue sem at libero accumsan, quis porttitor nisl commodo.

        Nullam cursus felis congue leo ultricies, non imperdiet turpis pulvinar. Quisque accumsan tellus nec laoreet posuere. In pretium, ante ut tincidunt dictum, nulla leo viverra nisi, nec iaculis enim urna a velit. Nulla vitae turpis non felis euismod ornare ut quis felis. Curabitur arcu lectus, pulvinar ac vehicula eget, sollicitudin vitae ligula. Cras ullamcorper gravida lorem, ut auctor metus condimentum commodo. Aenean egestas eget turpis at cursus. Maecenas et sem a ligula blandit porttitor nec ut tortor. Proin tristique, nulla vitae faucibus ornare, ante ligula suscipit erat, et placerat orci lorem eget felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et nunc turpis. Nunc sed scelerisque nibh, sed tempus felis. Morbi at congue quam. Integer molestie sem leo, eu vestibulum elit aliquam varius.

        Praesent ac odio enim. Quisque dictum ultrices velit, quis sagittis tortor consequat in. Ut lorem justo, lacinia id odio eget, suscipit venenatis est. Donec mattis nibh ultrices facilisis faucibus. Suspendisse mi est, porttitor in dolor et, porta elementum nisl. Aenean congue rhoncus accumsan. Etiam ac cursus justo. In et sapien ut dui suscipit ornare sit amet nec orci. Duis nec volutpat sapien, nec efficitur massa. Fusce nec lectus id nisl molestie ullamcorper a volutpat libero. Duis sagittis iaculis semper. Etiam lectus purus, mollis eu magna sed, feugiat fermentum eros. Suspendisse diam mauris, accumsan eget arcu non, viverra tempor ligula. Suspendisse dignissim odio ac lorem porttitor blandit. Aenean iaculis efficitur porta. Praesent scelerisque, nulla cursus aliquam cursus, arcu diam egestas eros, et lobortis mauris quam non tellus.

        Proin est purus, facilisis vitae varius ac, efficitur et mi. Donec ultricies leo turpis. Morbi in erat sapien. Phasellus sollicitudin mauris neque, sit amet lacinia nibh rhoncus eu. Aliquam vel ligula molestie, luctus arcu ac, ullamcorper velit. Praesent et lectus ut erat ultrices aliquam a a dolor. Nunc vitae iaculis quam, et aliquam risus. In eleifend, ipsum et efficitur interdum, leo eros bibendum mi, et tincidunt ante sem fermentum leo. Fusce iaculis ante risus, at lacinia odio cursus in. Sed sed ipsum id risus finibus interdum sed a eros. Aliquam mattis arcu elementum velit sagittis vestibulum.

        In rhoncus viverra sagittis. Nam felis ante, auctor sed odio a, ultrices pharetra neque. Nulla sollicitudin finibus tristique. Nulla ac felis risus. Etiam ipsum metus, fermentum ac ultricies at, gravida maximus lectus. Donec ac orci velit. Nulla luctus justo nec mattis elementum. Vestibulum sollicitudin sollicitudin laoreet. Pellentesque quis accumsan elit. Suspendisse lacinia massa vitae dui consectetur, id placerat dui ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus finibus euismod porta. Nulla facilisi.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Services</h5>
                            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet metus non dolor condimentum aliquam at id libero. Duis ac viverra elit, et molestie nulla. Sed vitae leo est. Donec sollicitudin pretium ipsum vel eleifend. In sollicitudin leo vel blandit luctus. Curabitur ac leo eget nulla varius tempus. Cras ornare turpis quis tellus laoreet bibendum. Etiam et nisi varius, elementum nunc eu, aliquam quam. Mauris congue sem at libero accumsan, quis porttitor nisl commodo.

        Nullam cursus felis congue leo ultricies, non imperdiet turpis pulvinar. Quisque accumsan tellus nec laoreet posuere. In pretium, ante ut tincidunt dictum, nulla leo viverra nisi, nec iaculis enim urna a velit. Nulla vitae turpis non felis euismod ornare ut quis felis. Curabitur arcu lectus, pulvinar ac vehicula eget, sollicitudin vitae ligula. Cras ullamcorper gravida lorem, ut auctor metus condimentum commodo. Aenean egestas eget turpis at cursus. Maecenas et sem a ligula blandit porttitor nec ut tortor. Proin tristique, nulla vitae faucibus ornare, ante ligula suscipit erat, et placerat orci lorem eget felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et nunc turpis. Nunc sed scelerisque nibh, sed tempus felis. Morbi at congue quam. Integer molestie sem leo, eu vestibulum elit aliquam varius.

        Praesent ac odio enim. Quisque dictum ultrices velit, quis sagittis tortor consequat in. Ut lorem justo, lacinia id odio eget, suscipit venenatis est. Donec mattis nibh ultrices facilisis faucibus. Suspendisse mi est, porttitor in dolor et, porta elementum nisl. Aenean congue rhoncus accumsan. Etiam ac cursus justo. In et sapien ut dui suscipit ornare sit amet nec orci. Duis nec volutpat sapien, nec efficitur massa. Fusce nec lectus id nisl molestie ullamcorper a volutpat libero. Duis sagittis iaculis semper. Etiam lectus purus, mollis eu magna sed, feugiat fermentum eros. Suspendisse diam mauris, accumsan eget arcu non, viverra tempor ligula. Suspendisse dignissim odio ac lorem porttitor blandit. Aenean iaculis efficitur porta. Praesent scelerisque, nulla cursus aliquam cursus, arcu diam egestas eros, et lobortis mauris quam non tellus.

        Proin est purus, facilisis vitae varius ac, efficitur et mi. Donec ultricies leo turpis. Morbi in erat sapien. Phasellus sollicitudin mauris neque, sit amet lacinia nibh rhoncus eu. Aliquam vel ligula molestie, luctus arcu ac, ullamcorper velit. Praesent et lectus ut erat ultrices aliquam a a dolor. Nunc vitae iaculis quam, et aliquam risus. In eleifend, ipsum et efficitur interdum, leo eros bibendum mi, et tincidunt ante sem fermentum leo. Fusce iaculis ante risus, at lacinia odio cursus in. Sed sed ipsum id risus finibus interdum sed a eros. Aliquam mattis arcu elementum velit sagittis vestibulum.

        In rhoncus viverra sagittis. Nam felis ante, auctor sed odio a, ultrices pharetra neque. Nulla sollicitudin finibus tristique. Nulla ac felis risus. Etiam ipsum metus, fermentum ac ultricies at, gravida maximus lectus. Donec ac orci velit. Nulla luctus justo nec mattis elementum. Vestibulum sollicitudin sollicitudin laoreet. Pellentesque quis accumsan elit. Suspendisse lacinia massa vitae dui consectetur, id placerat dui ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus finibus euismod porta. Nulla facilisi.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
        </main>
    );
};