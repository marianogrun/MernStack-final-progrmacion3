import React from "react";

const formatPriceAmount = (amount) => {
    const multiplier = (amount < 0) ? -1 : 1;
    return (multiplier === -1 ? "- $" : "$") + (amount * multiplier);
}

const formatDate = (rawDate)=>{
    const date = new Date(rawDate);
    return [
        date.getDate().toString().padStart(2, '0'),
        (date.getMonth()+1).toString().padStart(2, '0'),
        date.getFullYear().toString().padStart(2, '0')
    ].join("/") + " " + [
        date.getHours().toString().padStart(2, '0'),
        date.getMinutes().toString().padStart(2, '0'),
        date.getSeconds().toString().padStart(2, '0')
    ].join(":");
}

const AccountMovementListItem = ({ movement }) => (

    <tr>
        <td>{movement.movementType}</td>
        <td>{formatPriceAmount(movement.amount)}</td>
        <td>{formatPriceAmount(movement.accountResultBalance)}</td>
        <td>{formatDate(movement.date)}</td>
    </tr>
)

export default AccountMovementListItem;