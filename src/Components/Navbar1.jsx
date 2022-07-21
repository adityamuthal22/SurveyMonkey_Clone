import { Box, Button, Image, Link, Menu, MenuButton, MenuItem, MenuList,  Text} from '@chakra-ui/react'
import {ArrowForwardIcon, ChevronDownIcon} from "@chakra-ui/icons"
import React from 'react'
import { useNavigate } from 'react-router'

const Navbar1 = () => {
  const navigate=useNavigate()
  function handleLogin(){
    navigate("/Login")
  }
  return (
    <Box>
        <div style={{display:"flex",
        justifyContent:"space-around",
        height:"70px",
        width:"100%",
        border:"1px solid white",
        position:"fixed",
        top:"0",
       backgroundColor:"white",
       alignItems:"center",
      zIndex:3,
         boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}>
        <Box width="200px" >
           <Link to="/">
           <Image src="https://prod.smassets.net/assets/cms/cc/app/2.178.0/images/logo-surveymonkey.svg" />
           </Link>
        </Box>
       
        <Box display="flex" gap="1.5rem">
                <Box>
            <Menu>
          <MenuButton _hover="none" backgroundColor="white" as={Button} rightIcon={<ChevronDownIcon />} >
            Products
          </MenuButton>
          <MenuList display="flex" padding="40px" gap="20px" marginLeft="-150px">
            <Box width="250px">
                      <Text fontSize="13px" color= "black">Surveys</Text>
                      <hr />
                    <Box>
                          <MenuItem display="row" >
                          <Box color="#007fb2" fontWeight="bold" marginTop="8px" ><h6 >SurveyMonkey</h6></Box>
                          <Box fontSize="14px" marginTop="4px"> <p >Create & send surveys with the world's leading online survey software</p></Box>
                          </MenuItem>
                    </Box>
                    <Box>
                            <MenuItem display="row" >
                            <Box color="#007fb2" fontWeight="bold" marginTop="8px" ><h6 >Enterprise</h6></Box>
                             <Box fontSize="14px" marginTop="4px"> <p >Empower your organization with our secure survey platform</p></Box>
                            </MenuItem>
                    </Box>
                    <Box>
                          <MenuItem display="row" >
                            <Box color="#007fb2" fontWeight="bold" marginTop="8px" ><h6>Integrations & Plu-ins</h6></Box>
                             <Box fontSize="14px" marginTop="4px"> <p >Bring survey insights into your business apps</p></Box>
                            </MenuItem>
                    </Box>
            </Box>
            
            <Box  width="250px">
                      <Text fontSize="13px" color= "black">Specialized products</Text>
                      <hr />
                    <Box>
                          <MenuItem display="row" >
                          <Box color="#007fb2" fontWeight="bold" marginTop="8px" ><h6 >Audience</h6></Box>
                          <Box fontSize="14px" marginTop="4px"> <p >Collect survey responses from our global consumer panel </p></Box>
                          </MenuItem>
                    </Box>
                    <Box>
                            <MenuItem display="row">
                            <Box color="#007fb2" fontWeight="bold" marginTop="8px" ><h6 >CX</h6></Box>
                             <Box fontSize="14px" marginTop="4px"> <p >Understand & improve customer experience (NPS)</p></Box>
                            </MenuItem>
                    </Box>
                    <Box>
                          <MenuItem display="row" >
                            <Box color="#007fb2" fontWeight="bold" marginTop="8px" ><h6>Engage</h6></Box>
                             <Box fontSize="14px" marginTop="4px"> <p >Understand & increase employee engagement</p></Box>
                            </MenuItem>
                    </Box>
            </Box>
            <Box  width="250px">
                      {/* <Text fontSize="13px" color= "black"></Text> */}
                      
                    <Box marginTop="22px">
                          <MenuItem display="row" >
                          <Box color="#007fb2" fontWeight="bold" marginTop="8px" ><h6 >TechValidate</h6></Box>
                          <Box fontSize="14px" marginTop="4px"> <p >Create marketing content from customer feedback</p></Box>
                          </MenuItem>
                    </Box>
                    <Box>
                            <MenuItem display="row">
                            <Box color="#007fb2" fontWeight="bold" marginTop="8px" ><h6 >Apply</h6></Box>
                             <Box fontSize="14px" marginTop="4px"> <p >Collect,review & manage application online</p></Box>
                            </MenuItem>
                    </Box>
                    <Box>
                          <MenuItem display="row" >
                            <Box color="#007fb2" fontWeight="bold" marginTop="8px" ><h6>Wufoo</h6></Box>
                             <Box fontSize="14px" marginTop="4px"> <p >Gather data & payments with online forms</p></Box>
                            </MenuItem>
                    </Box>
                    <Box>
                          <MenuItem display="row" >
                            <Box color="#007fb2" fontWeight="bold" marginTop="8px" ><h6>GetFeedback</h6></Box>
                             <Box fontSize="14px" marginTop="4px"> <p >Customer feedback for SalesForce</p></Box>
                            </MenuItem>
                    </Box>
                    <Box color="#007fb2" fontWeight="bold" marginTop="12px" marginLeft="80px"   >
                     <Link display="flex" gap="5px">
                     <h6 >View All Products </h6>
                      <span>{<ArrowForwardIcon />}</span>
                     </Link>
                    </Box>

            </Box>
          </MenuList>
        </Menu>
            </Box>
            <Box>
            <Menu>
          <MenuButton _hover="none" backgroundColor="white" as={Button} rightIcon={<ChevronDownIcon />}>
            Solutions
          </MenuButton>
          <MenuList display="flex" padding="50px" gap="20px" marginLeft="-280px">
          <Box  width="250px">
                      <Text fontSize="13px" color= "black">Survey Types</Text>
                      <hr />
                    <Box color="#007fb2"  display="row" fontSize="14px" marginTop="20px" >
                        <Link><h6 >Customer Satisfaction</h6></Link>
                        <Link><h6 >Customer Loyalty</h6></Link>
                        <Link><h6 >Event Surveys</h6></Link>
                    </Box>
                    <Box color="#007fb2"  display="row" fontSize="14px" marginTop="20px" >
                        <Link><h6 >Customer Satisfaction</h6></Link>
                        <Link><h6 >Customer Loyalty</h6></Link>
                        <Link><h6 >Event Surveys</h6></Link>
                    </Box>
                    <Box color="#007fb2"  display="row" fontSize="14px" marginTop="20px" >
                        <Link><h6 >Customer Satisfaction</h6></Link>
                        <Link><h6 >Customer Loyalty</h6></Link>
                        <Link><h6 >Event Surveys</h6></Link>
                    </Box>
                     <Box color="#007fb2" fontWeight="500" marginTop="70px">
                     <Link display="flex" gap="5px">
                     <h6 >Explore more survey types </h6>
                      <span>{<ArrowForwardIcon />}</span>
                     </Link>
                    </Box>
            </Box>
            <Box  width="250px">
                      <Text fontSize="13px" color= "black">People Powered Data for business</Text>
                      <hr />
                    <Box>
                          <MenuItem display="row" >
                          <Box color="#007fb2" fontWeight="bold" marginTop="8px" ><h6 >Customers</h6></Box>
                          <Box fontSize="14px" marginTop="4px"> <p >Win more business with Customer Powered Data </p></Box>
                          </MenuItem>
                    </Box>
                    <Box>
                            <MenuItem display="row">
                            <Box color="#007fb2" fontWeight="bold" marginTop="8px" ><h6 >Employees</h6></Box>
                             <Box fontSize="14px" marginTop="4px"> <p >Build a stronger workForce with Employee Powered Data</p></Box>
                            </MenuItem>
                    </Box>
                    <Box>
                          <MenuItem display="row" >
                            <Box color="#007fb2" fontWeight="bold" marginTop="8px" ><h6>Markets</h6></Box>
                             <Box fontSize="14px" marginTop="4px"> <p >Validate business strategy with Market Powered Data</p></Box>
                            </MenuItem>
                    </Box>
            </Box>
            <Box  width="250px">
                      <Text fontSize="13px" color= "black">Solution for teams</Text>
                      <hr />
                    <Box>
                          <MenuItem display="row" >
                          <Box color="#007fb2" fontWeight="bold" marginTop="8px" ><h6 >Customer Experience</h6></Box>
                          <Box fontSize="14px" marginTop="4px"> <p >Delight customers & increase loyalty through feedback</p></Box>
                          </MenuItem>
                    </Box>
                    <Box>
                            <MenuItem display="row">
                            <Box color="#007fb2" fontWeight="bold" marginTop="8px" ><h6 >Human Resources</h6></Box>
                             <Box fontSize="14px" marginTop="4px"> <p >Improve your employee experience, engagement & retention</p></Box>
                            </MenuItem>
                    </Box>
                    <Box>
                          <MenuItem display="row" >
                            <Box color="#007fb2" fontWeight="bold" marginTop="8px" ><h6>Marketing</h6></Box>
                             <Box fontSize="14px" marginTop="4px"> <p >Create winning campaigns, boost ROI & drive growth</p></Box>
                            </MenuItem>
                    </Box>
                    <Box>
                          <MenuItem display="row" >
                            <Box color="#007fb2" fontWeight="bold" marginTop="8px" ><h6>Education</h6></Box>
                             <Box fontSize="14px" marginTop="4px"> <p >Elevate your student experience and become a data-driven institution</p></Box>
                            </MenuItem>
                    </Box>
            </Box>
          </MenuList>
        </Menu>
            </Box>
            <Box>
            <Menu>
          <MenuButton _hover="none" backgroundColor="white" as={Button} rightIcon={<ChevronDownIcon />}>
           Resources
          </MenuButton>
      
          <MenuList display="flex" padding="50px" gap="20px" marginLeft="-400px">
          <Box  width="250px">
                    <Box>
                          <MenuItem display="row" >
                          <Box color="#007fb2" fontWeight="bold" marginTop="8px" ><h6 >Resources</h6></Box>
                          <Box fontSize="14px" marginTop="4px"> <p >Best practices for using surveys & surveys data</p></Box>
                          </MenuItem>
                    </Box>
            </Box>
            <Box  width="250px">
                    <Box>
                          <MenuItem display="row" >
                          <Box color="#007fb2" fontWeight="bold" marginTop="8px" ><h6 >Curiosity at Work</h6></Box>
                          <Box fontSize="14px" marginTop="4px"> <p >Our blog about surveys,tips for business, & more</p></Box>
                          </MenuItem>
                    </Box>
            </Box>
            <Box  width="250px">
                    <Box>
                          <MenuItem display="row" >
                          <Box color="#007fb2" fontWeight="bold" marginTop="8px" ><h6 >Help Center</h6></Box>
                          <Box fontSize="14px" marginTop="4px"> <p >Tutorials & how-to guides for using SurveyMonkey</p></Box>
                          </MenuItem>
                    </Box>  
            </Box>
          </MenuList>
        </Menu>

            </Box>
            <Button _hover="none" backgroundColor="white">Plans & Prices</Button>
        </Box>
        <Box display="flex" gap="5px">
          
            <Button _hover="none" backgroundColor="white" onClick={handleLogin}>Log in</Button>
          
            <Button backgroundColor="#f9be00">Sign up free</Button>
        </Box>
        </div>
    </Box>
  )
}

export default Navbar1