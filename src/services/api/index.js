/* eslint-disable prettier/prettier */
import axios from 'axios';

export const key = "c3b1b52cdf7f13eb16dbe7613e8f2741d94c2f552ab6385adfdd6921ace1ed5c"

export const api = axios.create({
  baseURL:'https://min-api.cryptocompare.com/data/'
})