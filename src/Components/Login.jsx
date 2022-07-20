import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    useColorModeValue,
    Image,
    Text,
  } from '@chakra-ui/react';
  
  export default function Login() {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack width={'250px'} >
           <Image src="https://prod.smassets.net/assets/cms/cc/app/2.178.0/images/logo-surveymonkey.svg" />
          </Stack>
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            width={'450px'}
            p={8}>
            <Stack spacing={4}>
                <Text textAlign={'end'}>Don’t have an account? <Link color={'green'}>Sign up</Link></Text>
                <Text fontFamily={'National 2'} fontWeight="300" fontSize={'34px'} color={'#333e48'}>Log in</Text>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'Green.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'Green'}
                  color={'white'}
                  _hover={{
                    bg: 'Green.400',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }