import Image from 'next/image';
import { Container, Flex, Heading, Text, Card, Badge } from '@radix-ui/themes';
import { ChatBubbleIcon } from '@radix-ui/react-icons';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container size="1">
        <Flex direction="column" pb="4">
          <Heading>Coding Issue Tracker</Heading>
          <Text color="gray">
            Here you can find the issues relevant to your certain project.
          </Text>
        </Flex>
        <Flex gap="4" direction="column">
          <Card>
            <Flex gap="1" direction="column">
              <Text>Issue #UK(OP-754211) - Button has wrong spelling.</Text>
              <Flex gap="2">
                <Badge color="orange">Devops</Badge>
                <Badge color="blue">UI</Badge>
              </Flex>
              <Text>
                This is an issue that is very serious. On a dashboard that has
                500 users there is a button which has the wrong Bulgarian
                spelling for Cancel (Отказ).
              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center">
                  <ChatBubbleIcon />
                  <Text ml="2" color="gray" size="1">
                    3 Comments
                  </Text>
                </Flex>
                <ChatBubbleIcon color="red"></ChatBubbleIcon>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex gap="1" direction="column">
              <Text>Issue #UK(OP-7542999) - Crash in Prod.</Text>
              <Flex gap="2">
                <Badge color="orange">Devops</Badge>
                <Badge color="green">ProdSupp</Badge>
              </Flex>
              <Text>Production crash in early evening. See attachmnent.</Text>
              <Flex justify="between" pt="1">
                <Flex align="center">
                  <ChatBubbleIcon />
                  <Text ml="2" color="gray" size="1">
                    1 Comment
                  </Text>
                </Flex>
                <ChatBubbleIcon color="red"></ChatBubbleIcon>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex gap="1" direction="column">
              <Text>Issue #UK(OP-82777122) - GitHub not working.</Text>
              <Flex gap="2">
                <Badge color="pink">Dev</Badge>
                <Badge color="blue">UI</Badge>
              </Flex>
              <Text>
                GitHub seems to be broken.
              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center">
                  <ChatBubbleIcon />
                  <Text ml="2" color="gray" size="1">
                    2 Comments
                  </Text>
                </Flex>
                <ChatBubbleIcon color="yellow"></ChatBubbleIcon>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </main>
  );
}
