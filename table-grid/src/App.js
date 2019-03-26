import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SemanticTableGrid from './components/semantic-table-grid';
import { Grid } from 'semantic-ui-react';

class App extends Component {
  render() {
    const columns = [
      { key: 'id', name: 'Id', sortable: true, width: '10%' },
      { key: 'code', name: 'Code', sortable: true, width: '10%' },
      { key: 'name', name: 'Name', sortable: true, width: '10%' },
      { key: 'address', name: 'Address', sortable: true },
      { key: 'number', name: 'Number', sortable: true },
      { key: 'actions', name: 'action', sortable: true, width: '10%' },
    ];
    return (
      <>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={4}>
              <SemanticTableGrid
                columns={columns}
              />
            </Grid.Column>
            <Grid.Column width={12}></Grid.Column>
          </Grid.Row>
        </Grid>


      </>
    );
  }
}

export default App;
