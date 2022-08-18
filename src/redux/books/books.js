import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import uuid from 'uuid-js';

const ADDING = 'book-store-react/books/ADDING';
const REMOVING = 'book-store-react/books/REMOVING';
const LODING = 'book-store-react/books/LODING';

const appId = 't6wT84TuMQse8pHsb6Fm';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

export const loadBook = createAsyncThunk(LODING, async () => {
  const response = await axios.get(`${url}/${appId}/books/`);

  const res = response.data;
  const spData = Object.keys(res).map((key) => ({
    id: key,
    ...res[key][0],
  }));

  return spData;
});

export const addBook = createAsyncThunk(ADDING, async (
  { title, author, category },
  thunkAPI,
) => {
  const book = {
    item_id: uuid.create().toString(),
    title,
    author,
    category,
  };

  await axios.post(`${url}/${appId}/books/`, book).then(() => thunkAPI.dispatch(loadBook()));
  const books = thunkAPI.getState().booksList;
  return books;
});

export const removeBook = createAsyncThunk(REMOVING, async (id, thunkAPI) => {
  await axios.delete(`${url}/${appId}/books/${id}`)
    .then(() => thunkAPI.dispatch(loadBook()));
  const books = thunkAPI.getState.booksList;
  return books;
});

const storeSlice = createSlice({
  name: 'book-store-react/books',
  initialState: [],
  extraReducers: {
    [loadBook.fulfilled]: (state, action) => action.payload,
    [addBook.fulfilled]: (state, action) => action.payload,
    [removeBook.fulfilled]: (state, action) => action.payload,
  },
});

export const booksList = (state) => state.bookList;
export default storeSlice.reducer;
