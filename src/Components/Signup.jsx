import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Image,
    Text,
    Alert,
  } from '@chakra-ui/react';
import { useState } from 'react';
import Login from './Login';
  
  export default function Signup() {
    const [name,setName]=useState("");
    const[email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const [flag,setFlag] =useState(false);
    const [login,setLogin] =useState(true);

    function handleSubmit(e){
        e.preventDefault();
        
        if(!name || !email || !password){
            setFlag(true);
            
        }else{
            setFlag(false)
            localStorage.setItem("Email",JSON.stringify(email));
            localStorage.setItem("Password",JSON.stringify(password));
            console.log("saved in Local Storage")
            setLogin(!login);
            alert("Signup Successfully")
        }
    }

    function handleLogin(){
        setLogin(!login)
    }

    return (
        <div>
      {login ?(  

        <form onSubmit={handleSubmit}>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg="#f7f8fa"
        >
     {/* bg={useColorModeValue('gray.50', 'gray.800')} */}
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
              {flag &&(
                    <Alert backgroundColor={'red'} color={'white'} fontWeight={'500'}>
                      Please Fill correct Info
                      </Alert>
                  )}
          <Stack width={'250px'} >
           <Image src="https://prod.smassets.net/assets/cms/cc/app/2.178.0/images/logo-surveymonkey.svg" />
          </Stack>
          <Box
          bg={'white'}
            // bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            width={'450px'}
            p={8}>
            <Stack spacing={4}>
                <Text textAlign={'end'}>Already have an account? <Link onClick={handleLogin} color={'green'}>Log in</Link></Text>
                <Text fontFamily={'National 2'} fontWeight="300" fontSize={'34px'} color={'#333e48'}>Create an account</Text>
                
                <FormControl id="name">
                <FormLabel>Enter your Name</FormLabel>
                <Input type="text"
                onChange={(event)=>setName(event.target.value)}
                />
              </FormControl>
              
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" 
                 onChange={(event)=>setEmail(event.target.value)}

                />
              </FormControl>
             
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" 
                  onChange={(event)=>setPassword(event.target.value)}

                />
              </FormControl>
             
              <Stack spacing={10}>
                {/* <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'Green.400'}>Forgot password?</Link>
                </Stack> */}
                <Button
                  bg={'Green'}
                  color={'white'}
                  _hover={{
                    bg: 'Green.400',
                  }}
                  type="submit"
                  >
                 Submit
                </Button>
             
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </form>

      ):(
        <Login />
      )}
    </div>
    );
  }