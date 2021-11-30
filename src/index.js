import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.css';

import JobsList from "./components/jobslist";
import LangWrapper from "./components/langWrapper";

ReactDOM.render(
    <LangWrapper>
        <JobsList />
    </LangWrapper>, document.getElementById("root")
);
