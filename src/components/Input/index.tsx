import { useState } from "react";
import { InputContainer, ErrorMessage, PasswordToggleButton } from "./styles";
import { IInputProps } from "./types";
import { Controller } from "react-hook-form";

const Input = ({ control, name, errorMessage, type, ...rest }: IInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const isPasswordInput = type === "password";
  const inputType = isPasswordInput ? (showPassword ? "text" : "password") : type;

  return (
    <>
      <InputContainer hasIcon={isPasswordInput}>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <>
              <input
                {...rest}
                type={inputType}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
              />
              {isPasswordInput && (
                <PasswordToggleButton 
                  type="button" 
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </PasswordToggleButton>
              )}
            </>
          )}
        />
      </InputContainer>
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : <ErrorMessage />}
    </>
  );
};

export default Input;
