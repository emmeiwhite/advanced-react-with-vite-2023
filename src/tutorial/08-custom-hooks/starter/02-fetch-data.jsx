import useFetch from "./useFetch";
const url = "https://api.github.com/users/QuincyLarson";

const FetchData = () => {
  const { loading, error, user } = useFetch(url);

  if (loading) {
    return <h2>Loading ...</h2>;
  }

  if (error) {
    return <h2>An Error has occur! ...</h2>;
  }
  //order matters
  const { name, avatar_url, bio, company } = user;
  return (
    <div>
      <img
        style={{ width: "100px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default FetchData;
