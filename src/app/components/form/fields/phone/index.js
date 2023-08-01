import React from "react";
import { IMaskInput } from "react-imask";

import styles from "../styles.module.css";

export const PhoneField = (props) => {
  const { meta, input, label, settings } = props;

  return (
    <React.Fragment>
      <div
        className={`${styles.input} ${
          meta.error && meta.touched && styles.input_error
        }`}
      >
        <label>{label}</label>
        <div className={styles.inputWrapper}>
          <IMaskInput 
            {...input} 
            {...settings} 
            onAccept={(value) =>
              {
                if(value[1] && value[1] !== 7) {
                  value = value.replace(value[1], '7');
                }
                input.onChange({ target: { name: props.name, value } })
              }
            }
          />
          
        </div>
        {meta.error && meta.touched && (
          <small className={styles.error}>{meta.error}</small>
        )}
      </div>
    </React.Fragment>
  );
}

export default PhoneField;