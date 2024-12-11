import { act, useEffect, useState } from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { Box, Flex, Text, Heading, Grid } from "@chakra-ui/react";
import { Spoiler } from "spoiled";
function Main() {
  const [openedTabs, setOpenedTabs] = useState([2, 3, 4, 5]); // Keep track of opened indices

  const toggleTab = (index) => {
    // Toggle logic: if already open, close it; otherwise, open it
    if (openedTabs.includes(index)) {
      setOpenedTabs(openedTabs.filter((tab) => tab !== index));
    }
  };
  const sections = [
    {
      title: "Этап 0",
      description: (
        <>
          <Heading>Настоящее</Heading>
          <Text>
            Я повторяюсь я очень рад что мы вместе и вроде как ты тоже вхвх нас
            хоть и ждут много чего впереди и приятного и не только но вот
            примерный план в моей голове нашего будущего
          </Text>
        </>
      ),
    },
    {
      title: "Этап 1",
      description: (
        <>
          <Heading>Китай</Heading>
          <Text>
            Нас будет ждать очень долгий и сложный путь когда ты будешь в Китае
            я надеюсь что я буду достаточно богатым чтобы к тебе частенько к
            тебе приходить в гости у нас будет год без кекса(( вхвхв но самое
            главное чтобы мы не смотяр на все сложности это преодолели потому
            что потом нас ждет
          </Text>
        </>
      ),
    },
    {
      title: "Этап 2",
      description: (
        <>
          <Heading>Помолвка</Heading>
          <Text>
            После того как ты приедешь обратно и когда у нас все наладится и я
            встречусь более официально с родителями то у нас будет помолвка
            такая чтобы нам двоим было бы комфортно ехехех
          </Text>
        </>
      ),
    },
    {
      title: "Этап 3",
      description: (
        <>
          <Heading>Свадьба</Heading>
          <Text>
            А вот после помоловки уже через некоторое время мы поженимся да
            самому не верится но вот так вот у нас надеюсь будет наш дом машинка
            для тебя и 2 кошки с собачкой и надеюсь без спинагрызов а вот дальше
            нас ждет
          </Text>
        </>
      ),
    },
    {
      title: "Этап 4",
      description: (
        <>
          <Heading>
            Старость <span style={{ textDecoration: "line-through" }}>не</span>{" "}
            Радость
          </Heading>
          <Text>
            Мы уже буджем бабушкой и дедушкой с кучей воспоминаний и хороших и
            плохих в приятной домике где то подальше от всей суеты только я ты и
            наши животные ехех но до этого еще есть большой сложный и тернистый
            путь но с тобой я готов пройти и не такое
          </Text>
        </>
      ),
    },
  ];

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
        <Box fontWeight="500" pt={"2rem"}>
          {sections.map(({ title, description }, i) => (
            <Section
              key={i}
              index={i + 1}
              openedIndices={openedTabs}
              toggleTab={toggleTab}
              HeadingTxt={title}
              Description={description}
              Step="Step"
            />
          ))}
        </Box>
      </Box>
      <Footer />
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
  index,
  HeadingTxt,
  Description,
  openedIndices,
  toggleTab,
}) => (
  <Flex
    onClick={() => toggleTab(index)}
    cursor={{ base: "default", md: "pointer" }}
    pb="2rem"
  >
    <Flex align="center" flexDirection="column">
      <Flex
        p="8px 16px"
        bg={!openedIndices.includes(index) ? "#f91996" : "#9c3ab3"}
        border={
          !openedIndices.includes(index)
            ? "1px solid #e41b1c"
            : "1px solid #DAD5CE"
        }
        borderRadius="12px"
        transition="0.3s"
        w="40px"
        h="40px"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
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
      </Flex>

      <Box p="12px 20px" position="relative" flexGrow="1">
        {index < 6 && (
          <Box w="2px" bg="#DAD5CE" h="100%" position="relative">
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
    </Flex>

    <Flex maxW="332px" flexDirection="column" paddingLeft="12px">
      <Box position="relative">
        <Heading fontSize="18px" fontWeight="500" pb="4px" pos="relative">
          {HeadingTxt}
        </Heading>
        <Text
          lineHeight="21px"
          letterSpacing="0.07px"
          fontSize="14px"
          color="#4A4A4A"
        >
          {Description}
        </Text>
        <GradientBox
          borderRadius="8px"
          backdropFilter="blur(3px)"
          opacity={openedIndices.includes(index) ? "1" : "0"}
          pos="absolute"
          width="100%"
          height="100%"
          top="0"
          transition="0.35s"
        />
      </Box>
    </Flex>
  </Flex>
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

const GradientBox = ({ ...props }) => {
  return (
    <Box
      w="100%"
      h="100%"
      position="relative"
      background="
  linear-gradient(
    135deg,
    #121212 25%,
    #1a1a1a 25%,
    #1a1a1a 50%,
    #121212 50%,
    #121212 75%,
    #1a1a1a 75%,
    #1a1a1a
  )"
      backgroundSize="40px 40px"
      animation="moveBackground 8s linear infinite"
      {...props}
    />
  );
};
