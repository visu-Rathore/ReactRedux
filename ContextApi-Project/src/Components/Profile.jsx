
import React,{useContext} from 'react'
import UserContext from '../Cotext/UserContext'
function Profile() {
    const {User} = useContext(UserContext)
  if (!User) return <div>please login</div>
   return <div>Welcome {User.userName}</div>
}
export default Profile





