import React from "react";

function Education() {
    return (
        <React.Fragment>
            <div className="min-h-screen">
                <div className="container py-5">
                    <h1 className="text-center mb-5">Education</h1>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-5">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">10-ssc Board, 12th-GSEB Board <span className="h6">from Shiv Ashish School</span></h5>
                                    <p className="mb-0"> -March 2018-March 2020</p>
                                    <small>Passed 10-SSC Board wtih 83 percentage </small>
                                    <p className="mb-0"></p>
                                    <small>Passed 12-GSEB Board wtih 73 percentage </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Bachelor of Engineering <span className="h6">from Silver Oak University</span></h5>
                                    <p className="mb-0">August 2020 PRESENT</p>
                                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus earum vel excepturi autem mollitia, blanditiis voluptatum perspiciatis alias eos architecto in, adipisci voluptatem corrupti quidem enim accusamus itaque non tempore!</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Education;