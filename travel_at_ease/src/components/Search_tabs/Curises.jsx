import React from "react";
import { Button, Checkbox, flexbox, Input, Stack } from "@chakra-ui/react";
import "./stay.css";
import { Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const Curises = () => {
  return (
    <>
      <br />
      <div>
        <label style={{ display: "flex", gap: "20px" }}>
          <Input
            borderRadius="2px"
            outline="1px solid rgb(82, 81, 81)"
            placeholder="Going to"
            size="lg"
            width="500px"
          />

          <Input
            className="checkin"
            type="date"
            placeholder="Check in"
            size="lg"
            width="200px"
            borderRadius="2px"
            outline="1px solid rgb(82, 81, 81)"
            padding="4px"
          />
          <Input
            borderRadius="2px"
            outline="1px solid rgb(82, 81, 81)"
            type="date"
            placeholder="Check out"
            size="lg"
            width="200px"
            padding="4px"
          />
          <Flex
            alignItems="center"
            h="12"
            paddingLeft="16px"
            width="350px"
            border="1px solid #6b646b"
            borderRadius="4px"
          >
            <span
              style={{ fontSize: "22px" }}
              className="material-icons"
            ></span>
            <Box paddingLeft="10px">
              <p style={{ fontSize: "12px" }}>Travelers</p>
              <p>1 Room, 2 Travelers</p>
            </Box>
          </Flex>
        </label>
        <br />
        <Stack spacing={[1, 5]} direction={["column", "row"]}>
          <Checkbox size="lg" colorScheme="teal">
            Add a flight
          </Checkbox>
          <Checkbox size="lg" colorScheme="teal">
            Add a car
          </Checkbox>
        </Stack>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="#">
            <Button colorScheme="red" variant="solid">
              Search
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
