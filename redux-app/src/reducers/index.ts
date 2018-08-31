import { combineReducers } from "redux";
import { clickerReducer } from "./clicker.reducer";
import { signInReducer } from "./sign-in.reducer";
import { chuckNorrisReducer } from "./chuck-norris.reducer";
import { PokemonSprite } from "../model/PokemonSprite";
import { pokemonReducer } from "./pokemon-reducer";
import { ticTacReducer } from "./tic-tac.reducer";

export interface IChuckNorrisState {
  buyJokeEnabled: boolean,
  joke: string,
}

export interface ITicTacState{
  board: string [][],
  playerTurn: boolean,
  winner: boolean
}

export interface IClickerState {
  clicks: number
}

export interface IPokemonState {
  pokeId: number,
  pokemon: {
    name: string,
    sprites: PokemonSprite[]
  } | null
}

export interface ISignInState {
  credentials: {
    password: string,
    username: string
  },
  errorMessage: string
}

export interface IState {
  chuckNorris: IChuckNorrisState,
  clicker: IClickerState,
  pokemon: IPokemonState,
  signIn: ISignInState,
  ticTac: ITicTacState
}

export const state = combineReducers<IState>({
  chuckNorris: chuckNorrisReducer,
  clicker: clickerReducer,
  pokemon: pokemonReducer,
  signIn: signInReducer,
  ticTac: ticTacReducer
})