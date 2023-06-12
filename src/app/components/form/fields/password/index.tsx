import React, { useRef } from "react";
import { Password } from "primereact/password";
import { FieldRenderProps } from "react-final-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles.module.css";

type FieldPropsType = FieldRenderProps<string, any>;

export const PasswordField = (props: FieldPropsType) => {
  const { meta, icon, input, label, settings } = props;
  const ref = useRef<any>(null);

  const focus = () => {
    try {
      if(null !== ref && null !== ref.current) {
        ref.current.inputRef.current.focus();
      }
    } catch (e) {}
    
  }

  return (
    <React.Fragment>
      <div
        className={`${styles.input} ${
          meta.error && meta.touched && styles.input_error
        }`}
        onClick={ focus }
      >
        <label>{label}</label>
        <div className={styles.inputPass}>
          <Password {...input} {...settings} ref={ref}/>
          {icon && <FontAwesomeIcon icon={icon} />}
        </div>
        {meta.error && meta.touched && (
          <small className={styles.error}>{meta.error}</small>
        )}
      </div>
    </React.Fragment>
  );
}
