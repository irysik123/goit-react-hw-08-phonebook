import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUsername, selectIsRefreshing } from "redux/auth/auth-selectors";

export const useAuth = () => {
    return {
        isLoggedIn: useSelector(selectIsLoggedIn),
        isRefreshing: useSelector(selectIsRefreshing),
        user: useSelector(selectUsername),
    }
}