/** @format */
import "./paymentPage.css";
import { Spinner, useToast } from "@chakra-ui/react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { OtpModel } from "./OtpModel";



let obj = {
  name: "",
  cardNnumber: "",
  expiryDate: "",
  cvv: "",
  amount: "",
  email: "",
};

export const PaymentPage = () => {
  let [input, setInput] = useState(obj);
  let [spin, setSpin] = useState(false);
  let [summit, setSummit] = useState(false);

  let toast=useToast()

  let [otp,setOtp]=useState("")
  let navigate = useNavigate();

  const { isLoading, isError, hotels, price, days, rooms } = useSelector(
    (store) => store.hotelsReducer

  );

  let user=JSON.parse(localStorage.getItem("user"))

  // *****function of OTP******//
  // let getOTP= ()=>{
  //   let otp='';
  // let length=4;
  
  // for(let i=0;i<length;i++){
  //   otp+=Math.floor(Math.random()*10)
  // }
  //  setOtp(otp)
  // }

  let subPrice = price * rooms;

  const store = useSelector((store) => store);
  console.log(store);

  let texes = Math.floor((subPrice * days * 18) / 100);
  let resortFee = days * 199;
  let totalFee = subPrice * days + texes + resortFee;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    // setInput(obj);
    setSpin(true);
    // getOTP()
    setTimeout(() => {
      setSpin(false);
      setSummit(true);
      toast({
        title: `Thanks ${user?.firstName}`,
        position: 'top',
        description: "your payment has been done successfully.",
        status: 'success',
        duration: 2500,
        isClosable: true,
      })
    }, 2000);

    setTimeout(() => {
      navigate("/");
    }, 3500);
  };

  return (
    <Box marginLeft={"80px"}>
      <Flex>
        <Box marginRight={"50px"}>
          <Heading as={"h2"} size="xl">
            Secure booking — only takes 2 minutes!
          </Heading>
          <Box marginTop={"40px"}>
            <Heading as="h4" size="sm">
              <i class="fa-sharp fa-solid fa-circle-check"></i> Fully refundable
              before 10:00am (property local time)
            </Heading>
            <Text>
              {" "}
              You can change or cancel this stay for a full refund if plans
              change. Because flexibility matters.
            </Text>
          </Box>
          <br />
          <Box>
            <Heading color={"#42A5F5"} as="h4" size="md">
              <i class="fa-solid fa-lock"></i> Sign in to earn $2.91 in Orbucks
            </Heading>
          </Box>
          <br />

          <Box style={{ textAlign: "center" }}>
            <Heading size={"md"}>Payment method</Heading>
            <Text color={"green"}>
              UPI | PayPal | Monthly Payment | Click-to-Pay
            </Text>

            <br />
            {/* form is started for payment  */}
            <div
              id="formInput"
              style={{
                background: "#9FA8DA",
                textAlign: "center",
                padding: "25px",
              }}
            >
              {spin && (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="red.500"
                  size="xl"
                />
              )}
              {/* {summit && <Heading color={"green"}>Submited successful</Heading>} */}
              <form onSubmit={handleSubmit}>
                <label for="name">Name on Card:</label>
                <br />
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  id="name"
                  name="name"
                  value={input.name}
                />
                <br />

                <label for="card-number">Card Number:</label>
                <br />
                <input
                  required
                  onChange={handleChange}
                  type="number"
                  id="card-number"
                  name="cardNnumber"
                  value={input.cardNnumber}
                />
                <br />

                <label for="expiry-date">Expiry Date:</label>
                <br />
                <input
                  required
                  onChange={handleChange}
                  type="month"
                  id="expiry-date"
                  name="expiryDate"
                  value={input.expiryDate}
                />
                <br />

                <label for="cvv">CVV:</label>
                <br />
                <input
                  maxlength="4"
                  required
                  onChange={handleChange}
                  type="number"
                  id="cvv"
                  name="cvv"
                  value={input.cvv}
                />
                <br />

                <label for="amount">Amount:</label>
                <br />
                <input
                  required
                  onChange={handleChange}
                  type="number"
                  id="amount"
                  name="amount"
                  // value={input.amount}
                  value={Math.floor((totalFee * 80) / 100)}
                />
                <br />

                <label for="email">Email</label>
                <br />
                <input
                  required
                  onChange={handleChange}
                  type="email"
                  id="email"
                  name="email"
                  value={input.email}
                />
                <br />
                <br />
                <button type="submit">submit</button>
               
               
                
              </form>
            </div>
            {/* form is ended */}
          </Box>
        </Box>
        <Box height={"600px"} bg="#221286" margin={"20px"}>
          <img
            width={"500px"}
            src={
              "https://www.searchenginejournal.com/wp-content/uploads/2020/03/the-top-10-most-popular-online-payment-solutions-5e9978d564973-1520x800.webp"
            }
          />
          <Heading textAlign={"center"} color={"white"} as="h2" size={"lg"}>
            {" "}
            Price details{" "}
          </Heading>
          <br />
          <Box>
            <Flex>
              <Box marginLeft={"20px"} marginRight={"40px"}>
                <Text color={"white"}>{`${rooms} room * ${days} nights`}</Text>
                <Text
                  color={"white"}
                >{`$ ${subPrice}.00 average per night`}</Text>
              </Box>
              <Box>
                <Heading size={"lg"} color={"white"}>{`$ ${
                  subPrice * days
                }.00`}</Heading>
              </Box>
            </Flex>
          </Box>
          <br />
          <Box>
            <Box marginLeft={"20px"}>
              <Flex>
                <Text marginRight={"120px"} color={"white"}>
                  Taxes and fees @18%{" "}
                </Text>
                <Text color="white">{`$ ${texes}.00`}</Text>
              </Flex>
            </Box>

            <Box marginLeft={"20px"}>
              <Flex>
                <Text marginRight={"100px"} color={"white"}>
                  Resort fee $199 per night{" "}
                </Text>
                <Text color="white">{`$ ${resortFee}.00`}</Text>
              </Flex>
            </Box>
            <br />
            <hr></hr>
            <Box marginLeft={"20px"}>
              <Flex>
                <Heading marginRight={"100px"} color={"white"}>
                  Total
                </Heading>
                <Heading color={"white"}>{`$ ${totalFee}.00`}</Heading>
              </Flex>
            </Box>
            <Box marginLeft={"20px"}>
              <Flex>
                <Heading
                  as="h4"
                  size="sm"
                  marginRight={"150px"}
                  color={"white"}
                >
                  Pay Now @80%
                </Heading>
                <Heading as="h4" size="sm" color={"white"}>{`$ ${Math.floor(
                  (totalFee * 80) / 100
                )}.00`}</Heading>
              </Flex>
            </Box>
            <Box marginLeft={"20px"}>
              <Flex>
                <Heading
                  as="h4"
                  size="sm"
                  marginRight={"100px"}
                  color={"white"}
                >
                  Pay at property @20%
                </Heading>
                <Heading as="h4" size="sm" color={"white"}>{`$ ${Math.floor(
                  (totalFee * 20) / 100
                )}.00`}</Heading>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
