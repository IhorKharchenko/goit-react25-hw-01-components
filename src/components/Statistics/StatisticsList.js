import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const StatisticsList = ({ title, statisticalData }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.stat_list}>
        {statisticalData.map((stat) => (
          <li key={stat.id} className={styles.item}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

StatisticsList.propTypes = {
  title: PropTypes.string,
};
export default StatisticsList;
