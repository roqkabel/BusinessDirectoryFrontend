import AuthLayout from "@/components/AuthLayout";
import PageTitle from "@/components/MetaHead";
import Register from "@/modules/Auth/Register";

const register = () => {
  return (
    <AuthLayout>
      <PageTitle title="Register Your Business" />
      <div>
        <Register />
      </div>
    </AuthLayout>
  );
};

export default register;
