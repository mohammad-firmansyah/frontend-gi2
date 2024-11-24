import { Routes,Route, createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home'
import { Blog } from '../pages/Blog';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import { Admin } from '../pages/admin/Admin';
import ProtectedRoute from '../components/ProtectedRoute';
import { globalState } from '../state/global/global.atom';
import { useRecoilState } from 'recoil';

export const BaseRoutes = () =>  {

    

    
}
export default BaseRoutes
    // return (
    //     <>
    //     <Routes >
    //             <Route path="/" element={<Home />} />
    //             <Route path="/blogs" element={<Blog />} />
    //             <Route path="/login" element={<Login />} />
    //             <Route path="/admin" element={<ProtectedRoute isAuthenticated={global.token}></ProtectedRoute>} children={
    //                 <Admin />
    //             }/>
    //             <Route path="/*" element={<NotFound />} />
    //     </Routes>
    //     </>
    // )
// }
    