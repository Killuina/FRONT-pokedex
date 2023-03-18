import { secondaryFont } from "../../styles/fonts";
import FormStyled from "../LoginForm/FormStyled";

const CreatePokemonForm = (): JSX.Element => {
  return (
    <FormStyled className={`${secondaryFont.className} form`}>
      <label htmlFor="name">Name</label>
      <input
        className="form__field"
        type="text"
        autoComplete="off"
        id="name"
      ></input>
      <label htmlFor="first-type">First type</label>
      <select className="form__field" id="first-type">
        <option value="">None</option>
        <option value="Water">Water</option>
        <option value="Ice">Ice</option>
        <option value="Poison">Poison</option>
        <option value="Fairy">Fairy</option>
        <option value="Grass">Grass</option>
        <option value="Fire">Fire</option>
        <option value="Ground">Ground</option>
        <option value="Dragon">Dragon</option>
        <option value="Electric">Electric</option>
        <option value="Bug">Bug</option>
        <option value="Dark">Dark</option>
        <option value="Fighting">Fighting</option>
        <option value="Flying">Flying</option>
        <option value="Ghost">Ghost</option>
        <option value="Psychic">Psychic</option>
        <option value="Rock">Rock</option>
        <option value="Steel">Steel</option>
        <option value="Normal">Normal</option>
      </select>
      <label htmlFor="first-type">Second type</label>
      <select className="form__field" id="first-type">
        <option value="">None</option>
        <option value="Water">Water</option>
        <option value="Ice">Ice</option>
        <option value="Poison">Poison</option>
        <option value="Fairy">Fairy</option>
        <option value="Grass">Grass</option>
        <option value="Fire">Fire</option>
        <option value="Ground">Ground</option>
        <option value="Dragon">Dragon</option>
        <option value="Electric">Electric</option>
        <option value="Bug">Bug</option>
        <option value="Dark">Dark</option>
        <option value="Fighting">Fighting</option>
        <option value="Flying">Flying</option>
        <option value="Ghost">Ghost</option>
        <option value="Psychic">Psychic</option>
        <option value="Rock">Rock</option>
        <option value="Steel">Steel</option>
        <option value="Normal">Normal</option>
      </select>
      <label htmlFor="ability">Ability</label>
      <input
        className="form__field"
        type="text"
        autoComplete="off"
        id="ability"
      ></input>
      <label htmlFor="height">Height</label>
      <input
        className="form__field"
        type="text"
        autoComplete="off"
        id="height"
      ></input>
      <label htmlFor="weight">Weight</label>
      <input
        className="form__field"
        type="text"
        autoComplete="off"
        id="weight"
      ></input>
      <label htmlFor="base-exp">Base exp</label>
      <input
        className="form__field"
        type="text"
        autoComplete="off"
        id="base-exp"
      ></input>
      <span id="image-label">Image</span>
      <label
        aria-labelledby="image-label"
        htmlFor="image"
        className="form__image-field"
      >
        Choose file
        <svg
          width="23"
          height="19"
          viewBox="0 0 23 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.20833 0H3.125V3H0V5H3.125V8H5.20833V5H8.33333V3H5.20833V0ZM17.7081 0.999985H15.6247V1H10.4167V3H15.6247V4.99998H15.625V5H20.8331V17H5.20833V10H3.125V17V19H5.20833H22.9167V17H22.9164V5H22.9167V3H22.9164V2.99998H20.8331V3H17.7083V1H17.7081V0.999985ZM10.4169 7H14.5836V9L16.6667 9V13H14.5836V15H10.4169V13H14.5833V9L10.4169 9V7ZM8.33333 9H10.4167V13H8.33333V9Z"
            fill="black"
          />
        </svg>
        <input type="file" id="image" />
      </label>
      <button className="form__button">Create Pokémon</button>
    </FormStyled>
  );
};

export default CreatePokemonForm;
