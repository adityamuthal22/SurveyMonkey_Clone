import { Box,Text,Button,Image,Link } from '@chakra-ui/react'
import React from 'react'

import styles from "../styles/Home.module.css";
import Footer from './Footer';
import Navbar1 from './Navbar1'


const Homepage = () => {
  return (
    <div>
       <Navbar1 />
    <Box marginTop="70px">
  
    {/* Animation Part Text */}
          <Box className="wrapper">
            <ul className ="dynamic-txt">
            <li>Are my customers actually satisfied?</li>
            <li>Are my Employees happy at work?</li>
            <li>Do People like attending my events?</li>
            <li>Will my product be a success's or a flop?</li>
            </ul>
          </Box>
    {/* Animation Part Text ended */}
          <Box className="global-text">
            <Text>
                  A global leader in survey software. 20 million questions answered daily.
            </Text>

          </Box>
          <Box className={styles.adigetbutton} >
               <Button _hover={{backgroundColor:"#00ce78"}} >
               Get Started
               </Button>
          </Box>
          <Box marginTop={'200px'}>
            <Text className={styles.text1}>
                Join more than 19 million active users worldwide
            </Text>
          </Box>
          {/* all users images  */}
          <Box className={styles.users_images}>
            <Image src="https://prod.smassets.net/assets/cms/sm/uploads//Allbirds-slate.png"></Image>
            <Image src='https://prod.smassets.net/assets/cms/sm/uploads//Tweezerman-logo-2x.png'></Image>
            <Image src='https://prod.smassets.net/assets/cms/sm/uploads//Adobe-logo-2x.png'></Image>
            <Image src='https://prod.smassets.net/assets/cms/sm/uploads//Verizon-logo-2x.png'></Image>
            <Image src='https://prod.smassets.net/assets/cms/sm/uploads//sephora-logo.png'></Image>
          </Box>
          {/* plan work for that for you */}

          <Box marginTop={'100px'}>
            <Text className={styles.plan_works}>
            Choose a plan that works for you
            </Text>
          </Box>
          <Box marginTop={'20px'}>
            <Text className={styles.text2}>
            Get an individual plan with features that you need, or create a team instead!
            </Text>
          </Box>
    </Box>
     {/* Card section Start */}
     <div className={styles.Card_head}>
      <div>
            <div style={{height:"100px",backgroundColor:"#00ce78",border:"none",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",fontWeight:"500",color:"white"}}>
              <Text >Basic</Text>
            </div>
            <Box style={{display:"flex",justifyContent:"center",height:"60px",marginTop:"20px",border:"none",boxShadow:"none"}}>
            <Image  src='https://prod.smassets.net/assets/cms/cc/app/2.178.0/images/sm-app.svg'></Image>
            </Box>
            <p style={{textAlign:"center",fontSize:"12px", marginTop:"20px"}}>Always free</p>
            <Button style={{backgroundColor:"#00ce78",display:"flex" ,marginTop:"20px",marginLeft:"110px",color:"white"}}>Sign up</Button>
            <Text style={{fontSize: "16px",lineHeight:" 24px",marginTop:"20px",textAlign:"center",padding:"10px"}}>Send unlimited surveys with up to 10 questions. Response limits apply.</Text>
      </div>
      <div>
             <div style={{height:"100px",backgroundColor:"#054165",border:"none",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",fontWeight:"500",color:"white"}}>
             <Text >Individual Advantage</Text>
             </div>
             <h1 style={{margin:" 0",fontSize: "44px",marginTop:"5px",textAlign:"center",fontWeight:"500"}}>₹1,999</h1>
             <Text style={{textAlign:'center',fontSize:"16px"}}>/ month</Text>
             <p style={{textAlign:"center",fontSize:"12px", marginTop:"10px"}}>Billed ₹23,988 annually</p>
             <Button style={{backgroundColor:"#054165",display:"flex" ,marginTop:"20px",marginLeft:"80px",color:"white"}}>See all features</Button>
            <Text style={{fontSize: "16px",lineHeight:" 24px",marginTop:"20px",textAlign:"center",padding:"10px"}}>Get our most popular features for creating, sending & analyzing surveys.</Text>
      </div>
      <div>
              <div style={{height:"100px",backgroundColor:"#661c5e",border:"none",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",fontWeight:"500",color:"white"}}>
              <Text >Team Advantage</Text>
              </div>
              <h1 style={{margin:" 0",fontSize: "44px",marginTop:"5px",textAlign:"center",fontWeight:"500"}}>₹1,550</h1>
             <Text style={{textAlign:'center',fontSize:"16px"}}>per user / month</Text>
             <p style={{textAlign:"center",fontSize:"12px", marginTop:"10px"}}>Starting at 3 users, billed annually</p>
             <Button style={{backgroundColor:"#661c5e",display:"flex" ,marginTop:"20px",marginLeft:"80px",color:"white"}}>See all features</Button>
            <Text style={{fontSize: "16px",lineHeight:" 24px",marginTop:"20px",textAlign:"center",padding:"10px"}}>Collaboration tools and survey features that help your team work more efficiently.</Text>
      </div>
     </div>



     {/* Tools that spark business breakthroughs start */}
     <Box marginTop={'100px'}>
            <Text className={styles.plan_works}>
            Tools that spark business breakthroughs
            </Text>
          </Box>
          <Box marginTop={'20px'}>
            <Text className={styles.text2}>
            Discover specialized tool kits designed for your role and industry.
            </Text>
          </Box>


      <Box className={styles.tool_kit}>
        <Box className={styles.small_1}>
          <Image src="https://prod.smassets.net/assets/cms/sm/uploads//customer-support-toolkit-directory.png"></Image>
          <Text className={styles.adi_tool_text} >Customer support</Text>
          <Text className={styles.adi_tool_text2}>Provide better customer experiences while keeping your teams engaged.</Text>
          <Box className={styles.adi_link_1}><Link >Learn more</Link></Box>
        </Box>
        <Box className={styles.small_1}>
          <Image src="https://prod.smassets.net/assets/cms/sm/uploads//hr-leader-toolkit-directory.png"></Image>
          <Text className={styles.adi_tool_text} >Human resources</Text>
          <Text className={styles.adi_tool_text2}>Retain your workforce by fostering a world-class employee experience.</Text>
          <Box className={styles.adi_link_1}><Link >Learn more</Link></Box>

        </Box>
        <Box className={styles.small_1}>
          <Image src="https://prod.smassets.net/assets/cms/sm/uploads//product-manager-toolkit-directory.png"></Image>
          <Text className={styles.adi_tool_text} >Product management</Text>
          <Text className={styles.adi_tool_text2}>Build products that drive impact and offer a strong product-market fit.</Text>
          <Box className={styles.adi_link_1}><Link >Learn more</Link></Box>

        </Box>
      </Box>

        {/* More tool kits for industry leaders */}
        <Box marginTop={'100px'}>
            <Text className={styles.plan_works}>
            More tool kits for industry leaders
            </Text>
          </Box>

          <Box className={styles.adi_kit_box}>
            <Box  className={styles.adi_kit_box1}>
            <Box className={styles.adi_link_1}><Link >Demand generation manager</Link></Box>
            <Box className={styles.adi_link_1}><Link >Brand marketer</Link></Box>
            </Box>

            <Box  className={styles.adi_kit_box1}>
            <Box className={styles.adi_link_1}><Link >Diversity, equity & inclusion</Link></Box>
            <Box className={styles.adi_link_1}><Link >User researcher</Link></Box>
            </Box>

            <Box  className={styles.adi_kit_box1}>
            <Box className={styles.adi_link_1}><Link >Product marketer</Link></Box>
            <Box className={styles.adi_link_1}><Link >CRM admin</Link></Box>
            </Box>
          </Box>
          <Box marginTop={'100px'} textAlign="center" fontSize={'15px'}>
            <Button className={styles.view_button}>View all</Button>
          </Box>
         
         {/* feedback */}

         <Box backgroundColor={'#f7f8fa'}>
         <Box marginTop={'100px'} width={'50%'} textAlign={'center'}  marginLeft={'350px'}>
            <Text className={styles.plan_works} textAlign={'center'}>
            Go beyond collecting feedback—deliver 
            better experiences that drive your business
            </Text>
          </Box>
          <Box className={styles.feedback}>
            <Box className={styles.feedback1}>
              <Box display={'flex'} justifyContent={'center'}>
              <Image src="https://prod.smassets.net/assets/cms/sm/uploads//Momentive-Symbol-RGB-1-1.png"></Image>
              </Box>
              <Box marginTop={'30px'}>
            <Text className={styles.plan_works}>
            Momentive Solutions
            </Text>
          </Box>
          <Text className={styles.adi_tool_text2}>Get a platform that can grow and change along with your survey needs over time. Browse our plans to learn more about specific features.</Text>
            <Box marginTop={'30px'} textAlign="center">
            <button style={{border:'1px solid black', padding:'5px 15px',borderRadius:'5px',fontWeight:'500'}}>Visit Momentive</button>
            </Box>
            </Box>
            <Box className={styles.feedback1}>
            <Box display={'flex'} justifyContent={'center'}>
              <Image src="https://prod.smassets.net/assets/cms/sm/uploads//gfp-logo-rgb-2x-1.png"></Image>
              </Box>
              <Box marginTop={'30px'}>
            <Text className={styles.plan_works}>
            GetFeedback
            </Text>
          </Box>
          <Text className={styles.adi_tool_text2}>Manage your company’s data with advanced security and control, so you can enable your teams to share and collaborate safely.</Text> 
          <Box marginTop={'30px'} textAlign="center">
            <button style={{border:'1px solid black', padding:'5px 15px',borderRadius:'5px',fontWeight:'500'}}>Visit GetFeedback</button>
            </Box>
            </Box>

          </Box>
         </Box>
         {/* Still curious? */}
         <Box marginTop={'100px'}>
            <Text className={styles.plan_works}>
            Still curious?
            </Text>
          </Box>
          <Box marginTop={'20px'}>
            <Text textAlign={'center'} className={styles.text2}>
            Explore these additional resources to help you launch successful survey <br/> projects.
            </Text>
          </Box>


      <Box  className={styles.tool_kit}>
        <Box className={styles.small_1}>
          <Image src="https://prod.smassets.net/assets/cms/sm/uploads//golden-state-warriors.png"></Image>
          <Text className={styles.adi_tool_text} >Success Stories</Text>
          <Text className={styles.adi_tool_text2}>Read about our customers, explore our webinars, and get guides on collecting feedback in your industry.</Text>
          <Box className={styles.adi_link_1}><Link >Explore resources</Link></Box>
        </Box>
        <Box className={styles.small_1}>
          <Image src="https://prod.smassets.net/assets/cms/sm/uploads//blog-tile-card.png"></Image>
          <Text className={styles.adi_tool_text} >Blog</Text>
          <Text className={styles.adi_tool_text2}>Get tips on how to create better surveys, hear the latest product news, or check out our signature research.</Text>
          <Box className={styles.adi_link_1}><Link >See Curiosity at Work</Link></Box>

        </Box>
        <Box className={styles.small_1}>
          <Image src="https://prod.smassets.net/assets/cms/sm/uploads//help-center-tile.png"></Image>
          <Text className={styles.adi_tool_text} >Help Center</Text>
          <Text className={styles.adi_tool_text2}>Access tutorials on how features work, learn more about billing, contact Customer Support, and more.</Text>
          <Box className={styles.adi_link_1}><Link >Visit Help Center</Link></Box>

        </Box>
      </Box>

      <Box className={styles.Net_p}>
        <Text>Net Promoter, Net Promoter System, Net Promoter Score, NPS and the NPS-related emoticons are registered <br /> trademarks of Bain & Company, Inc., Fred Reichheld and Satmetrix Systems, Inc.</Text>
      </Box>

      {/* Footer section */}
      <Box>
        <Footer />
      </Box>
    </div>
  )
}

export default Homepage