import React from "react";
import avtar from "./../images/logo.png";

function Home() {
    return (
        <div className="min-h-screen">
            <div className="container pt-5 d-flex flex-column align-items-center">
                <img src={avtar} width={200} alt="Hritik Raghuwanshi" />
                <h1>Hritik Raghuwanshi</h1>
                <h4>(Web Developer)</h4>
                <p className="text-center">I am a student, cuurently studying at silver oak college in IT branch. I believe that a person should work on developing their professional skills and learning new things all the time. In future i would like to become an full stack developer. My hobbies are learning new technologies, reading books, listening music and playing cricket. Currently I am pursuing internship in web development and like to further learn new trending technologies in IT field. In future I will would like to work with IT comapny where I can grow as well as learn new technologies and apply skills for the better growth of the company.</p>
                
                <p className="text-center">
                    <span className="d-mobile-block">Email: hritikr2003@gmail.com</span>
                    <span className="d-none d-web-contents"> | </span>
                    <span className="d-mobile-block">Phone: +91-6354811993</span>
                </p>
                <p className="text-center">Address: B-3,Laxmi Appartment Near Vanza Hospital Bopal Ahmedabad</p>
            </div>
            <hr />
            <div className="container pb-3">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-3">Skills</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0 clr">HTML</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "85%" }}>85%</div>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <p className="mb-0 clr">CSS</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} >80%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0 clr">PYTHON</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "90%" }}>90%</div>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <p className="mb-0 clr">JAVA</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "90%" }} >90%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-3">Hobbies</h5>
                                <span class="badge bg-primary text-dark me-3 mb-3 p-2">Listening Music</span>
                                <span class="badge bg-warning text-dark me-3 mb-3 p-2">Reading</span>
                                <span class="badge bg-success text-dark me-3 mb-3 p-2">Sports</span>
                                <span class="badge bg-danger text-dark me-3 mb-3 p-2">Learning</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;