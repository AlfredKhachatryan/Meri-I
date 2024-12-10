import { act, useEffect, useState } from "react";
import { Header } from "../Components/Header";
import { Box, Flex, Text, Heading, Grid } from "@chakra-ui/react";
import { Spoiler } from "spoiled";
function Main() {
  const [active, setActive] = useState(1);
  return (
    <>
      <Header />
      {/* 1 Section */}
      <Box p="24px">
        <Heading textAlign="center">
          I <Box className="fa-solid fa-heart" color="#f91996" /> U
        </Heading>
        <br />
        <Text fontSize="18px" fontWeight="500">
          My dear <Box className="fa-solid fa-sun-bright" color="#f91996" /> I’m
          so happy that we’ve been together for six months already. By the way,
          we’re setting a record! Haha. We’ve gone through so much together,
          like fire, water, and most importantly, my{" "}
          <Box className="fa-solid fa-temperature-full" color="#f91996" /> fever
          of 37.2°C! We made it through the first and second time. There’s still
          so much ahead of us, like{" "}
          <Box className="fa-solid fa-plane-departure" color="#f91996" />
          and <Box className="fa-solid fa-plane-arrival" color="#f91996" />. But
          we’ll get through it all together with our combined efforts!!!
        </Text>
      </Box>

      <Divider />
      {/* 2 Section */}

      <Box p="24px" textAlign="center">
        <Heading>
          Утем <Box className="fa-solid fa-heart" color="#f91996" /> Кез
        </Heading>
        <Text fontSize="18px" fontWeight="500">
          Кянкс, еще в первый раз, когда мы встретились, я думал: ну, вряд ли у
          нас что-то получится. Но я очень быстро в тебя влюбился. Я до сих пор
          помню, как я пришел к тебе: мы сидели, и каким-то чудом, наверное, в
          единственный раз спокойно сидели — я, ты, вафли и Пельмешка. Мы кушали
          вафли и говорили. Ехехех... Ну и остальное я тоже помню!))))
        </Text>
        <Flex justifyContent="center">
          <Heart url={["url(./pic1.jpg)", "url(./pic2.jpg)"]} />
          <Heart url={["url(./pic1.jpg)", "url(./pic2.jpg)"]} />
          <Heart url={["url(./pic1.jpg)", "url(./pic2.jpg)"]} />
        </Flex>
        <Flex justifyContent="center" rotate="180deg" marginTop="-50px">
          <Heart url={["url(./pic2.jpg)", "url(./pic1.jpg)"]} />
          <Heart url={["url(./pic2.jpg)", "url(./pic1.jpg)"]} />
        </Flex>
      </Box>

      <Divider rotate="180deg" />
      {/* 3 Section */}

      <Box p="24px" textAlign="center">
        <Heading>
          Ես <Box className="fa-solid fa-heart" color="#f91996" /> Քեզ
        </Heading>
        <Text fontSize="18px" fontWeight="500">
          Սերս, հա, կոֆեի սերս, թեկուզ դու 2-րդ անգամ մի քիչ վատնեիր ու ահավոր
          բոմժ էիր, բայց մեկ ա, ես քեզ շատ եմ սիրում: Չնայած քո ՇԱՏ մեծ սերը
          դեպի Չինաստան ու քո ոչ այդքան մեծ սերը դեպի Իսրայել, ես քեզ մեկ է
          սիրում եմ՝ շատ, շատ, շատ~~~
        </Text>
      </Box>

      <Divider />
      {/* 4 Section */}

      <Box p="24px" textAlign="center">
        <Heading>
          我 <Box className="fa-solid fa-heart" color="#f91996" /> 你
        </Heading>
        <Text fontSize="20px" fontWeight="500">
          我的美人！我希望我们的一切都能如愿以偿， 每个人都能实现各自的梦想，
          同时也能实现我们共同的梦想。
          愿我们在美丽的中国乡村和其他我们想住的地方拥有自己的家。
          我梦想着我们可以安静地生活在自己喜欢的地方，并一起度过长久而幸福的生活。
        </Text>
      </Box>

      <Divider />

      <Box p="24px">
        <Heading textAlign="center">
          Наше{" "}
          <Box className="fa-solid fa-house-chimney-heart" color="#f91996" />{" "}
          Будущее
        </Heading>
        <Box fontWeight="500" pt={"2rem"} pl="2rem">
          {[...Array(3)].map((_, i) => (
            <Section
              key={i}
              index={i + 1}
              active={active}
              setActive={setActive}
              HeadingTxt="I love You <3"
              Description="<3<3<3<3<3<3<3<3<3<3<3"
              Step="Step"
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export { Main };

const Heart = ({ url, props }) => {
  return (
    <Box
      id="heart"
      position="relative"
      w="100px"
      h="90px"
      mt="10px"
      {...props}
      _before={{
        content: '""',
        position: "absolute",
        top: "0",
        left: "50px",
        w: "52px",
        h: "80px",
        borderRadius: "50px 50px 0 0",
        bgImage: url[0], // Replace with your image URL
        bgSize: "cover",
        bgPosition: "center",
        transform: "rotate(-45deg)",
        transformOrigin: "0 100%",
      }}
      _after={{
        content: '""',
        position: "absolute",
        top: "0",
        left: "0",
        w: "52px",
        h: "80px",
        borderRadius: "50px 50px 0 0",
        backgroundImage: url[1], // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: "rotate(45deg)",
        transformOrigin: "100% 100%",
      }}
    />
  );
};

const Section = ({
  active = 1,
  index,
  setActive,
  HeadingTxt,
  Description,
  Step,
}) => (
  <Box
    onClick={() => setActive(index)}
    cursor={{ base: "default", md: "pointer" }}
  >
    <Flex gap="12px" align="center">
      <Box
        p="8px 16px"
        bg={active === index ? "#f91996" : "#9c3ab3"}
        border={active === index ? "1px solid #e41b1c" : "1px solid #DAD5CE"}
        borderRadius="12px"
        transition="0.3s"
        w="40px"
        h="40px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          fontSize="16px"
          lineHeight="24px"
          fontWeight="600"
          color="white"
          margin={0}
        >
          {index}
        </Text>
      </Box>

      <Heading fontSize="18px" fontWeight="500" pb="4px">
        {HeadingTxt}
      </Heading>
    </Flex>

    <Flex maxW="332px">
      <Box p="12px 20px" position="relative">
        {index < 3 && (
          <Box w="2px" bg="#DAD5CE" h="116px" position="relative">
            <Box
              className="fa fa-heart"
              position="absolute"
              bottom="-2px"
              left="-7px"
              color="#f91996"
            />
          </Box>
        )}
      </Box>

      <Box pl="12px">
        <Text
          lineHeight="21px"
          letterSpacing="0.07px"
          fontSize="14px"
          color="#4A4A4A"
        >
          {Description}
        </Text>
      </Box>
    </Flex>
  </Box>
);

const Divider = (props) => (
  <Flex direction="column" height="7em" {...props}>
    <Box
      className="headerWave"
      rotate="180deg"
      background="linear-gradient(90deg, #f91996, #9c3ab3)"
    />
    <Box className="headerWave" />
  </Flex>
);
