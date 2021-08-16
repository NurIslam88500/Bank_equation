// function or addEventListener call
document.getElementById("deposit-button").addEventListener("click", function () {
    // deposite input 
    const newDeposit = document.getElementById("deposit-input");
    const newDepositAmountText = newDeposit.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

// input za thakbe tar sathe deposit amount er sathe jog or sum
    
    const totaldepo = document.getElementById("deposit-total");
    const totalDepotext = totaldepo.innerText;
    const totalDepoamount = parseFloat(totalDepotext);
    const newTotalDepoAmount = newDepositAmount + totalDepoamount;

    // then bole dite hobe total deposite er ze balance ta chilo ta ekhn total deposit balance hoy jabe 
    totaldepo.innerText = newTotalDepoAmount;

// deposit input za thakbe tar sathe total balance er sum or jog 
    
    const TotalBalance = document.getElementById("balance-total");
    const TotalBalanceText = TotalBalance.innerText;
    const TotalBalanceAmount = parseFloat(TotalBalanceText);
    const Total = newDepositAmount + TotalBalanceAmount;

    // then bole dite hobe ze previous total balance ta ekhoner new balance ba total balance 
    TotalBalance.innerText = Total;

    // clear the input 
    newDeposit.value = "";
})
    // withdraw input 

// function or addEventListener call 
    document.getElementById("withdraw-button").addEventListener("click", function () {
        // withdraw input call 
        const withdrawinput = document.getElementById("withdraw-input");
        const withdrawinputTextamount = withdrawinput.value;
        const withdrawinputAmount = parseFloat(withdrawinputTextamount);
        console.log(withdrawinputAmount);

        // withdraw total balance call and sum with withdrawinput or withdrawamount

        const totalwithdraw = document.getElementById("withdraw-total");
        const totalwithdrawamountText = totalwithdraw.innerText;
        const totalwithdrawamount = parseFloat(totalwithdrawamountText);
        console.log(totalwithdrawamount);

        // then amake withdrawtotal sathe withdraw input jog korte hbe 

        const totalwithdrawTaka = withdrawinputAmount + totalwithdrawamount;
        
// total withdraw (id) sathe total withdraw tka total add hobe !
        
        totalwithdraw.innerText = totalwithdrawTaka;

        withdrawinput.value = ""

    // withdraw korle total balance theke biyog korte hbe 
        
        const TotalBalance = document.getElementById("balance-total");
        const TotalBalanceText = TotalBalance.innerText;
        const TotalBalanceAmount = parseFloat(TotalBalanceText);
        const total = TotalBalanceAmount - withdrawinputAmount;
        TotalBalance.innerText = total;

    })
    





    



