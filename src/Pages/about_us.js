import { useEffect, useState } from "react";
import { Header } from "../Components/Header";
function Main() {
  const [active, setActive] = useState(1);
  return (
    <>
      <Header />
      <body style={{ padding: "12px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {[...Array(3)].map((_, i) => (
            <Section
              index={i + 1}
              key={i}
              active={active}
              setActive={setActive}
              Heading="I love You <3"
              Description="<3<3<3<3<3<3<3<3<3<3<3"
              Step="Step"
            />
          ))}
        </div>
      </body>
    </>
  );
}

export { Main };
const Section = ({
  active = 1,
  index,
  setActive,
  Heading,
  Description,
  Step,
}) => (
  <div
    onClick={() => setActive(index)}
    style={{
      cursor: window.innerWidth > 640 ? "pointer" : "default",
    }}
  >
    <div
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "8px 16px",
          background: active === index ? "#f91996" : "#9c3ab3",
          border: active === index ? "1px solid #e41b1c" : "1px solid #DAD5CE",
          borderRadius: "12px",
          transition: "0.3s",
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "600",
            color: "#fff",
          }}
        >
          {index}
        </span>
      </div>

      <span
        style={{
          color: "#4A4A4A", // Replace with your desired gray color
          fontSize: "14px",
          fontWeight: "500",
          textTransform: "uppercase",
        }}
      >
        {Step}
      </span>
    </div>

    <div style={{ display: "flex", maxWidth: "332px" }}>
      <div style={{ padding: "12px 20px" }}>
        {index < 3 && (
          <div
            style={{
              width: "2px",
              background: "#DAD5CE",
              height: "116px",
              position: "relative",
            }}
          >
            <i
              className="fa-solid fa-heart"
              style={{
                color: "#f91996",
                position: "absolute",
                bottom: "-2px",
                left: "-7px",
              }}
            ></i>
          </div>
        )}
      </div>
      <div style={{ paddingLeft: "12px" }}>
        <h3
          style={{ fontSize: "18px", fontWeight: "500", paddingBottom: "4px" }}
        >
          {Heading}
        </h3>
        <p
          style={{
            lineHeight: "21px",
            letterSpacing: "0.07px",
            fontSize: "14px",
            color: "#4A4A4A", // Replace with your desired gray color
          }}
        >
          {Description}
        </p>
      </div>
    </div>
  </div>
);
