import React from "react";
import ReactDOM from "react-dom";
import { theme } from "./templates/Signup/theme";
import { WithDebug } from "./templates/HtmlEmail";
import logo from "./assets/nebula-logo-html-email-314x88.png";
import "./styles.css";

const mockDownloadLink = "https://getnebula.app/download";
const websiteLink = "https://getnebula.app";
const companyLink = "http://creativelifeform.com";
const title = "nebula";
const emailHeaderText =
  "Download the Nebula particle system designer for MacOS";

function App() {
  return (
    <div className="App">
      <WithDebug
        theme={theme}
        title={title}
        emailHeaderHref={websiteLink}
        emailHeaderText={emailHeaderText}
        emailHeaderLogo={logo}
        bodyHeaderText={"Hi there 👋,"}
        bodyContentMarkdown={`Thanks for signing up for the **Nebula** particle system designer alpha, we just couldn't be happier. Well, _maybe_ we could.  \n  \nTo find out, please download the latest alpha release by clicking thie link below.  \n  \nPlease let us know your thoughts in our [spectrum.chat](https://spectrum.chat/nebula) space and submit any bugs or issues to [nebula-issues](https://github.com/creativelifeform/nebula-issues)`}
        bodyContentHtml={`
          <p>
            Thanks for signing up for the <b>Nebula</b> particle system designer alpha. Please download the app by clicking the download button below.
          </p>
          <p>
          As part of the alpha, we'd really appreciate it if you could let us know your thoughts about the app in our <a href="https://spectrum.chat/nebula" style="color:${
            theme.emailBody.bodyContent.a.color
          }">spectrum chat</a> space.
          </p>
          <p>
          You can also submit any bugs or issues to our <a href="https://github.com/creativelifeform/nebula-issues/issues" style="color:${
            theme.emailBody.bodyContent.a.color
          }">issues repo</a> on Github.
          </p>
        `}
        bodyContentComponent={() => {
          const linkStyle = { color: theme.emailBody.bodyContent.a.color };
          return (
            <>
              <p>
                Thanks for signing up for the <b>Nebula</b> particle system
                designer alpha. Please download the app by clicking the download
                button below.
              </p>
              <p>
                As part of the alpha, we'd really appreciate it if you could let
                us know your thoughts about the app in our{" "}
                <a href="https://spectrum.chat/nebula" style={linkStyle}>
                  spectrum.chat
                </a>{" "}
                space.
              </p>
              <p>
                {" "}
                You can also submit any bugs or issues to our{" "}
                <a
                  href="https://github.com/creativelifeform/nebula-issues/issues"
                  style={linkStyle}
                >
                  issue tracker
                </a>
                .
              </p>
            </>
          );
        }}
        bodyCalloutHref={mockDownloadLink}
        bodyCalloutText={"Download Nebula"}
        bodyFooterText={`If you're having trouble accessing the link, copy and paste the following link into your web browser `}
        bodyFooterHref={mockDownloadLink}
        copyrightLinkHref={companyLink}
        copyrightLinkText={"Creativelifeform"}
        debug={true}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
