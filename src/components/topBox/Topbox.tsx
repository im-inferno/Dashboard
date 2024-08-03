import "./topBox.scss";
import { topDealUsers } from "../../data.ts";

export const Topbox = () => {
  return (
    <div className="Topbox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="itemlist" key={user.id}>
            <div className="user">
                <img src={user.img} alt="" />
              <div className="userText">
                <span className="userName">{user.username}</span>
                <span className="userEmail">{user.email}</span>
              </div>
            </div>
            <span className="amount">{user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
