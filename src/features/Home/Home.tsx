import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, ButtonStyle, ButtonType, ValidatedInput, InputType } from "patterns";
import { HomeStyles } from "./home.css";
import { ILoadedInput } from "./types";
import { validationCriteria } from "./validation";

export const Home: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onBlur",
    shouldFocusError: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (data: Record<string, unknown>) => {
    setIsLoading(true);
    axios
      .post("/post", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // Create component with register and errors prepopulated
  const LoadedValidatedInput: FC<ILoadedInput> = ({ name, ...rest }) => (
    <ValidatedInput name={name} register={register} errors={errors[name]} {...rest} />
  );
  return (
    <HomeStyles>
      <h1>Please provide your address</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LoadedValidatedInput
          name="address"
          placeholder="Mailing Address"
          validation={validationCriteria.address}
        />
        <LoadedValidatedInput name="unit" placeholder="Apt, Suite, Unit, etc." />
        <div className="row">
          <LoadedValidatedInput
            name="city"
            placeholder="City"
            validation={validationCriteria.city}
          />
          <LoadedValidatedInput
            name="state"
            type={InputType.State}
            placeholder="State"
            validation={validationCriteria.state}
          />
        </div>
        <div className="row">
          <LoadedValidatedInput
            name="zip"
            placeholder="ZIP Code"
            validation={validationCriteria.zip}
          />
          <LoadedValidatedInput
            name="phone"
            placeholder="Mobile Number"
            validation={validationCriteria.phone}
          />
        </div>
        <Button isLoading={isLoading} className="button" buttonType={ButtonType.Submit}>
          Save & Continue
        </Button>
        <Button className="button" buttonType={ButtonType.Button} buttonStyle={ButtonStyle.Link}>
          Back
        </Button>
      </form>
    </HomeStyles>
  );
};
