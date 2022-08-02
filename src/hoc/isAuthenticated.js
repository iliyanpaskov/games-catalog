import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.js";

export const isAuthenticated = (Component) => {
    const WrappedComponent = (props) => {
        const { isAuthenticated, user } = useContext(AuthContext);
        const historyHook = useHistory();
        
        if (!isAuthenticated) {
            historyHook.push("/login");
            return null;
        }
        return (
            <Component {...props} user={user} />
        );
    }

    return WrappedComponent;

}