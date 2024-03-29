import PokemonList from "../../components/PokemonList/PokemonList";
import { mockUserPokemonList as mockUserPokemonList } from "../../mocks/pokemonMocks/pokemonMock";
import {
  addFilterActionCreator,
  addUserPokemonActionCreator,
  deleteUserPokemonActionCreator as addFilteActionCreator,
  loadUserPokemonActionCreator,
  pokemonReducer,
} from "../../store/features/userPokemon/pokemonSlice";
import {
  UserPokemon,
  UserPokemonList,
  UserPokemonState,
} from "../../store/features/userPokemon/types";

describe("Given the pokemonReducer reducer", () => {
  describe("When it receives the action to loadPokemon and a list of two pokemon", () => {
    test("Then it should change pokemonListState to a list of this two pokemon", () => {
      const currentUserPokemonState: UserPokemonState = {
        pokemonList: [],
        filter: "",
      };

      const loadUserPokemonAction =
        loadUserPokemonActionCreator(mockUserPokemonList);

      const newUserPokemonState = pokemonReducer(
        currentUserPokemonState,
        loadUserPokemonAction
      );

      expect(newUserPokemonState.pokemonList).toStrictEqual(
        mockUserPokemonList
      );
    });
  });

  describe("When it receives the action to delete the first pokemon on the list: 'Pokamion' with id: '1', and a list of two pokemon", () => {
    test("Then it should return the list of Pokémon with Pokamion deleted", () => {
      const currentUserPokemonState: UserPokemonState = {
        pokemonList: mockUserPokemonList,
        filter: "",
      };
      const expectedUserPokemonListState: UserPokemonList = [
        mockUserPokemonList[1],
      ];

      const deleteUserPokemonAction = addFilteActionCreator(
        mockUserPokemonList[0].id
      );

      const newUserPokemonState = pokemonReducer(
        currentUserPokemonState,
        deleteUserPokemonAction
      );

      expect(newUserPokemonState.pokemonList).toStrictEqual(
        expectedUserPokemonListState
      );
    });
  });

  describe("When it receives the action to add a new pokemon named 'Pokamion 2', and a list of two pokemon", () => {
    test("Then it should return the list of Pokémon with 'Pokamion' in it", () => {
      const newUserPokemon: UserPokemon = {
        id: "3",
        name: "Pokamion 2",
        types: ["Water", "Rock"],
        ability: "Loco",
        height: "2",
        weight: "3",
        baseExp: "4",
        imageUrl: "/pokamion2.png",
        backupImageUrl:
          "https://whvdnqxlctrpqnppjuwd.supabase.co/storage/v1/object/public/pokemon/pokamion2.webp",
        createdBy: "63fa113cda52dff28b261e0a",
      };
      const currentUserPokemonState: UserPokemonState = {
        pokemonList: mockUserPokemonList,
        filter: "",
      };

      const expectedUserPokemonListState: UserPokemonList = [
        mockUserPokemonList[0],
        mockUserPokemonList[1],
        newUserPokemon,
      ];

      const addUserPokemonAction = addUserPokemonActionCreator(newUserPokemon);

      const newUserPokemonState = pokemonReducer(
        currentUserPokemonState,
        addUserPokemonAction
      );

      expect(newUserPokemonState.pokemonList).toStrictEqual(
        expectedUserPokemonListState
      );
    });
  });

  describe("When it receives the action to add a filter and a payload: 'Water'", () => {
    test("The it should change filter property on user pokemon state to 'Water'", () => {
      const currentUserPokemonState: UserPokemonState = {
        pokemonList: mockUserPokemonList,
        filter: "",
      };
      const expectedFilterState = "Water";

      const addFilterAction = addFilterActionCreator(expectedFilterState);

      const newUserPokemonState = pokemonReducer(
        currentUserPokemonState,
        addFilterAction
      );

      expect(newUserPokemonState.filter).toStrictEqual(expectedFilterState);
    });
  });
});
