import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Layout from '../components/Layout';

const AppRoute: React.FC = () => {
  return (
      <Layout>
          <Switch>
            <Route 
                path="/dashboard"
                component={Dashboard} 
                exact    
            />
        </Switch>
      </Layout>
  );
}

export default AppRoute;