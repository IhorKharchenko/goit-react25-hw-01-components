import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
import colors from "./colors.json";

const Statistics = ({ title, statisticalData }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.stat_list}>
        {statisticalData.map((stat) => {
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
};

export default Statistics;
