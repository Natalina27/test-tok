import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {book} from './book';
import Login  from '../components/login';
import { Profile } from '../components/profile';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path={book.login}>
                    <Login />
                </Route>
                <Route exact path={book.profile}>
                    <Profile />
                </Route>
                <Redirect to={book.login}/>
            </Switch>

        </>
    );
};

export default Routes;