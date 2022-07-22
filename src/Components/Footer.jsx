import { Box, Image, Select, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Box marginTop={'50px'}>
        <hr />
      <Select width={'100px'} 
          backgroundColor={'#6b787f'} 
          marginTop={'20px'} 
          marginLeft={'20px'} 
          fontWeight={'500'}
          placeholder='English'
          >
          <option  value='option1'>Dansk</option><hr />
          <option value='option2'>Deutsch</option><hr />
          <option value='option3'>Espanol</option><hr />
          <option value='option3'>Suomi</option><hr />
          <option value='option3'>Francis</option><hr />
          <option value='option3'>English(UK)</option><hr />
          <option value='option3'>Italino</option><hr />
          <option value='option3'>Portugues</option>

        </Select>
      </Box>
      <Box width={'35%'} marginLeft={'20px'} marginTop={'20px'}>
        <Text>SurveyMonkey is brought to you by momentive.ai. Shape what's next with AI‑driven insights and experience management solutions built for the pace of modern business.</Text>
      </Box>
      <Box width={'100%'}
       marginTop={'20px'}
       display={'flex'}
       justifyContent={'space-between'}
       >
        <Text marginLeft={'20px'}>Copyright © 1999-2022 Momentive</Text>
        <Image height={'100px'}  src="https://i.im.ge/2022/07/22/FqzgX8.png"></Image>
      </Box>
    </div>
  )
}

export default Footer