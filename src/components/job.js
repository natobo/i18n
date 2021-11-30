import React, { useContext } from "react";
import { FormattedDate, FormattedMessage, FormattedNumber } from 'react-intl';
import { LangContext } from "./langWrapper";

const Job = (props) => {
  const context = useContext(LangContext);
  return (
    <tr>
      <th scope="row">
        <FormattedMessage
         id={`${props.offer.id}msg1`}
         defaultMessage="{id}"
         values={
           {
             id: props.offer.id
           }
         }
        />
      </th>
      <td>
        <FormattedMessage
           id={`${props.offer.id}msg2`}
           defaultMessage="{name}"
           values={
             {
               name: props.offer.name
             }
           }
          />
      </td>
      <td>
        <FormattedMessage
           id={`${props.offer.id}msg3`}
           defaultMessage="{company}"
           values={
             {
               company: props.offer.company
             }
           }
         />
      </td>
      <td>
        <FormattedMessage
           id={`${props.offer.id}msg4`}
           defaultMessage={`{salary} ${context.locale==='en'?'million':'millones'}`}
           values={
             {
              salary: props.offer.salary
             }
           }
         />
      </td>
      <td>
        <FormattedMessage
          id={`${props.offer.id}msg5`}
          defaultMessage={`{city}`}
          values={
            {
             city: props.offer.city
            }
          }
        />
      </td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber
          value={props.offer.visits}
        ></FormattedNumber>
      </td>
    </tr>
  );
};

export default Job;
