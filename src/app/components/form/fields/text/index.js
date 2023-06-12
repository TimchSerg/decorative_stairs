import React, { useRef } from "react";
import Form from 'react-bootstrap/Form';


import styles from "../styles.module.css";

export const TextField = (props) => {
  const { meta, icon, input, label, settings, help, style={} } = props;
  const ref = useRef(null);

  const focus = () => {
    if(null !== ref && null !== ref.current) {
      ref.current.focus();
    }
  }

  return (
    <React.Fragment>
      <div
        className={`${styles.input} ${
          meta.error && meta.touched && styles.input_error
        }`} style={style}

        onClick={ focus }
      >
        <label>
          {label}
      
        </label>
        <div className={styles.inputWrapper}>
          <Form.Control type="text" {...input}  {...settings} ref={ref} />
        </div>
        {meta.error && meta.touched && (
          <small className={styles.error}>{meta.error}</small>
        )}
      </div>
    </React.Fragment>
  );
}

export default TextField;