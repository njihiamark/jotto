import checkPropTypes from "check-prop-types";
import { createStore } from "redux";

import rootReducer from '../src/reducers';

/**
 * Create a testing store with imported reducers, middleware and initial state.
 * globals: rootReducer.
 * @function storeFactory
 * @param {object} initialState - initial state for store
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};

/**
 * Returns node(s) with given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {String} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper} - returns shallow wrapper
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
