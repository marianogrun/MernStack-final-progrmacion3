import React from "react";
import { Link } from "react-router-dom";

const formatPriceAmount = (amount) => {
    const multiplier = (amount < 0) ? -1 : 1;
    return (multiplier === -1 ? "- $" : "$") + (amount * multiplier);
}

const AccountListItem = ({ bankingAcc }) => (

    <tr>
        <td>{bankingAcc.username}</td>
        <td>{bankingAcc.accountNumber}</td>
        <td>{formatPriceAmount(bankingAcc.balance)}</td>
        <td>{bankingAcc.cbu}</td>
        <td>
            <Link to={"/movements?accountId=" + bankingAcc._id}> Ver Movimientos </Link>
            | <Link to="/createDeposit"> Depositar </Link>
            | <Link to="/createExtraction"> Extraer </Link>
        </td>
    </tr>
)

export default AccountListItem;