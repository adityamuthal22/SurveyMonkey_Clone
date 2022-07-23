import { Accordion, AccordionButton, AccordionIcon, AccordionItem,  AccordionPanel,  Box, Button, Checkbox,  Image,  Link,  Text } from '@chakra-ui/react';
import React from 'react'
import { isAuth } from './IsAuth';
import Navbar2 from './Navbar2';
import styles from "../styles/Dashboard.module.css"
import Footer from './Footer';

const Dashborad = () => {
  const username=isAuth();
  return (
    <div>
     <Navbar2 />
        <Box className={styles.username}>
          <Text>Welcome back,</Text>
         <Link  marginLeft={'10px'} _hover={{outline:"none"}} color={'#007FAA'}>
          <Text>{username}!</Text>
          </Link>
        </Box>
        <Box>
          <Accordion allowToggle>
          <AccordionItem className={styles.accordion1}>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left' _hover={{textDecoration:"none"}} display={'flex'}>
                <Text color={'#00b159'} fontWeight={'500'} >Quick survey</Text>: Which of these tools do you use at least once a month?  (Select all that apply)
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
         <Box>
              <Box display={'flex'} justifyContent={'space-around'}  >
                 <Box className={styles.checkbox1}><Checkbox /><Text>Marketo</Text></Box>
                 <Box className={styles.checkbox1}><Checkbox /><Text>Microsoft PowerBI</Text></Box>
                 <Box className={styles.checkbox1}><Checkbox /><Text>Microsoft Teams</Text></Box>
                 <Box className={styles.checkbox1}><Checkbox /><Text>Oracle Eloqua</Text></Box>

              </Box>
              <Box display={'flex'} justifyContent={'space-around'}>
                 <Box className={styles.checkbox1}><Checkbox /><Text>Salesforce</Text></Box>
                 <Box className={styles.checkbox1}><Checkbox /><Text>Tableau</Text></Box>
                 <Box className={styles.checkbox1}><Checkbox /><Text>Zendesk</Text></Box>
                 <Box className={styles.checkbox1}><Checkbox /><Text>Zoom</Text></Box>

              </Box>
              <Box display={'flex'} >
                 <Box className={styles.checkbox1}><Checkbox /><Text>Not applicable</Text></Box>
                 <Box className={styles.checkbox1}><Checkbox /><Text>Other (please specify)</Text></Box>
                

              </Box>
              <button className={styles.next_but}>NEXT</button>
         </Box>
         </AccordionPanel>
          </AccordionItem>
      </Accordion>
        </Box>

        <Box backgroundColor={'#f7f8fa'} padding={'30px'}>
         <Box>
         <Text className={styles.get_start}>Let's get started & create your first survey!</Text>
          <Button  _hover={'none'} backgroundColor={'#00b159 '} className={styles.create_but}>CREATE SURVEY</Button>
         </Box>
         <Box textAlign={'left'} marginLeft={'20%'}>
          <Text fontSize={'20px'}>Survey Examples</Text>
          <Text fontSize={'12px'}>See what kinds of insights you can discover from survey results. Here is an example of an imaginary company with a realistic challenge. See all examples.</Text>
         <Image marginTop={'10px'} src={'https://i.im.ge/2022/07/24/F7RLKa.png'}></Image>
         </Box>
        </Box>
        <Footer />
    </div>
  )
}

export default Dashborad;