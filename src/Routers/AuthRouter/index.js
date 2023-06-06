import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../../screens/Auths/Login/'
import ForgetPassword from '../../screens/Auths/ForgetPassword';
import NewPassword from '../../screens/Auths/NewPassword';
import PasswordVerificationCode from '../../screens/Auths/PasswordVerificationCode';
import Dashboard from '../../screens/AdminScreens/Dashboard';
import BusinessManagement from '../../screens/AdminScreens/BusinessManagement';
import BusinessProfile from '../../screens/AdminScreens/BusinessManagement/businessProfile';
import BusinessAdd from '../../screens/AdminScreens/BusinessManagement/businessAdd';
import ArtistManagement from '../../screens/AdminScreens/ArtistManagement';
import ArtistProfile from '../../screens/AdminScreens/ArtistManagement/artistProfile';
import ArtistSkillAdd from '../../screens/AdminScreens/ArtistManagement/ArtistSkillAdd';
import PaymentLogs from '../../screens/AdminScreens/PaymentLogs';
import FeedbackManagement from '../../screens/AdminScreens/FeedbackManagement';
import FeedbackDetails from '../../screens/AdminScreens/FeedbackManagement/feedbackDetails';
import PushNotifications from '../../screens/AdminScreens/PushNotifications';
import ViewProfile from '../../screens/AdminScreens/Profile/ViewProfile';
import EditProfile from '../../screens/AdminScreens/Profile/EditProfile';
import ChangePassword from '../../screens/AdminScreens/Profile/ChangePassword';
import Notifications from '../../screens/AdminScreens/Notifications';
import AuthGuard from "../../Config/AuthGuard";

function AuthRouth() {
  return (
    <BrowserRouter basename='/bartlee'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/PasswordVerificationCode" element={<PasswordVerificationCode />} />
        <Route path="/NewPassword" element={<NewPassword />} />

        <Route path="/Dashboard" element={<AuthGuard Component={Dashboard} />}  />

        <Route path="/BusinessManagement" element={<AuthGuard Component={BusinessManagement} /> } />
        <Route path="/businessProfile/:id" element={<BusinessProfile/>}/>
        <Route path="/businessAdd" element={<BusinessAdd/>}/>

        <Route path="/ArtistManagement" element={<AuthGuard Component={ArtistManagement }/>}/>
        <Route path="/artistProfile/:id" element={<AuthGuard Component={ ArtistProfile}/>}/>
        <Route path="/ArtistSkillAdd" element={<AuthGuard Component={ArtistSkillAdd}/>}/>

        <Route path="/PaymentLogs" element={<AuthGuard Component={PaymentLogs }/>}/>

        <Route path="/FeedbackManagement" element={< AuthGuard Component={FeedbackManagement}/>}/>
        <Route path="/feedbackDetails/:id" element={< AuthGuard Component={FeedbackDetails}/>}/>

        <Route path="/PushNotifications" element={<PushNotifications/>}/>

        <Route path="/AdminScreens/ViewProfile" element={<AuthGuard Component={ViewProfile } />} />
        <Route path="EditProfile" element={< AuthGuard Component={EditProfile }/>} />
        <Route path="ChangePassword" element={< AuthGuard Component={ChangePassword }/>} />
        <Route path="Notifications" element={<AuthGuard Component={Notifications} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AuthRouth
