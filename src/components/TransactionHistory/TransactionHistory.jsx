import css from "./TransactionHistory.module.css"
import transaction from "../../../src/transaction.json"
import Transaction from "../Transction/Transaction"
const TransactionHistory = () => {

    return (
        <div className={css.transactionHistoryWrapper}>
            <div className={css.transactionTitles}>
                <table className={css.transactionTable}>
                    <thead>
                        <tr >
                            <th className={css.transactionType}>Type </th>
                            <th className={css.transactionAmount}>Amount </th>
                            <th className={css.transactionCurrency}>Currency </th>
                        </tr>
                    </thead>
                    {transaction.map((item, index) => {
                        return (
                            <Transaction
                                key={item.id}
                                type={item.type}
                                amount={item.amount}
                                currency={item.currency}
                                index={index} />
                        )
                    })}
                </table>
            </div>

        </div>
    )
}

export default TransactionHistory