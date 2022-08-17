import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import uuid from 'uuid-js';

const ADDING = 'book-store-react/books/ADDING';
const REMOVING = 'book-store-react/books/REMOVING';
const LODING = 'book-store-react/books/LODING'

const appId = 't6wT84TuMQse8pHsb6Fm';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps'
//uuid.create().toString()

export const loadBook = createAsyncThunk(LODING, async ()=>{
  const response = await axios.get(url + "/" + appId +"/books/")

  const res = response.data;
  const spData = Object.keys(res).map((key)=> ({
    id:key,
    ...res[key][0],
  }));

  return spData
})

