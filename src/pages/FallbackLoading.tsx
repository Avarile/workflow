import React from "react";
import "antd/dist/antd.css";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const FallbackLoading = () => {
  const icon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return <Spin indicator={icon} />;
};
