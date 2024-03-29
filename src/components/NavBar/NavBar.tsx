import Link from "next/link";
import useToken from "../../hooks/useToken/useToken";
import { useAppSelector } from "../../store/hooks";
import NavBarStyled from "./NavBarStyled";
import { useRouter } from "next/router";

const NavBar = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  const { removeToken } = useToken();
  const router = useRouter();

  return (
    <NavBarStyled>
      <ul className="navbar">
        <li className="navbar__home">
          <Link href="/" aria-label="to Home page">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 0H12V3H9V6H6V9H3V12H0V15H3V30H13.5V21H16.5V30H27V15H30V12H27V9H24V6H21V3H18V0ZM18 3V6H21V9H24V12H27V15H24V27H19.5V18H10.5V27H6V15H3V12H6V9H9V6H12V3H18Z"
                fill={router.pathname === "/" ? "#b52222" : "#2D3748"}
              />
            </svg>
          </Link>
        </li>
        <li className="navbar__my-pokemon">
          <Link href="/your-pokemon" aria-label="to My Pokémon page">
            <svg
              width="30"
              height="27"
              viewBox="0 0 30 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0H3H27H30V27H27H3H0V0ZM27 24V3H3V24H27ZM9 6H6V9H9V6ZM12 6H24V9H12V6ZM9 12H6V15H9V12ZM12 12H24V15H12V12ZM9 18H6V21H9V18ZM12 18H24V21H12V18Z"
                fill={
                  router.pathname === "/your-pokemon" ? "#b52222" : "#2D3748"
                }
              />
            </svg>
          </Link>
        </li>
        {isLogged && (
          <li className="navbar__create-pokemon">
            <Link href="/create" aria-label="to Create Pokémon page">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.3334 0.666672H15.6667V4.00001V12.3333H27.3334V15.6667H15.6667V24V27.3333H12.3334V24V15.6667H0.666687V12.3333H12.3334V4.00001V0.666672Z"
                  fill={router.pathname === "/create" ? "#b52222" : "#2D3748"}
                />
              </svg>
            </Link>
          </li>
        )}

        {isLogged ? (
          <li className="navbar__logout">
            <button onClick={removeToken} aria-label="Logout">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0H-5.22137e-05V28H0H3.11106H24.8889H28V24.8889V21.7778H24.8889V24.8889H3.11106V3.11111H24.8889V6.22222H28V3.11111V0H24.8889H3.11106H0ZM27.9999 12.4444L24.889 12.4444V9.33334H21.7779V12.4444L6.22212 12.4444V15.5556H27.9999V12.4444ZM21.7779 6.22222H18.6668V9.33333H21.7779V6.22222ZM24.889 15.5556V18.6667L21.7779 18.6667V21.7778H18.6668V18.6667L21.7779 18.6667V15.5556H24.889Z"
                  fill="#2D3748"
                />
              </svg>
            </button>
          </li>
        ) : (
          <li className="navbar__login">
            <Link href="/login" aria-label="to Login page">
              <svg
                width="25"
                height="32"
                viewBox="0 0 25 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.1873 0H7.8124V3.12485H4.68781V12.4997H7.81277V3.12496H17.1873V0ZM17.1873 12.4998H7.8124V15.6248H17.1873V12.4998ZM17.1877 3.12485H20.3127V12.4997H17.1877V3.12485ZM0 21.8745H3.12496V28.1247H21.8751V21.8745H25.0001V31.2494H24.9997V31.2497H0V31.2494V28.1247V21.8745ZM3.125 18.7498H21.8748V21.8748H3.125V18.7498Z"
                  fill={router.pathname === "/login" ? "#b52222" : "#2D3748"}
                />
              </svg>
            </Link>
          </li>
        )}
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
