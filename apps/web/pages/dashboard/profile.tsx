import LayOut from "components/dashboard/UI/LayOut";
import { NextPage } from "next";
import ProfileForm from "components/dashboard/profile/ProfileForm";
import React from "react";

const Profile: NextPage = () => {
  return (
    <LayOut>
      <ProfileForm />
    </LayOut>
  );
};

export default Profile;
