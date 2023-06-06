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

function AuthRouth() {
  return (
    <BrowserRouter basename='/bartlee'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/PasswordVerificationCode" element={<PasswordVerificationCode />} />
        <Route path="/NewPassword" element={<NewPassword />} />

        <Route path="/Dashboard" element={<Dashboard />} />

        <Route path="/BusinessManagement" element={<BusinessManagement/>}/>
        <Route path="/businessProfile/:id" element={<BusinessProfile/>}/>
        <Route path="/businessAdd" element={<BusinessAdd/>}/>

        <Route path="/ArtistManagement" element={<ArtistManagement/>}/>
        <Route path="/artistProfile/:id" element={<ArtistProfile/>}/>
        <Route path="/ArtistSkillAdd" element={<ArtistSkillAdd/>}/>

        <Route path="/PaymentLogs" element={<PaymentLogs/>}/>

        <Route path="/FeedbackManagement" element={<FeedbackManagement/>}/>
        <Route path="/feedbackDetails/:id" element={<FeedbackDetails/>}/>

        <Route path="/PushNotifications" element={<PushNotifications/>}/>

        <Route path="/AdminScreens/ViewProfile" element={<ViewProfile />} />
        <Route path="EditProfile" element={<EditProfile />} />
        <Route path="ChangePassword" element={<ChangePassword />} />
        <Route path="Notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AuthRouth
