import { Dispatch } from 'redux';

export const INCREMENT_PART = 'local/INCREMENT_PART';
export const DECREMENT_PART = 'local/DECREMENT_PART';
export const CREATE_PART = 'local/CREATE_PART';

export const incrementPart = (partId: string) => (dispatch: Dispatch<any>) =>
  dispatch({
    type: INCREMENT_PART,
    partId,
  });

export const decrementPart = (partId: string) => (dispatch: Dispatch<any>) =>
  dispatch({
    type: DECREMENT_PART,
    partId,
  });

export const createPart = (partName: string) => (dispatch: Dispatch<any>) =>
  dispatch({
    type: CREATE_PART,
    partName,
  });
