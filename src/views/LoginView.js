import { LoginForm } from "components/LoginForm/LoginForm";
import {Helmet} from "react-helmet";

export default function LoginView() {
    return (
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </div>
    );
  }