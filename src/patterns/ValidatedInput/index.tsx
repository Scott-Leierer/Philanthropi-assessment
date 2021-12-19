import { FC, useState } from "react";
import classNames from "classnames";
import { InputStyles } from "./styles.css";
import { IInput, InputType } from "./types";
import { US_STATES } from "./states";

export const ValidatedInput: FC<IInput> = ({
  name,
  register,
  className,
  type = InputType.String,
  errors,
  placeholder,
  validation = {},
}) => {
  /*  Boolean used to determine size of placeholder text for state selection.
   *  There's a known bug where this gets reset on form verification or submission.
   *  I haven't been able to find a solution so I have disabled this.
   */
  // const [dropdownChanged, setDropdownChanged] = useState(false);
  return (
    <InputStyles className={classNames(className, { error: errors !== undefined })}>
      {/* If type is string then we create a string input */}
      {type === InputType.String ? (
        <div>
          <input
            id={name}
            className="input"
            type="string"
            placeholder=" "
            {...register(name, validation)}
          />
          {/* Custom placeholder so we can manage the sizing change */}
          <label htmlFor={name} className="placeholder">
            {placeholder}
          </label>
        </div>
      ) : (
        /* If type is state then we create a selection dropdown with all states */
        <div className="dropdown">
          <select
            id={name}
            defaultValue=""
            {...register(name, {
              ...validation,
              // onChange: () => setDropdownChanged(true),
            })}
          >
            <option value="" disabled></option>
            {US_STATES.map((state) => (
              <option key={state.name} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
          {/* State placeholder works slightly differently */}
          <label
            className="placeholder"
            // className={classNames("placeholder", { "big-text": !dropdownChanged })}
            htmlFor={name}
          >
            {placeholder}
          </label>
        </div>
      )}
      {/* Display an error message if there is one*/}
      <span className={classNames("error", { "show-error": errors })}>{`${errors?.message}`}</span>
    </InputStyles>
  );
};
