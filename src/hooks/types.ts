import { JwtPayload } from "jwt-decode";
import {
  UserPokemon,
  UserPokemonList,
} from "../store/features/userPokemon/types";

export interface UserLoginCredentials {
  username: string;
  password: string;
}

export interface UserCredentials extends UserLoginCredentials {
  email: string;
}

export interface LoginResponse {
  token: string;
}

export interface UserPokemonListResponse {
  pokemon: UserPokemonList;
}

export interface NewUserPokemonResponse {
  pokemon: UserPokemon;
}

export interface DeletePokemonResponse {
  message: string;
}

export interface GetPokemonDetailResponse {
  pokemon: UserPokemon;
}

export interface CustomJwtPayload extends JwtPayload {
  sub: string;
  username: string;
}
