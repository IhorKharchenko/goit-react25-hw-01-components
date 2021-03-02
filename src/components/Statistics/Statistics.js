import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import colors from './colors.json';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title ? <h2 className={styles.title}>{title}</h2> : false}
      <ul className={styles.stat_list}>
        {stats.map(stat => {
          const randomIntegerFromInterval = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
          };
          const liStyle = {
            backgroundColor:
              colors[randomIntegerFromInterval(0, colors.length - 1)],
          };
          return (
            <li key={stat.id} className={styles.item} style={liStyle}>
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
