import React, { useEffect, useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { FieldRenderProps } from "react-final-form";

import styles from "../styles.module.css";

export function RadioYesNoField<T extends boolean | string>(props: FieldRenderProps<T, any>) {
  const [ selected, setSelected ] = useState<boolean | null>(null);
  const { meta, input, label, disabled = false, style = {} } = props;

  useEffect(()=> {
    if(selected !== null) return input.onChange(selected)
    if(input.value !== "")  return input.onChange(input.value);
  }, [input, selected]);

  return (
    <div className={`${styles.radioButton} ${styles.input} ${
      meta.error && meta.touched && styles.input_error
    }`} style={style}>
      <label>{label}</label>

      <div className="p-col-12 p-p-0 p-d-flex">
        <div className="p-pr-2 p-pt-2 p-pb-0 p-d-flex">
          <RadioButton
            inputId={input.name + '_yes'}
            onChange={(e) => setSelected(true)}
            checked={ input.value !== "" ? !!input.value === true : selected === true }
            disabled={disabled}
          />
          <label htmlFor={input.name + '_yes'} className="p-ml-2" style={{ cursor: 'pointer' }}>Да</label>
        </div>
        <div className="p-p-2 p-d-flex">
          <RadioButton
            inputId={input.name + '_no'}
            onChange={(e) => setSelected(false)}
            checked={ input.value !== "" ? !!input.value === false : selected === false }
            disabled={disabled}
          />
          <label htmlFor={input.name + '_no'} className="p-ml-2" style={{ cursor: 'pointer' }}>Нет</label>
        </div>
      </div>
      {meta.error && meta.touched && (
          <small className={styles.error}>{meta.error}</small>
        )}
    </div>
  );
}
