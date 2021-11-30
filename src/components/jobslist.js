import React, { useContext, useState } from "react";
import { FormattedMessage } from "react-intl";
import Job from "./job";
import { LangContext } from "./langWrapper";

const JobsList = () => {
  const context = useContext(LangContext);
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      visits: 135,
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      visits: 15000000,
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      visits: 1250,
    },
  ]);

  return (
    <div>
      <select className="SelectLang"value = {context.locale} onChange={context.selectLanguage}>
          <option value= 'es'>{context.locale==='en'?'Spanish':'Español'}</option>
          <option value= 'en'>{context.locale==='en'?'English':'Inglés'}</option>
      </select>
      <table className="table">
        <thead className={context.locale==='en'?"table-dark":"table-light"}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id="Position"/>
            </th>
            <th scope="col">
              <FormattedMessage id="Company"/>
            </th>
            <th scope="col">
              <FormattedMessage id="Salary"/>
            </th>
            <th scope="col">
              <FormattedMessage id="City"/>
            </th>
            <th scope="col">
              <FormattedMessage id="PublicationDate"/>
            </th>
            <th scope="col">
              <FormattedMessage id="Views"/>
            </th>
          </tr>
        </thead>
        <tbody>
          {console.log("Offers", offers)}
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
