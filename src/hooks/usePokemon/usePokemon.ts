import { useRouter } from "next/router";
import { useCallback } from "react";
import modalMessages from "../../modals/modalMessages";

import {
  setIsErrorModalActionCreator,
  setIsLoadingActionCreator,
  setIsSuccessModalActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";
import {
  addUserPokemonActionCreator,
  deleteUserPokemonActionCreator,
  getPokemonDetailActionCreator,
  loadUserPokemonActionCreator,
} from "../../store/features/userPokemon/pokemonSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { routes } from "../routes";
import {
  GetPokemonDetailResponse,
  NewUserPokemonResponse,
  UserPokemonListResponse,
} from "../types";

interface UsePokemon {
  getUserPokemonList: () => void;
  deleteUserPokemon: (userPokemonId: string) => void;
  createUserPokemon: (newUserPokemonData: FormData) => void;
  getPokemonDetail: (pokemonId: string) => void;
}

const {
  pokemon: {
    pokemonPath,
    endpoints: { deletePokemon, createPokemon },
  },
} = routes;

const {
  gettingPokemonError,
  deletingPokemon,
  creatingPokemon,
  gettingDetailError,
} = modalMessages;

const usePokemon = (): UsePokemon => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { token } = useAppSelector(({ user }) => user);

  const getUserPokemonList = useCallback(async () => {
    try {
      dispatch(setIsLoadingActionCreator());
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}${pokemonPath}`
      );

      if (!response.ok) {
        throw new Error(gettingPokemonError);
      }

      const { pokemon: pokemonList }: UserPokemonListResponse =
        await response.json();

      dispatch(loadUserPokemonActionCreator(pokemonList));

      dispatch(unsetIsLoadingActionCreator());
    } catch (error: unknown) {
      dispatch(unsetIsLoadingActionCreator());

      dispatch(setIsErrorModalActionCreator((error as Error).message));
    }
  }, [dispatch]);

  const getPokemonDetail = async (pokemonId: string) => {
    try {
      dispatch(setIsLoadingActionCreator());
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}${pokemonPath}/${pokemonId}`
      );

      if (!response.ok) {
        throw new Error(gettingDetailError);
      }

      const { pokemon }: GetPokemonDetailResponse = await response.json();

      dispatch(getPokemonDetailActionCreator(pokemon));
      dispatch(unsetIsLoadingActionCreator());
    } catch (error) {
      dispatch(unsetIsLoadingActionCreator());
      dispatch(setIsErrorModalActionCreator((error as Error).message));
    }
  };

  const deleteUserPokemon = async (userPokemonId: string) => {
    try {
      dispatch(setIsLoadingActionCreator());

      const response = await fetch(
        `${process.env
          .NEXT_PUBLIC_URL_API!}${pokemonPath}${deletePokemon}${userPokemonId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(deletingPokemon.error);
      }

      dispatch(deleteUserPokemonActionCreator(userPokemonId));
      dispatch(unsetIsLoadingActionCreator());
      dispatch(setIsSuccessModalActionCreator(deletingPokemon.sucess));
    } catch (error: unknown) {
      dispatch(setIsErrorModalActionCreator((error as Error).message));
    }
  };

  const createUserPokemon = async (newUserPokemonData: FormData) => {
    try {
      dispatch(setIsLoadingActionCreator());

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API!}${pokemonPath}${createPokemon}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: newUserPokemonData,
        }
      );

      const { pokemon: newUserPokemon }: NewUserPokemonResponse =
        await response.json();

      if (!response.ok) {
        throw new Error(creatingPokemon.error);
      }
      dispatch(addUserPokemonActionCreator(newUserPokemon));
      dispatch(unsetIsLoadingActionCreator());
      dispatch(setIsSuccessModalActionCreator(creatingPokemon.sucess));
    } catch (error) {
      dispatch(setIsErrorModalActionCreator((error as Error).message));
      dispatch(unsetIsLoadingActionCreator());
    }
  };
  return {
    getUserPokemonList,
    deleteUserPokemon,
    createUserPokemon,
    getPokemonDetail,
  };
};

export default usePokemon;
