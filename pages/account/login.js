import AuthLayout from "@/components/AuthLayout";
import PageTitle from "@/components/MetaHead";
import Login from "@/modules/Auth/Login";

const login = () => {
  return (
    <AuthLayout>
      <PageTitle title="Login" />
      <div>
        <Login />
      </div>
    </AuthLayout>
  );
};

export default login;
