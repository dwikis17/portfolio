
import styled from 'styled-components'


const Section = styled.div`
display: flex;
justify-content: center;
`

const Container = styled.div`
    width: 1400px;
    background-color: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
function Navbar() {
  return (
    <Section className=''>
        <Container className='p-3'>
        <img src='./image/ezskin.png' className='h-[40px]'></img>
           <div className='flex items-center gap-[50px]'>
          
                <ul className='flex gap-[20px]'>
                    <li>Home</li>
                    <li>Project</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
           </div>
        </Container>
    </Section>
  )
}

export default Navbar