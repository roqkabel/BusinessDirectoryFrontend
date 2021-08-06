import AuthLayout from "@/components/AuthLayout";
import PageTitle from "@/components/MetaHead";
import ForgotPassword from "@/modules/Auth/ForgotPassword";

const forgotPasswordPage = () => {
  return (
    <div>
      <AuthLayout>
        <PageTitle title="Forgot Password" />
        <div>
          <ForgotPassword />
        </div>
      </AuthLayout>
    </div>
  );
};

export default forgotPasswordPage;
