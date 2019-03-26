// Import library
import React from 'react';
import PropTypes from 'prop-types';

// Import react semantic ui library
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';

let columnObj = {};
class SemanticTableGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: this.props.columns,
    }
  }

  componentWillMount() {
    console.log(this.state.columns);
  }

  renderColumn = () => {
    const { columns } = this.state;
    const arrColumns = [];
    if (columns && columns.length > 0) {
      let width = 0;
      const columnCustomWidth = columns.filter((col) => col.width !== undefined && col.width !== null);
      if (columnCustomWidth.length > 0) {
        columnCustomWidth.forEach((tmpCol) => {
          if (tmpCol.width && tmpCol.width.endsWith('%')) {
            width += parseFloat(tmpCol.width.split('%')[0]);
          }
        });
      }
      const widthPerColNotCustom = (100 - width) / (columns.length - columnCustomWidth.length);
      columns.forEach((item, idx) => {
        const tmpCol = (
          item.key ?
          <Grid.Column key={item.key ? item.key : idx} style={{ padding: '15px', display: 'inline-block', width: item.width ? item.width : `${widthPerColNotCustom}`}} >
            {item.name}
          </Grid.Column>
          : null);
          if (tmpCol !== null) {
            arrColumns.push(tmpCol);
          }
      });
    }
    return arrColumns;
  }

  renderToGrid = () => {
    const arrColumns = this.renderColumn();
    let gridTable = (
      <Grid celled>
        <Grid.Row style={{ background: '#ccc' }}>
          {arrColumns}
        </Grid.Row>
        <Grid.Row>
          {arrColumns}
        </Grid.Row>
      </Grid>
    );
    return gridTable;
  }

  render() {
    const renderGrid = this.renderToGrid();
    return (
      renderGrid
    );
  }
}

SemanticTableGrid.propTypes = {
  columns: PropTypes.array,
}

export default SemanticTableGrid;
