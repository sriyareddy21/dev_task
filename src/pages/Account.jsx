import Header from "../components/Header";
import StepIndicator from "../components/StepIndicator";

const Account = () => {
  const user = {
    name: "Marry Doe",
    email: "marry@gmail.com",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  };

  return (
    <div className="account-container">
      <Header title="Account Settings" showBack={false} />

      <div className="profile-section">
        <img
          src={user.image}
          alt={user.name}
          className="profile-img"
        />

        <div>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      </div>

      <p className="description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
        Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
        Magna Aliquyam Erat, Sed Diam
      </p>

      <StepIndicator step={4} total={4} />

      <div className="divider"></div>
    </div>
  );
};

export default Account;