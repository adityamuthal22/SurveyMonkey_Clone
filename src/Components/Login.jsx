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
    Image,
    Text,
    Alert,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Dashborad from './Dashborad';
  
  export default function Login() {
    const [emaillog,setEmaillog] =useState("");
    const [passwordlog,setPasswordlog] =useState("");
    const [flag,setFlag] =useState(false);
    const [home,setHome] =useState(true);
    
    const navigate=useNavigate()
    function handleSignup(){
      navigate("/signup")
    }

      function handleLogin(e){
          e.preventDefault();
          let mail=localStorage.getItem("Email").replace(/"/g,"");
          let pass=localStorage.getItem("Password").replace(/"/g,"");

          if(!emaillog || !passwordlog){
            setFlag(true);
            console.log("Empty")
           
          }
          else if(passwordlog !== pass || emaillog !== mail){
              setFlag(true)
              alert("Wrong Email and Password")
          }else{
            setHome(!home);
            setFlag(false)
            alert("login sucessfully")
          }
      }
      

    return (
      <div>
        {home ? (
      <form onSubmit={handleLogin}>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg="#f7f8fa"
       >
         
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
            boxShadow={'lg'}
            width={'450px'}
            p={8}>
            <Stack spacing={4}>
                <Text textAlign={'end'}>Don’t have an account? <Link onclick={handleSignup} color={'green'}>Sign up</Link></Text>
                <Text fontFamily={'National 2'} fontWeight="300" fontSize={'34px'} color={'#333e48'}>Log in</Text>
             
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" 
               onChange={(event)=>setEmaillog(event.target.value)}
                />
              </FormControl>
           
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" 
               onChange={(event)=>setPasswordlog(event.target.value)}
                />
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
                  }}
                  type="submit"
                  >
                  Sign in
                </Button>
               
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </form>
      ):(
        <Dashborad />
      )}
      </div>
    );
  }