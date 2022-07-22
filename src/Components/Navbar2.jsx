import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Image, Input, Link, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {ChevronDownIcon} from "@chakra-ui/icons"
import styles from "../styles/Navbar2.module.css"

const Navbar2 = () => {
  return (
    <div>
        <Box className={styles.Navbar2box}>
           <Box className={styles.Nav_first}>
          <Link to="/homepage"> 
          <Image height={'30px'} src={'https://cdn.smassets.net/assets/dashweb/smlib.globaltemplates/13.0.0/assets/logo/surveymonkey_logo_dark.svg'}></Image>
          </Link>
           <button className={styles.butnav1}>Dashboard</button>
           <button className={styles.butnav1}>My surveys</button>
           <button className={styles.butnav1}>Plans & pricing</button>
           </Box>
           <Box className={styles.Nav_first}>
            <button className={styles.butnav2}>Upgrade</button>
            <button className={styles.butnav3}>Create Survey</button>
       
            <Grid />
            <Help />
            <Box>
            <Menu>
                <MenuButton  backgroundColor={'#3f3b33'}  height={'30px'}  color={'white'} _hover={'none'} _focus={'none'} as={Button} rightIcon={<ChevronDownIcon />}>
                    adityamuthal.2208@gmail.com
                </MenuButton>
                <MenuList marginLeft={'60px'} fontWeight={"500"}>
                    <MenuItem fontWeight={"500"}>My Account</MenuItem>
                    <MenuItem fontWeight={"500"}>Library</MenuItem>
                    <MenuItem fontWeight={"500"}>Contact</MenuItem>
                    <MenuItem fontWeight={"500"}>Sign Out</MenuItem>
                </MenuList>
                </Menu>
            </Box>
           </Box>
        </Box>
    </div>
  )
}

export default Navbar2

function Grid() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button backgroundColor={'#3f3b33'} _hover={'#3f3b33'} ref={btnRef} colorScheme='teal' onClick={onOpen}>
        <Link>
            <Image height={'25px'} src='https://cdn.smassets.net/assets/dashweb/smlib.globaltemplates/13.0.0/assets/ProductsIcon.svg'></Image>
            </Link>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  function Help() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button backgroundColor={'#3f3b33'} _hover={'#3f3b33'} ref={btnRef} colorScheme='teal' onClick={onOpen}>
        <Link>
            <Image height={'25px'} src='https://cdn.smassets.net/assets/dashweb/smlib.globaltemplates/13.0.0/assets/HelpIcon.svg'></Image>
            </Link>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }