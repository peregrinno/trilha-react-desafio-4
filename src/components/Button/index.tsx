import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled = false, type = "button" }: IButtonProps) => {
  return (
    <ButtonContainer 
      onClick={onClick} 
      disabled={disabled}
      type={type}
    >
      {title}
    </ButtonContainer>
  );
};

export default Button;
