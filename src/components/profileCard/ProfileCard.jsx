function ProfileCard(user) {
  return (
    <div className="profile-card">
      <img
      src={user.user.avatar}
      alt={`${user.user.firstName} ${user.user.lastName}`}
      className="img-conteiner"
    />
    <h2>{`${user.user.firstName} ${user.user.lastName}`}</h2>
    <p>Род деятельности:{user.user.occupation}</p>
    {/* <p>Хобби: {user?.hobbies.join(", ")}</p> */}
    </div>
  );
}

export default ProfileCard;
