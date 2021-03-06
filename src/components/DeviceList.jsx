import React from 'react';
import {Divider, Menu, Input, Segment} from 'semantic-ui-react';

import {DeviceTable} from './DeviceTable';
import {Filter} from './Filter';

const queryParams = ['_limit','_order','_sort','q','_page'];

export default class DeviceList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      devices: [],
      _sort: 'id',
      _page: 1,
      _order: null,
      _limit: 10,
      q: '',
      totalCount: 0,
      loading: false,
     };
    this.loadData = this.loadData.bind(this);
    this.onChangeLimit = this.onChangeLimit.bind(this);
    this.onSubmitFilter = this.onSubmitFilter.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  directionConverter(order) {
    if (order === 'asc') {
      return 'ascending';
    } else if (order === 'desc') {
      return 'descending';
    } else {
      return null;
    }
  }

  handleSort(clickedColumn) {
    const { _sort, _order } = this.state;

    let newOrder = _order === 'asc' ? 'desc' : 'asc';
    if (_sort !== clickedColumn) {
      newOrder = 'asc';
    }

    this.setState({
      _sort: clickedColumn,
      _page: 1,
      _order: newOrder,
    });

    this.loadData({
      _sort: clickedColumn,
      _page: 1,
      _order: newOrder,
    });
  }

  componentDidMount() {
    this.loadData({});
  }

  onChangeLimit(event, data) {
    if (data.value !== this.state._limit) {
      this.setState({ _limit: data.value, _page: 1  });
      this.loadData({ _limit: data.value, _page: 1  });
    }
  }

  onSubmitFilter(filter) {
    if (filter !== this.state.q) {
      this.setState({ q: filter, _page: 1, loading: true });
      this.loadData({ q: filter, _page: 1 });
    }
  }

  onChangePage(event, data) {
    const {activePage} = data;
    if (activePage !== this.state._page) {
      this.setState({ _page: activePage });
      this.loadData({ _page: activePage });
    }
  }

  addFavorite(device) {
    device.favorite = !device.favorite;
    fetch(`/api/v1/devices/${device.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(device),
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          const devices = this.state.devices.slice();
          for (let i = 0; i < devices.length; ++i) {
            if (devices[i].id === data.id) {
              devices[i] = data;
              break;
            }
          }

          this.setState({ devices: devices });
        })
      } else {
        response.json().then(error => {
          console.log(`Failed to load data: ${error.message}`);
        });
      }
    })
  }

  loadData(params) {
    const current = this.state;
    queryParams.forEach(function(element) {
      if (!(element in params)) {
        params[element] = current[element];
      }
    });

    const esc = encodeURIComponent;
    const query = Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&');

    // Make a request without limit first to get the total number of data.
    let totalCountQuery = '';
    if (params.q !== "") {
      totalCountQuery = `q=${params.q}`;
    }

    fetch(`/api/v1/devices?${totalCountQuery}`).then(response => {
      if (response.ok) {
        response.json().then(data => {
          this.setState({ totalCount: data.length });
        })
      } else {
        response.json().then(error => {
          console.log(`Failed to load data: ${error.message}`);
        });
      }
      this.setState({loading: false});
    });

    fetch('/api/v1/devices?' + query).then(response => {
      if (response.ok) {
        response.json().then(data => {
          this.setState({ devices: data });
        })
      } else {
        response.json().then(error => {
          console.log(`Failed to load data: ${error.message}`);
        });
      }
      this.setState({loading: false});
    })
  }

  render() {
    return (
      <Segment>
        <Menu>
          <Menu.Item position='left'>
            <Filter
              filter = { this.state.q }
              totalCount = {this.state.totalCount }
              onSubmitFilter = { this.onSubmitFilter }
              loading = { this.state.loading }
            />
          </Menu.Item>

        </Menu>
      <Divider/>
        <DeviceTable
          devices = { this.state.devices }
          totalCount = {this.state.totalCount }
          totalPages = { Math.ceil(this.state.totalCount / this.state._limit) }
          currentPage = { this.state._page }
          onChangePage = { this.onChangePage }
          addFavorite = { this.addFavorite }
          column = { this.state._sort }
          direction = { this.directionConverter(this.state._order) }
          handleSort = { this.handleSort }
          onChangeLimit = { this.onChangeLimit }
          limit = { this.state._limit.toString() }
        />
      </Segment>
    )
  }
}
