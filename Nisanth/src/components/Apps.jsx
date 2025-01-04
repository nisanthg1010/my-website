import { BrowserRouter, Route, Routes } from 'react-router-dom'
import User from './user';
import Createuser from './Createuser';
import Updateuser from './updateuser';

const Apps = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<User />} />
                <Route path="/create" element={<Createuser />} />
                <Route path="/update/:id" element={<Updateuser />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Apps;