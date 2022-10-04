import Categories from "components/order/Categories";
import Layout from "components/order/ui/Layout";
import { NextPage } from "next";
import OrderFactor from "components/order/Factor";
import ProgressBar from "components/order/ProgressBar";
import React from "react";
import SelectLanguage from "components/order/SelectLanguage";
import OrderTime from "components/order/OrderTime";
import ShippingType from "components/order/ShippingType";
import UploadDepends from "components/order/UploadDepends";
import ReciveOrder from "components/order/ReciveOrder";
import ShippingDate from "components/order/ShippingDate";
import PaymentDetails from "components/order/PaymentDetails";
import Table from "components/order/Table";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getConfig } from "redux/ActionCreators";
import styled from "styled-components";

const Order: NextPage = () => {
  const { config, order } = useSelector((state: RootStateOrAny) => state);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getConfig());
  }, [dispatch]);
  return (
    <Layout>
      <Container>
        {config && config.categories && (
          <>
            <div className="progress">
              <ProgressBar />
            </div>
            <SelectLanguage langs={config.languages} />
            <Categories
              categories={config.categories}
              docTypes={config.doc_types}
            />
            <Table />
            <OrderTime order={config} />
            <ShippingType />
            {order.recivingWay !== "فقط ارسال مدارک"  && <UploadDepends />}
            <ReciveOrder />
            <ShippingDate />
            <PaymentDetails />
          </>
        )}
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  .progress {
    min-width: max-content;
  }
`;

export default Order;
