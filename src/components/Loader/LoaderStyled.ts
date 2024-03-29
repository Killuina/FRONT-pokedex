import styled from "styled-components";

const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  backdrop-filter: blur(2px);

  .loader {
    display: block;
    position: relative;
    height: 20px;
    width: 140px;
    background-image: linear-gradient(#fff 20px, transparent 0),
      linear-gradient(#fff 20px, transparent 0),
      linear-gradient(#fff 20px, transparent 0),
      linear-gradient(#fff 20px, transparent 0);
    background-repeat: no-repeat;
    background-size: 20px auto;
    background-position: 0 0, 40px 0, 80px 0, 120px 0;
    animation: pgfill 1s linear infinite;
  }

  @keyframes pgfill {
    0% {
      background-image: linear-gradient(#fff 20px, transparent 0),
        linear-gradient(#fff 20px, transparent 0),
        linear-gradient(#fff 20px, transparent 0),
        linear-gradient(#fff 20px, transparent 0);
    }
    25% {
      background-image: linear-gradient(#ff8779 20px, transparent 0),
        linear-gradient(#fff 20px, transparent 0),
        linear-gradient(#fff 20px, transparent 0),
        linear-gradient(#fff 20px, transparent 0);
    }
    50% {
      background-image: linear-gradient(#ff8779 20px, transparent 0),
        linear-gradient(#ff8779 20px, transparent 0),
        linear-gradient(#fff 20px, transparent 0),
        linear-gradient(#fff 20px, transparent 0);
    }
    75% {
      background-image: linear-gradient(#ff8779 20px, transparent 0),
        linear-gradient(#ff8779 20px, transparent 0),
        linear-gradient(#ff8779 20px, transparent 0),
        linear-gradient(#fff 20px, transparent 0);
    }
    100% {
      background-image: linear-gradient(#ff8779 20px, transparent 0),
        linear-gradient(#ff8779 20px, transparent 0),
        linear-gradient(#ff8779 20px, transparent 0),
        linear-gradient(#ff8779 20px, transparent 0);
    }
  }
`;

export default LoaderStyled;
