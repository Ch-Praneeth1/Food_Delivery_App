import { createContext } from "react";

const UserContext = createContext({
    userLogedIn : "Default User",
})

export default UserContext;