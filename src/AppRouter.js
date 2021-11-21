import React, { lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/util/ScrollToTop';

import HomePage from "./screens/Home/HomePage";
import Login from "./screens/User/Login";
import Registrasi from "./screens/User/Registrasi";
import BankSampah from "./screens/Content/BankSampah";
import DetailBankSampah from "./screens/Content/DetailBankSampah";

//Products
// const Vendor = lazy(() => import("./screens/Products/Vendor"));

//Pages
// const HomePage = lazy(() => import('./screens/Home/HomePage'));
// const Policies = lazy(() => import("./screens/Content/Policies/Policies"));
// const Terms = lazy(() => import("./screens/Content/Policies/Terms"));
// const ContactUs = lazy(() => import("./screens/Others/ContactUs"));
// const AboutUs = lazy(() => import("./screens/Others/AboutUs"));
const NotFound = lazy(() => import("./screens/Others/NotFound"));

//User
// const AuthContainer = lazy(() => import("./screens/User/AuthContainer"));
// const CommsActivations = lazy(() => import("./screens/User/CommsActivations"));
// const ProtectedRoute = lazy(() => import("./components/common/ProtectedRoute"));
// const PasswordResetLink = lazy(() => import("./screens/User/PasswordResetLink"));
// const ChangePassword = lazy(() => import("./screens/User/ChangePassword"));
// const AccountInformation = lazy(() => import("./screens/Registration/AccountInformation"));
// const Onboarding = lazy(() => import("./screens/Registration/Onboarding"));

//Content
// const HowPellerexWorks = lazy(() => import("./screens/Content/Blog/Posts/Pellerex-Overview"));
// const BlogList = lazy(() => import("./screens/Content/Blog/BlogList"));
// const UrlRewrite = lazy(() => import("./screens/Content/Blog/Posts/API/UrlRewrite"));

const AppRouter = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Switch>
                <Route exact path="/" >
                    <HomePage />
                </Route>

                {/*User*/}
                <Route path="/login" component={Login} />
                <Route path="/registrasi" component={Registrasi} />
                <Route path="/bank-sampah" component={BankSampah} />
                <Route path="/bank-sampah/:id" component={DetailBankSampah} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;