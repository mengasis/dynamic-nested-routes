import React from 'react';
import { Route, Redirect } from 'react-router-dom'


const plantRoutes = {
    path: '/',
};

const branchRoutes = {
    path: '/plants/:plantId/branches',
    goNavigation: (plantId) => `plants/${plantId}/branches`,
    goPlants: '../..'
};

const customersRoutes = {
    path: '/plants/:plantId/branches',
    goNavigation: (branchId) => `branches/${branchId}`,
    goPlants: '../../..',
    goBranch: '.'
};

const Plants = (props) => {

    return <div>
        <span style={{color: 'red', cursor: 'pointer'}}
              onClick={() => props.history.push({pathname: branchRoutes.goNavigation(2)})}> {'> Sucursal 2'}</span>
        <h2>Plants</h2>
    </div>
};

const Branches = (props) => {

    if(props.location.pathname.includes('bo')) return <Redirect to='branches/6' />

    return <div>
        <span style={{color: 'green', cursor: 'pointer'}}
              onClick={() => props.history.push({pathname: customersRoutes.goNavigation(6)})}> {'> Ir a clientes'}</span>
        <span style={{color: 'yellow', cursor: 'pointer'}}
              onClick={() => props.history.push({pathname: branchRoutes.goPlants})}> {'> Ir a Plantas'}</span>
        <h2>Branches Nº{props.match.params.plantId}</h2>
    </div>
};

const Customers = (props) => {
    return <div>
        <span style={{color: 'yellow', cursor: 'pointer'}}
              onClick={() => props.history.push({pathname: customersRoutes.goPlants})}> {'> Ir a Plantas'}</span>
        <span style={{color: 'red', cursor: 'pointer'}}
              onClick={() => props.history.push({pathname: customersRoutes.goBranch})}> {'> Ir a Sucursales'}</span>

        <h2>Customers Plants Nº{props.match.params.plantId} - Branch Nº{props.match.params.branchId}</h2>
    </div>
};


const Sales = (props) => {

    return (
        <div>
            <span>HELLO</span>
            <h1>{props.match.path}</h1>

                <Route exact path={`${props.match.url}/`} component={Plants}/>
                <Route exact path={`${props.match.url}/plants/:plantId/branches`} component={Branches}/>
                <Route exact path={`${props.match.url}/plants/:plantId/branches/:branchId`} component={Customers}/>
        </div>
    );
};

Sales.propTypes = {

};

export default Sales;
