import React from "react";
import { ImageListType } from "react-images-uploading";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import * as ActionCreators from "redux/ActionCreators";
import { bindActionCreators } from "redux";

import ImageUploader from "./ui/ImageUploader";

const UploadDepends = () => {
  const [depends , setDepends] = React.useState<{idCartBack : any , idCart : any , passport : any}>({
    idCartBack : [],
    idCart : [],
    passport : []
  });

  const dispatch = useDispatch();

  const { setOrderDetails } = bindActionCreators(ActionCreators, dispatch);

  const setOrderHandler =  (value : any , name : string) => {
    setDepends({...depends , [name] : value});
    setOrderDetails({ name, data: value[0] });
  };

  return (
    <Container className="border-right">
      <div className="bullet" />
      <h5 className="title-border">آپلود مدارک</h5>
      <div className="content">
        <ImageUploader
          title="مدارک"
          image={depends.idCartBack}
          setImage={(e) => setOrderHandler(e , "idCartBack")}
        />
        {/* <ImageUploader
          title="جلوی کارت ملت"
          image={depends.idCart}
          setImage={(e) => setOrderHandler(e , "idCart")}
        />
        <ImageUploader
          title="برگه اول شناسنامه"
          image={depends.passport}
          setImage={(e) => setOrderHandler(e , "passport")}
        /> */}
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-right: 0;
  align-items: flex-center;
  gap: 2em;
  padding-bottom: 50px;
  font-size: 20px;
  .content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1em;
  }
`;

export default UploadDepends;
