import {
  Box,
  Button,
  CopyButton,
  Input,
  MantineProvider,
  Title,
} from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons";
import { useEffect, useState } from "react";

function Generate() {
  const [logoLink, setLogoLink] = useState("");
  const [logoImg, setLogoImg] = useState("");
  const [bannerLink, setBannerLink] = useState("");
  const [bannerImg, setBannerImg] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");

  const [url, setUrl] = useState("");

  useEffect(() => {
    const data = { logoLink, logoImg, bannerLink, bannerImg, linkedinLink };
    const dataStringBase64 = btoa(JSON.stringify(data));
    setUrl(`${window.location.origin}?data=${dataStringBase64}`);
  }, [logoLink, logoImg, bannerLink, bannerImg, linkedinLink]);

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
          Generate Email Signature
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
              width: "100%",
              paddingBottom: theme.spacing.sm,
            })}
            id="logoLink"
            label="Logo Link"
          >
            <Input
              id="logoLink"
              value={logoLink}
              onChange={(e) => setLogoLink(e.target.value)}
            />
          </Input.Wrapper>

          <Input.Wrapper
            sx={(theme) => ({
              width: "100%",
              paddingBottom: theme.spacing.sm,
            })}
            id="logoImg"
            label="Logo Image"
          >
            <Input
              id="logoImg"
              value={logoImg}
              onChange={(e) => setLogoImg(e.target.value)}
            />
          </Input.Wrapper>

          <Input.Wrapper
            sx={(theme) => ({
              width: "100%",
              paddingBottom: theme.spacing.sm,
            })}
            id="bannerLink"
            label="Banner Link"
          >
            <Input
              id="bannerLink"
              value={bannerLink}
              onChange={(e) => setBannerLink(e.target.value)}
            />
          </Input.Wrapper>

          <Input.Wrapper
            sx={(theme) => ({
              width: "100%",
              paddingBottom: theme.spacing.sm,
            })}
            id="bannerImg"
            label="Banner Image"
          >
            <Input
              id="bannerImg"
              value={bannerImg}
              onChange={(e) => setBannerImg(e.target.value)}
            />
          </Input.Wrapper>

          <Input.Wrapper
            sx={(theme) => ({
              width: "100%",
              paddingBottom: theme.spacing.xl,
            })}
            id="linkedinLink"
            label="LinkedIn Link"
          >
            <Input
              id="linkedinLink"
              value={linkedinLink}
              onChange={(e) => setLinkedinLink(e.target.value)}
            />
          </Input.Wrapper>
        </Box>

        <CopyButton value={url}>
          {({ copied, copy }) => (
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
                  <span style={{ marginLeft: "0.5rem" }}>
                    Copy Link to Email Signature
                  </span>
                </span>
              )}
            </Button>
          )}
        </CopyButton>
      </Box>
    </MantineProvider>
  );
}

export default Generate;
