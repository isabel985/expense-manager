import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SideNav from './components/misc/SideNav';
import Inbox from './containers/Inbox';
import Expenses from './containers/Expenses';
import ExpenseNew from './containers/ExpenseNew';
import ExpenseEdit from './containers/ExpenseEdit';
import Reports from './containers/Reports';
import ReportNew from './containers/ReportNew';
import ReportEdit from './containers/ReportEdit';
import Settings from './containers/Settings';

function App() {
  return (
    <div className="App">
      <Router>
        <SideNav />
        <Route exact path='/' component={Inbox} />
        <Route path='/inbox' component={Inbox} />
        <Route exact path='/expenses' component={Expenses} />
        <Route path='/expenses/new' component={ExpenseNew} />
        <Route path='/expenses/edit/:id' component={ExpenseEdit} />
        <Route exact path='/reports' component={Reports} />
        <Route path='/reports/new' component={ReportNew} />
        <Route path='/reports/edit/:id' component={ReportEdit} />
        <Route path='/settings' component={Settings} />
      </Router>
    </div>
  );
}

export default App;
