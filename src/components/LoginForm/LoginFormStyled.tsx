import styled from "styled-components";

const FormStyled = styled.form`
  font-weight: ${(props) => props.theme.fonts.weights.semiBold};
  color: ${(props) => props.theme.fonts.colors.dark};
  display: flex;
  flex-direction: column;
  padding: 1.875rem;
  width: 100%;
  gap: 0.5rem;

  .form {
    &__field {
      display: block;
      margin-bottom: ${(props) => props.theme.paddings.medium};
      border-radius: ${(props) => props.theme.border.radius};
    }

    &__button {
      font-weight: ${(props) => props.theme.fonts.weights.semiBold};
      border-radius: ${(props) => props.theme.border.radius};
      padding: 0.75rem;
      color: ${(props) => props.theme.fonts.colors.white};
      background-color: ${(props) => props.theme.colors.buttonColor};
      box-shadow: ${(props) => props.theme.colors.buttonColor} 0px 6px 12px -2px;
    }

    &__button:disabled {
      box-shadow: none;
      background-color: ${(props) => props.theme.colors.disabledButtonColor};
    }
  }
`;

export default FormStyled;
