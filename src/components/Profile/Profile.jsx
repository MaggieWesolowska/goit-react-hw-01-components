import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <>
      <div className={css.profile}>
        <div className={css.description}>
          <img
            src={avatar}
            alt="User avatar"
            className={css.avatar}
            width="200"
          />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.media}>
          <li className={css.item}>
            <p className={css.label}>Followers</p>
            <p className={css.stats}>{stats.followers}</p>
          </li>
          <li className={css.item}>
            <p className={css.label}>Views</p>
            <p className={css.stats}>{stats.views}</p>
          </li>
          <li className={css.item}>
            <p className={css.label}>Likes</p>
            <p className={css.stats}>{stats.likes}</p>
          </li>
        </ul>
      </div>
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
