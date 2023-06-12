import React from "react";
import { FieldRenderProps } from "react-final-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMaskInput } from "react-imask";

import styles from "../styles.module.css";

type FieldPropsType = FieldRenderProps<string, any>;

export const MaskField = (props: FieldPropsType) => {
  const { meta, icon, input, label, settings } = props;

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
            onAccept={(value: any) =>
              input.onChange({ target: { name: props.name, value } })
            }
          />
          {icon && <FontAwesomeIcon icon={icon} />}
        </div>
        {meta.error && meta.touched && (
          <small className={styles.error}>{meta.error}</small>
        )}
      </div>
    </React.Fragment>
  );
}