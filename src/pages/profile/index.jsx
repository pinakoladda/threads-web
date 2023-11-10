import { useParams } from "react-router-dom";
import { UserProfile } from "../../components/UserProfile";
import { useEffect, useState } from "react";
import { request } from "../../api";

export const Profile = () => {
  const [user, setUser] = useState(null);
  const { userLogin } = useParams();

  useEffect(() => {
    request.get(`/user/${userLogin}`).then((res) => setUser(res.data));
  }, [userLogin]);

  return <UserProfile user={user} />;
};
