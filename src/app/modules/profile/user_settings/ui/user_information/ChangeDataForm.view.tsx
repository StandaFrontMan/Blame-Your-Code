import EmailChangeFieldContanier from "./email_change/EmailChangeField.contaneir";
import PasswordChangeFieldContanier from "./password_change/PasswordChangeField.contanier";
import UsernameChangeFieldContanier from "./username_change/UsernameChangeField.container";

export default function ChangeDataFormView() {
  return (
    <div className="flex-auto my-5 px-5">
      <h2 className="text-2xl font-medium text-green-500 px-2 my-2">
        Information
      </h2>
      <div className="w-1/2 my-2 bg-gray-900 rounded-xl">
        <EmailChangeFieldContanier />
      </div>
      <div className="w-1/2 my-2 bg-gray-900 rounded-xl">
        <UsernameChangeFieldContanier />
      </div>
      <div className="w-1/2 my-2 bg-gray-900 rounded-xl">
        <PasswordChangeFieldContanier />
      </div>
    </div>
  );
}
