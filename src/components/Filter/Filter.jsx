import PropTypes from 'prop-types';
import styles from './filter.module.css';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <>
      <label className={styles.filter}>
        Find contact by name
        <input type="text" value={filter} onChange={onChangeFilter} />
      </label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
