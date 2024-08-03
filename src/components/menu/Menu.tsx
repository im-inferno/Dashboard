import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";
export const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link className={listItem.url} key={listItem.id} to={listItem.url}>
              <div className="listItemTitle">
                <img src={listItem.icon} alt="" />
                {listItem.title}
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};
