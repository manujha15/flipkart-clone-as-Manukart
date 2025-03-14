import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Transaction.css"

const Transaction = ({ userId }) => {
    const [amount, setAmount] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("UPI");
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            const res = await axios.get(`/api/transactions/user/${userId}`);
            setTransactions(res.data.transactions);
        } catch (error) {
            console.error("Error fetching transactions", error);
        }
    };

    const handleTransaction = async () => {
        try {
            const res = await axios.post("/api/transactions/create", {
                userId,
                amount,
                paymentMethod
            });

            if (res.data.success) {
                alert("Transaction Successful!");
                fetchTransactions();
            } else {
                alert("Transaction Failed!");
            }
        } catch (error) {
            console.error("Transaction Error", error);
            alert("Transaction Failed!");
        }
    };

    return (
        <div>
            <h2>Make a Transaction</h2>
            <input 
                type="number" 
                placeholder="Enter Amount" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
            />
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="UPI">UPI</option>
                <option value="Net Banking">Net Banking</option>
                <option value="Wallet">Wallet</option>
            </select>
            <button onClick={handleTransaction}>Pay Now</button>

            <h2>Your Transactions</h2>
            <ul>
                {transactions.map((txn) => (
                    <li key={txn._id}>
                        ₹{txn.amount} - {txn.paymentMethod} - {txn.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Transaction;
