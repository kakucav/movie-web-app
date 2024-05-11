import { ChangeEvent, useMemo, useState } from "react";
import debounce from "lodash.debounce";

import { DebounceWait } from "enums/Debounce";

import searchIcon from "assets/icon_search.svg";
import crossIcon from "assets/icon_cross.svg";

import styles from "./DebouncedInputField.module.scss";

interface DebouncedInputFieldProps {
  placeholder: string;
  value: string | undefined;
  onChange: (value: string | undefined) => void;
}

const DebouncedInputField = (props: DebouncedInputFieldProps): JSX.Element => {
  const { placeholder, onChange, value } = props;

  // state for visual purpose, parent state will be triggered one second ater user stopped typing
  const [enteredValue, setEnteredValue] = useState<string | undefined>(value);

  const debouncedOnChange = useMemo(
    () =>
      debounce((value: string) => onChange(value), DebounceWait.InputFilter),
    [onChange]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;

    setEnteredValue(value);
    debouncedOnChange(value);
  };

  const handleReset = (): void => {
    debouncedOnChange.cancel();

    setEnteredValue(undefined);
    onChange(undefined);
  };

  return (
    <div className={styles.debpouned_input_field_wrapper}>
      <img className={styles.search_icon} src={searchIcon} alt="search" />

      <input
        className={styles.input}
        placeholder={placeholder}
        value={enteredValue ?? ""}
        onChange={handleChange}
      />

      {enteredValue && (
        <button className={styles.btn_reset} onClick={handleReset}>
          <img className={styles.cross_icon} src={crossIcon} alt="reset" />
        </button>
      )}
    </div>
  );
};

export default DebouncedInputField;
