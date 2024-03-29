import RegisterForm from "../../components/RegisterForm/RegisterForm";
import Link from "next/link";
import { secondaryFont } from "../../styles/fonts";
import AuthenticationPageStyled from "../../styles/shared/AuthenticationPageStyled";

const RegisterPage = (): React.ReactElement => {
  return (
    <AuthenticationPageStyled>
      <RegisterForm />
      <div className={`${secondaryFont.className} page__link`}>
        <span>Already have an account? </span>
        <Link href="/login">Log in</Link>
      </div>
    </AuthenticationPageStyled>
  );
};

export default RegisterPage;
