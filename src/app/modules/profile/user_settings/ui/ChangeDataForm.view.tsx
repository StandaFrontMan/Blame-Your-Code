import EmailChangeFieldContanier from "./email_change/EmailChangeField.contaneir";
import PasswordChangeFieldContanier from "./password_change/PasswordChangeField.contanier";
import UsernameChangeFieldContanier from "./username_change/UsernameChangeField.container";

export default function ChangeDataFormView() {
  return (
    <div>
      <div>
        <EmailChangeFieldContanier />
      </div>
      <div>
        <UsernameChangeFieldContanier />
      </div>
      <div>
        <PasswordChangeFieldContanier />
      </div>
    </div>
  );
}
