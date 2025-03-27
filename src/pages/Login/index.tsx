import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useEffect } from "react";

import { Container, LoginContainer, Column, Spacing, Title, ErrorText, SuccessText } from "./styles";
import { defaultValues, IFormLogin } from "./types";
import { RequirementsList, RequirementItem } from "../../components/Input/styles";

// Enhanced validation schema with more professional rules
const schema = yup
  .object({
    email: yup
      .string()
      .email("Por favor, insira um e-mail válido")
      .required("O e-mail é obrigatório")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Formato de e-mail inválido"
      ),
    password: yup
      .string()
      .required("A senha é obrigatória")
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "A senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial"
      ),
  })
  .required();

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginSuccess, setLoginSuccess] = useState<string | null>(null);
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordRequirements, setPasswordRequirements] = useState({
    minLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues,
    reValidateMode: "onChange",
  });

  // Watch for password changes
  const watchPassword = watch("password");
  
  useEffect(() => {
    if (watchPassword !== undefined) {
      setPasswordValue(watchPassword);
      
      // Check each requirement
      setPasswordRequirements({
        minLength: watchPassword.length >= 8,
        hasUppercase: /[A-Z]/.test(watchPassword),
        hasLowercase: /[a-z]/.test(watchPassword),
        hasNumber: /[0-9]/.test(watchPassword),
        hasSpecialChar: /[@$!%*?&]/.test(watchPassword),
      });
    }
  }, [watchPassword]);

  const onSubmit = async (data: IFormLogin) => {
    try {
      setIsLoading(true);
      setLoginError(null);
      setLoginSuccess(null);
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock authentication logic
      if (data.email === "user@example.com" && data.password === "Test@123") {
        setLoginSuccess("Login realizado com sucesso!");
        // Here you would typically redirect or set authentication state
      } else {
        setLoginError("Credenciais inválidas. Por favor, verifique seu e-mail e senha.");
      }
    } catch (error) {
      setLoginError("Ocorreu um erro ao processar o login. Por favor, tente novamente.");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          {loginError && <ErrorText>{loginError}</ErrorText>}
          {loginSuccess && <SuccessText>{loginSuccess}</SuccessText>}
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input
              name="email"
              placeholder="Email"
              control={control}
              errorMessage={errors?.email?.message}
              type="email"
              autoComplete="email"
              disabled={isLoading}
            />
            <Spacing />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              control={control}
              errorMessage={errors?.password?.message}
              autoComplete="current-password"
              disabled={isLoading}
            />
            
            {passwordValue.length > 0 && (
              <RequirementsList>
                <RequirementItem isMet={passwordRequirements.minLength}>
                  Mínimo de 8 caracteres
                </RequirementItem>
                <RequirementItem isMet={passwordRequirements.hasUppercase}>
                  Pelo menos uma letra maiúscula
                </RequirementItem>
                <RequirementItem isMet={passwordRequirements.hasLowercase}>
                  Pelo menos uma letra minúscula
                </RequirementItem>
                <RequirementItem isMet={passwordRequirements.hasNumber}>
                  Pelo menos um número
                </RequirementItem>
                <RequirementItem isMet={passwordRequirements.hasSpecialChar}>
                  Pelo menos um caractere especial (@$!%*?&)
                </RequirementItem>
              </RequirementsList>
            )}
            
            <Spacing />
            <Button 
              title={isLoading ? "Entrando..." : "Entrar"} 
              disabled={!isValid || isLoading} 
              type="submit"
            />
          </form>
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
