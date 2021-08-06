import { PAGE_LOGIN } from "@/constants/routes";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { performUserLogout } from "src/redux/features/authSlice";

const index = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutUser = () => {
    dispatch(performUserLogout()).finally(() => {
      router.push(PAGE_LOGIN);
    });
  };

  return (
    <div>
      <p>Dashboard Content Here</p>

      <a onClick={() => logoutUser()}>Logout</a>
    </div>
  );
};

export default index;
