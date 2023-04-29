import css from "./TweetCard.module.css";
import { useState } from "react";
import Logo from "../../images/Vector.svg";
import { FollowButton } from "../FollowButton/FollowButton";
import { FollowingBtn } from "../FollowingBtn/FollowingBtn";
const initialState = {
  tweets: Math.floor(100500),
};

export const TweetCard = () => {
  const [follow, setFollow] = useState(initialState.tweets);

  const addFollowers = (evt) => {
    const id = evt.target.id;

    switch (id) {
      case "follow":
        setFollow((prevState) => prevState + 1);
        break;
      case "following":
        setFollow(initialState.tweets);
        break;
      default:
        console.warn(`&{id} pleas check your id`);
    }
  };

  return (
    <div className={css.cardWrapper}>
      <div className={css.card}>
        <a href="https://goit.global/ua/">
          <img className={css.imageLogo} src={Logo} alt="Logo" />
        </a>
        <div className={css.backgroundImg}></div>
        <div className={css.followControl}>
          <div className={css.textWrap}>
            <p className={css.tweets}>777 tweets</p>
            <p className={css.followers}>
              {follow.toLocaleString("en-US")}
              <span className={css.followersText}>followers</span>
            </p>
          </div>

          <div className={css.btnWrapper}>
            {follow === initialState.tweets ? (
              <FollowButton followers={follow} addFollowers={addFollowers} />
            ) : (
              <FollowingBtn following={follow} addFollowers={addFollowers} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
