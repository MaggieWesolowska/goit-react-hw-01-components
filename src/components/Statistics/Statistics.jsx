import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            <span className>{stat.label}</span>
            <span className>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
