import React, { useEffect, useState } from "react";
import {
  createTransferRecipient,
  getAllBanks,
  verifyAccount,
  initiateTransfer,
} from "../../services/axios";
import {
  Container,
  Pair,
  Group,
  Input,
  NumberInput,
  Select,
  // Button,
  Error,
  Label,
} from "./style";
import { CircularProgress, Button } from "@mui/material";
import { green } from "@mui/material/colors";
import CustomizedSnacbar from "../SnackBar/alert";

export default function PaymentForm() {
  const [isError, setIsError] = useState(false);
  const [amountisNotError, setAmountisNotError] = useState(true);
  const [banks, setBanks] = useState([]);
  const [control, setControl] = useState({});
  const [accountName, setAccountName] = useState();
  const [disabled, setDisabled] = useState(true);
  const [recipientCode, setRecipientCode] = useState();
  const [reason, setReason] = useState();
  const [amount, setAmount] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const handleAmountChange = ({ target }) => {
    target.value > 100
      ? target.value > 1000000
        ? setAmountisNotError(false)
        : (function () {
            setAmountisNotError(true);
            setAmount(parseInt(target.value));
          })()
      : setAmountisNotError(false);
  };

  useEffect(() => {
    getAllBanks
      .then((res) => res.data.status && setBanks(res.data.data))
      .catch(() => console.error);
  });

  const onAccountChange = async ({ target }) => {
    if (target.value.length === 10) {
      await verifyAccount({
        bank_code: control.bank_code,
        account_number: target.value,
      })
        .then((res) => {
          setAccountName(res.data.data.account_name);
          setControl({
            ...control,
            type: "nuban",
            account_name: res.data.data.account_name,
            account_number: res.data.data.account_number,
            currency: "NGN",
          });
        })
        .catch(() => setAccountName(false));
    } else {
      setAccountName(false);
    }
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => setOpen(false), 6000);
    }
  }, [open]);

  useEffect(() => {
    if (accountName && amountisNotError && reason) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [accountName, amount, reason]);

  let recipient_code;

  const generateRecipient = () => {
    return createTransferRecipient(control)
      .then((res) => {
        setOpen(true);
        setMessage("Transfer recipient created");
        setSeverity("success");
        setRecipientCode(res.data.data.recipient_code);
        recipient_code = res.data.data.recipient_code;
      })
      .catch((err) => {
        setOpen(true);
        setLoading(false);
        setMessage("Error creating recipient");
        setSeverity("error");
        console.log(err);
      });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setIsError(false);
    await generateRecipient();
    const payload = {
      source: "balance",
      amount,
      recipient: recipient_code,
      reason,
    };
    initiateTransfer(payload)
      .then((res) => {
        setLoading(false);
        setIsError(false);
        if (open) {
          setOpen(false);
        }
        setOpen(true);
        setMessage("Transfer completed!");
        setSeverity("success");
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
        if (open) {
          setOpen(false);
        }
        setOpen(true);
        setMessage("Error processing payment");
        setSeverity("error");
        console.log(err);
      });
  };

  const buttonSx = {
    ...{
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    },
  };
  return (
    <Container id="payment_form">
      <CustomizedSnacbar
        open={open}
        setOpen={setOpen}
        message={message}
        severity={severity}
      />
      {isError && <Error>Error processing payment</Error>}
      <Group>
        <Label>Select Bank</Label>
        <Select
          id="demo-simple-select"
          value={control.bank_code}
          onChange={(e) =>
            setControl({ ...control, bank_code: e.target.value })
          }
        >
          <option value="">...</option>
          {banks.length &&
            banks.map((item, id) => (
              <option key={`bank_${id}`} value={item.code}>
                {item.name}
              </option>
            ))}
        </Select>
      </Group>
      <Group>
        <Label>Account Number</Label>
        <NumberInput
          type="number"
          id="account-number"
          required
          onChange={onAccountChange}
        />
        {accountName ? (
          <p>{accountName}</p>
        ) : accountName === false ? (
          <Error>Invalid account number</Error>
        ) : (
          ""
        )}
      </Group>
      <Group>
        <Label>Amount to transfer</Label>
        <Pair>
          <Group type="select">
            <Select id="payment-currency-options" currency>
              <option value="NGN">NGN</option>
            </Select>
          </Group>
          <Group>
            <NumberInput
              type="number"
              id="payment-amount"
              required
              onChange={handleAmountChange}
            />
          </Group>
        </Pair>
        {!amountisNotError ? (
          <Error>Amount should be between 100 and 1,000,000</Error>
        ) : (
          ""
        )}
      </Group>
      <Group>
        <Label htmlFor="reason">Reason</Label>
        <Input
          type="text"
          id="reason"
          onChange={({ target }) => setReason(target.value)}
        />
      </Group>
      <Group type="submit">
        <Button
          type="submit"
          form="payment_form"
          disabled={disabled || loading}
          variant="contained"
          sx={buttonSx}
          onClick={handleSubmit}
          style={{
            width: "8rem",
            color: "white",
          }}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: green[500] }} />
          ) : (
            "Pay Now"
          )}
        </Button>
      </Group>
    </Container>
  );
}
