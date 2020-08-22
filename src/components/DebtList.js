import React, {useState, useContext} from 'react';
import Debt from './Debt';
import {DebtContext} from './DebtContext'

const DebtList = () => {
  const [debt, setDebt] = useContext(DebtContext);
  return(
  <div>
    
    {debt.map(x => (
      <Debt 
        key = {x.id}
        creditor={x.creditor} 
        balance={x.balance}
        originalbalance = {x.originalbalance}
        rate = {x.rate}
        payment = {x.payment}
        goal = {x.goal}
        paidoffdate = {x.paidoffdate}
        totalinterestpaid = {x.totalinterestpaid}
        monthstopayoff = {x.monthstopayoff}
        payoffstrategy = {x.payoffstrategy}  
      />
    ))}

  
  </div>
  );
}

export default DebtList;

  {/* {debt.length === 0 ? <tr><td colSpan='9'>All Caught Up</td></tr> : debt} */}