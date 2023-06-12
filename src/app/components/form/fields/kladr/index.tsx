import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FieldRenderProps } from "react-final-form";
import { AddressSuggestions } from "react-dadata";

import styles from "../styles.module.css";

type FieldPropsType = FieldRenderProps<string, any>;

export const KladrField = (props: FieldPropsType) => {
  const { meta, icon, input, label, settings } = props;
  const suggestionsRef = useRef<any>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    if (suggestionsRef.current && settings?.defaultQuery?.length && !input.value && divRef && divRef.current) {
      suggestionsRef.current.setInputValue(settings.defaultQuery);
      setTimeout(() => suggestionsRef?.current?.focus(), 500)
      setTimeout(() =>suggestionsRef?.current?.textInput.blur(), 600)
    }
  }, [settings, input.value]);

  const removeNonCity = (suggestions: any) => {
    return suggestions.filter((suggestion: any) => suggestion.data.fias_level === "4");
  };

  return (
    <React.Fragment>
      <div
        className={`${styles.input} ${
          meta.error && meta.touched && styles.input_error
        }`}
        ref={divRef}
      >
        <label>{label}</label>
        <div className={styles.inputWrapper}>
          <AddressSuggestions
            ref={suggestionsRef}
            {...input}
            {...settings}
            inputProps={{ 
              placeholder: settings.placeholder ? settings.placeholder : "Поиск только городов",
              autoComplete: "new-password"
            }}
            token={process.env.REACT_APP_KLADR_KEY}
            onSuggestionsFetch={removeNonCity}
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
