import Box from "@mui/material/Box";
import React from "react";

export const Binance = ({ width = "2rem" }: { width?: string }) => {
  return (
    <Box
      component="img"
      sx={{
        width: width,
      }}
      src="/binance_coin.png"
    />
  );
};
