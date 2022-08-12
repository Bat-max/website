import { StyledButton, Loader } from "./styles";
import Image from "next/image";

const Button = ({
  onClick,
  type = "regular",
  color = "primary",
  disabled,
  children,
  style,
  isSubmitting,
  href,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      color={color}
      disabled={disabled || isSubmitting}
      style={style}
      isSubmitting={isSubmitting}
      href={href}
    >
      {children}
      {isSubmitting && (
        <Loader>
          <Image src="/form-loader.svg" width={60} height={60} alt="" />
        </Loader>
      )}
    </StyledButton>
  );
};

export default Button;
