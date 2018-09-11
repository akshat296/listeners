// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Admin-Lte
import 'admin-lte';
// Admin-Lte Skins
//import 'admin-lte/dist/css/skins/_all-skins.css';

// Admin-Lte JS
//import 'admin-lte/dist/js/adminlte';

// Custom CSS
import './App.css';

//import 'admin-lte';
// React
import React, { Component } from 'react';

import logo from './logo.svg';


class App extends Component {
  render() {
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="box box-default">
        <div className="box-header with-border">
          <h3 className="box-title">Select2</h3>
          <div className="box-tools pull-right">
            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" /></button>
            <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-remove" /></button>
          </div>
        </div>
        {/* /.box-header */}
        <div className="box-body" style={{}}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Minimal</label>
                <select className="form-control select2 select2-hidden-accessible" style={{width: '100%'}} tabIndex={-1} aria-hidden="true">
                  <option selected="selected">Alabama</option>
                  <option>Alaska</option>
                  <option>California</option>
                  <option>Delaware</option>
                  <option>Tennessee</option>
                  <option>Texas</option>
                  <option>Washington</option>
                </select><span className="select2 select2-container select2-container--default" dir="ltr" style={{width: '100%'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-labelledby="select2-zvew-container"><span className="select2-selection__rendered" id="select2-zvew-container" title="Alabama">Alabama</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
              </div>
              {/* /.form-group */}
              <div className="form-group">
                <label>Disabled</label>
                <select className="form-control select2 select2-hidden-accessible" disabled style={{width: '100%'}} tabIndex={-1} aria-hidden="true">
                  <option selected="selected">Alabama</option>
                  <option>Alaska</option>
                  <option>California</option>
                  <option>Delaware</option>
                  <option>Tennessee</option>
                  <option>Texas</option>
                  <option>Washington</option>
                </select><span className="select2 select2-container select2-container--default select2-container--disabled" dir="ltr" style={{width: '100%'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={-1} aria-labelledby="select2-rfpl-container"><span className="select2-selection__rendered" id="select2-rfpl-container" title="Alabama">Alabama</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
              </div>
              {/* /.form-group */}
            </div>
            {/* /.col */}
            <div className="col-md-6">
              <div className="form-group">
                <label>Multiple</label>
                <select className="form-control select2 select2-hidden-accessible" multiple data-placeholder="Select a State" style={{width: '100%'}} tabIndex={-1} aria-hidden="true">
                  <option>Alabama</option>
                  <option>Alaska</option>
                  <option>California</option>
                  <option>Delaware</option>
                  <option>Tennessee</option>
                  <option>Texas</option>
                  <option>Washington</option>
                </select><span className="select2 select2-container select2-container--default" dir="ltr" style={{width: '100%'}}><span className="selection"><span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={-1}><ul className="select2-selection__rendered"><li className="select2-search select2-search--inline"><input className="select2-search__field" type="search" tabIndex={0} autoComplete="off" autoCorrect="off" autoCapitalize="none" spellCheck="false" role="textbox" aria-autocomplete="list" placeholder="Select a State" style={{width: '567.8px'}} /></li></ul></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
              </div>
              {/* /.form-group */}
              <div className="form-group">
                <label>Disabled Result</label>
                <select className="form-control select2 select2-hidden-accessible" style={{width: '100%'}} tabIndex={-1} aria-hidden="true">
                  <option selected="selected">Alabama</option>
                  <option>Alaska</option>
                  <option disabled="disabled">California (disabled)</option>
                  <option>Delaware</option>
                  <option>Tennessee</option>
                  <option>Texas</option>
                  <option>Washington</option>
                </select><span className="select2 select2-container select2-container--default" dir="ltr" style={{width: '100%'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-labelledby="select2-x6m5-container"><span className="select2-selection__rendered" id="select2-x6m5-container" title="Alabama">Alabama</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
              </div>
              {/* /.form-group */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.box-body */}
        <div className="box-footer" style={{}}>
          Visit <a href="https://select2.github.io/">Select2 documentation</a> for more examples and information about
          the plugin.
        </div>
      </div>
      </div>
    );
  }
}

export default App;
