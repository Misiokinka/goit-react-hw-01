import css from "./Transaction.module.css"


const Transaction = (props) => {
    const { type, amount, currency, index } = props
    return (
        <tbody> <tr className={index % 2 === 0 ? css.evenRow : css.oddRow}>
            <td className={css.transactionInfoType}>{type}</td>
            <td className={css.transactionInfo}>{amount}</td>
            <td className={css.transactionInfo}>{currency}</td>
        </tr></tbody>
    )
}
export default Transaction