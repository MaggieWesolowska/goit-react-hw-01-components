import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.section}>
      {<h2 className={css.title}>{title}</h2>}

      <ul className={css.stats}>
        {stats.map(stat => (
          <li
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
            key={stat.id}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// const getBgColor = variant => {
//   switch (variant) {
//     case 'doc':
//       return 'blue';
//     case 'pdf':
//       return 'green';
//     case 'mp3':
//       return 'red';
//     case 'psd':
//       return 'orange';
//     case 'pdf2':
//       return 'yellow';
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };

Statistics.propTypes = {
  title: PropTypes.string.isRequired,

  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
