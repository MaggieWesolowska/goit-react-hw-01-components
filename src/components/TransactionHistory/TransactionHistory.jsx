import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.tableHead}>
          <th className={css.headline}>Type</th>
          <th className={css.headline}>Amount</th>
          <th className={css.headline}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={css.tableBody} key={item.id}>
            <td className={css.tableColumn}>{item.type}</td>
            <td className={css.tableColumn}>{item.amount}</td>
            <td className={css.tableColumn}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
