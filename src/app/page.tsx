import Image from 'next/image';
import { Container, Flex, Heading, Text, Card, Badge } from '@radix-ui/themes';

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
              <Text>Issue #24 - Button is wrong colour.</Text>
              <Flex gap="2">
                <Badge color="orange">Devops</Badge>
                <Badge color="blue">UI</Badge>
              </Flex>
              <Text>
                This is an issue that is very serious. On a dashboard that only
                has 500 users there is a button which has wrong Bulgrian
                spelling for Cancel.
              </Text>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </main>
  );
}
