import React from 'react';
import { connect } from 'react-redux';

// Page component to bind props and dispatchers to
import Home from './Home';

// Component actions
import {
  loadAllItems,
  addItem,
  editItem,
  deleteItem
} from './Home-actions'

const mapStateToProps = (state) => {
  const sectionState = state.HomeReducer;
  return {
    items: sectionState.items
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    loadAllItems: (items) => {
      dispatch(loadAllItems(items))
    },
    addItem: (item) => {
      dispatch(addItem(item))
    },
    editItem: (item) => {
      dispatch(editItem(item))
    },
    deleteItem: (item) => {
      dispatch(deleteItem(item))
    }
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
