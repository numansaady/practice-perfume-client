import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  let errorMsg;
  if (error || error1) {
    errorMsg = (
      <div>
        <p>
          Error: {error?.message} {error1?.message}
        </p>
      </div>
    );
  }
  
  if (loading) {
    return <Loading></Loading>;
  }

  if (user || user1) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <p className="text-center text-danger">{errorMsg}</p>
      <div className="d-flex align-items-center w-50 mx-auto">
        <div style={{ height: "1px" }} className="w-50 bg-secondary"></div>
        <p className="pt-2 px-3">or</p>
        <div style={{ height: "1px" }} className="w-50 bg-secondary"></div>
      </div>
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary d-block mx-auto mb-3 w-50"
        >
          <FontAwesomeIcon icon={faGoogle} /> Google Sign In
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-primary d-block mx-auto mb-3 w-50"
        >
          <FontAwesomeIcon icon={faGithub} /> Github Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
