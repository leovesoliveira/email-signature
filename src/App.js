import {
  Box,
  Button,
  Center,
  Input,
  MantineProvider,
  Title,
} from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons";
import { createRef, useState } from "react";
import EmailSignature from "./EmailSignature";

function App() {
  const [name, setName] = useState("Sherlock Holmes");
  const [job, setJob] = useState("Consulting Detective");
  const [line1, setLine1] = useState(
    "221b Baker St, London NW1 6XE, United Kingdom"
  );
  const [line2, setLine2] = useState("Phone: +44 20 7224 3688");

  const url_string = window.location.href;
  const url = new URL(url_string);
  const {
    bannerLink,
    bannerImg,
    logoLink,
    logoImg,
    linkedinLink,
    linkedinImg,
  } = url.searchParams.get("data")
    ? JSON.parse(atob(url.searchParams.get("data")))
    : {};

  const emailSignatureRef = createRef();

  const [copied, setCopied] = useState(false);

  const copy = () => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(emailSignatureRef.current);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    setCopied(true);
    selection.removeAllRanges();
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <MantineProvider>
      <Box
        sx={(theme) => ({
          backgroundColor: "#e1ebeb",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        })}
      >
        <Title
          sx={(theme) => ({
            paddingBottom: theme.spacing.md,
          })}
          order={1}
        >
          Email Signature
        </Title>

        <Box
          sx={(theme) => ({
            width: "658px",
            display: "flex",
            flexWrap: "wrap",
          })}
        >
          <Input.Wrapper
            sx={(theme) => ({
              width: "22rem",
              paddingBottom: theme.spacing.sm,
              paddingRight: theme.spacing.sm,
            })}
            id="name"
            label="Full Name"
          >
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Input.Wrapper>

          <Input.Wrapper
            sx={(theme) => ({
              width: "18.3rem",
              paddingBottom: theme.spacing.sm,
            })}
            id="job-description"
            label="Job Description"
          >
            <Input
              id="job-description"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </Input.Wrapper>

          <Input.Wrapper
            sx={(theme) => ({
              width: "100%",
              paddingBottom: theme.spacing.sm,
            })}
            id="line-1"
            label="Line 1"
          >
            <Input
              id="line-1"
              value={line1}
              onChange={(e) => setLine1(e.target.value)}
            />
          </Input.Wrapper>

          <Input.Wrapper
            sx={(theme) => ({
              width: "100%",
              paddingBottom: theme.spacing.xl,
            })}
            id="line-2"
            label="Line 2"
          >
            <Input
              id="line-2"
              value={line2}
              onChange={(e) => setLine2(e.target.value)}
            />
          </Input.Wrapper>
        </Box>

        <Center
          sx={(theme) => ({
            backgroundColor: "white",
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            boxShadow: theme.shadows.md,
            marginBottom: theme.spacing.xl,
          })}
        >
          <div ref={emailSignatureRef}>
            <EmailSignature
              name={name}
              job={job}
              line1={line1}
              line2={line2}
              bannerLink={bannerLink}
              bannerImg={bannerImg}
              logoLink={logoLink}
              logoImg={logoImg}
              linkedinLink={linkedinLink}
              linkedinImg={linkedinImg}
            />
          </div>
        </Center>

        <Button
          color={copied ? "teal" : "yellow"}
          style={{ color: "black" }}
          onClick={copy}
        >
          {copied ? (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconCheck size={16} />
              <span style={{ marginLeft: "0.5rem" }}>Copied</span>
            </span>
          ) : (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconCopy size={16} />
              <span style={{ marginLeft: "0.5rem" }}>Copy Email Signature</span>
            </span>
          )}
        </Button>
      </Box>
    </MantineProvider>
  );
}

export default App;
